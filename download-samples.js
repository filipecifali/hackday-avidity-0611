#!/usr/bin/env node

/**
 * Freesound.org Sample Downloader
 * Downloads music loops (drums, bass, melody) from Freesound.org
 *
 * Setup:
 * 1. Get free API key from https://freesound.org/apiv2/apply/
 * 2. Set environment variable: export FREESOUND_API_KEY="your_key_here"
 * 3. Run: node download-samples.js
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const API_KEY = process.env.FREESOUND_API_KEY;

if (!API_KEY) {
    console.error('❌ Error: FREESOUND_API_KEY environment variable not set!');
    console.error('Get your free API key at: https://freesound.org/apiv2/apply/');
    console.error('Then run: export FREESOUND_API_KEY="your_key_here"');
    process.exit(1);
}

// Sample categories to download
const SAMPLE_QUERIES = {
    drums: [
        { query: 'drum loop 120 bpm hip hop', tag: 'drum-loop', count: 5 },
        { query: 'kick drum one shot', tag: 'kick', count: 3 },
        { query: 'snare drum one shot', tag: 'snare', count: 3 },
        { query: 'hi hat loop', tag: 'hihat', count: 3 }
    ],
    bass: [
        { query: 'bass loop 120 bpm', tag: 'bass-loop', count: 5 },
        { query: 'bass guitar loop', tag: 'bass-guitar', count: 3 }
    ],
    melody: [
        { query: 'piano loop melodic', tag: 'piano-loop', count: 3 },
        { query: 'guitar loop melodic', tag: 'guitar-loop', count: 3 },
        { query: 'synth loop melodic 120 bpm', tag: 'synth-loop', count: 3 }
    ],
    vocals: [
        { query: 'vocal chop sample', tag: 'vocal-chop', count: 3 }
    ]
};

// Create directories
const SAMPLE_DIR = './samples';
['drums', 'bass', 'melody', 'vocals'].forEach(dir => {
    const dirPath = path.join(SAMPLE_DIR, dir);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
});

// Helper to make API requests
function freesoundSearch(query, filter = '') {
    return new Promise((resolve, reject) => {
        const params = new URLSearchParams({
            query: query,
            filter: filter,
            sort: 'rating_desc',
            fields: 'id,name,previews,duration,download,license',
            page_size: 15,
            token: API_KEY
        });

        const url = `https://freesound.org/apiv2/search/text/?${params}`;

        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(JSON.parse(data));
                } else {
                    reject(new Error(`API returned ${res.statusCode}: ${data}`));
                }
            });
        }).on('error', reject);
    });
}

// Download file
function downloadFile(url, filepath) {
    return new Promise((resolve, reject) => {
        const urlObj = new URL(url);
        const protocol = urlObj.protocol === 'https:' ? https : http;

        const file = fs.createWriteStream(filepath);
        protocol.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => {});
            reject(err);
        });
    });
}

// Main download function
async function downloadSamples() {
    console.log('🎵 Starting Freesound.org sample download...\n');

    const manifest = {
        drums: [],
        bass: [],
        melody: [],
        vocals: []
    };

    for (const [category, queries] of Object.entries(SAMPLE_QUERIES)) {
        console.log(`📁 Downloading ${category} samples...`);

        for (const { query, tag, count } of queries) {
            try {
                console.log(`  🔍 Searching: "${query}"`);

                // Filter for loops (duration between 1-10 seconds) and good quality
                const filter = 'duration:[1 TO 10] channels:2';
                const results = await freesoundSearch(query, filter);

                if (!results.results || results.results.length === 0) {
                    console.log(`    ⚠️  No results found`);
                    continue;
                }

                // Download top results
                const samplesToDownload = results.results.slice(0, count);

                for (let i = 0; i < samplesToDownload.length; i++) {
                    const sample = samplesToDownload[i];

                    // Use preview-hq-mp3 (high quality preview)
                    const previewUrl = sample.previews['preview-hq-mp3'];
                    if (!previewUrl) {
                        console.log(`    ⚠️  No preview available for: ${sample.name}`);
                        continue;
                    }

                    // Sanitize filename
                    const sanitizedName = sample.name
                        .replace(/[^a-z0-9]/gi, '_')
                        .toLowerCase()
                        .substring(0, 50);

                    const filename = `${tag}_${i + 1}_${sanitizedName}.mp3`;
                    const filepath = path.join(SAMPLE_DIR, category, filename);

                    // Skip if already downloaded
                    if (fs.existsSync(filepath)) {
                        console.log(`    ✓ Already exists: ${filename}`);
                        manifest[category].push({
                            file: filename,
                            tag: tag,
                            duration: sample.duration,
                            license: sample.license
                        });
                        continue;
                    }

                    // Download
                    console.log(`    ⬇️  Downloading: ${filename}`);
                    await downloadFile(previewUrl, filepath);
                    console.log(`    ✅ Downloaded: ${filename} (${sample.duration.toFixed(2)}s)`);

                    // Add to manifest
                    manifest[category].push({
                        file: filename,
                        tag: tag,
                        duration: sample.duration,
                        license: sample.license
                    });

                    // Rate limiting - wait 500ms between downloads
                    await new Promise(resolve => setTimeout(resolve, 500));
                }

            } catch (error) {
                console.error(`    ❌ Error: ${error.message}`);
            }
        }
        console.log('');
    }

    // Save manifest
    const manifestPath = path.join(SAMPLE_DIR, 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log(`📝 Manifest saved to: ${manifestPath}`);

    // Summary
    console.log('\n✨ Download complete!');
    console.log(`📊 Summary:`);
    Object.entries(manifest).forEach(([category, samples]) => {
        console.log(`   ${category}: ${samples.length} samples`);
    });
}

// Run
downloadSamples().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
});
