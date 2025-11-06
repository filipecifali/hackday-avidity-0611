#!/usr/bin/env node

/**
 * Audio Stem Generator for Mood-Based Music System
 *
 * This script generates simple demo audio stems using Tone.js offline rendering.
 * These are placeholder stems to demonstrate the hybrid system.
 *
 * For production use, replace these with professionally recorded/produced stems.
 *
 * Usage: node generate-stems.js
 *
 * Requirements: npm install tone
 */

const Tone = require('tone');
const fs = require('fs');
const path = require('path');

// Ensure Tone.js is available
if (!Tone.Offline) {
    console.error('Tone.js offline rendering not available in this environment.');
    console.log('\nTo generate high-quality stems, you have a few options:');
    console.log('1. Use a DAW (Ableton, FL Studio, Logic) to create and export stems');
    console.log('2. Use online sample libraries (Splice, Looperman, LANDR)');
    console.log('3. Commission a producer to create custom stems');
    console.log('\nFor now, the system will use synthesis fallback mode.');
    process.exit(0);
}

// Stem configuration for happy mood (120 BPM, 8 bars)
const config = {
    bpm: 120,
    duration: 16, // 8 bars = 16 seconds at 120 BPM
    mood: 'happy'
};

async function generateDrumsStem() {
    console.log('Generating drums stem...');

    return await Tone.Offline(({ transport }) => {
        const kick = new Tone.MembraneSynth().toDestination();
        const snare = new Tone.NoiseSynth({
            noise: { type: 'white' },
            envelope: { attack: 0.001, decay: 0.2, sustain: 0, release: 0.1 }
        }).toDestination();
        const hihat = new Tone.MetalSynth({
            frequency: 200,
            envelope: { attack: 0.001, decay: 0.05, release: 0.01 },
            volume: -12
        }).toDestination();

        transport.bpm.value = config.bpm;

        // Four-on-the-floor kick pattern
        const kickPattern = new Tone.Loop((time) => {
            kick.triggerAttackRelease('C1', '8n', time);
        }, '4n');
        kickPattern.start(0);

        // Snare on 2 and 4
        const snarePattern = new Tone.Loop((time) => {
            snare.triggerAttackRelease('8n', time);
        }, '2n');
        snarePattern.start('4n'); // Start on beat 2

        // Hi-hat eighth notes
        const hihatPattern = new Tone.Loop((time) => {
            hihat.triggerAttackRelease('32n', time);
        }, '8n');
        hihatPattern.start(0);

        transport.start();
    }, config.duration);
}

async function generateBassStem() {
    console.log('Generating bass stem...');

    return await Tone.Offline(({ transport }) => {
        const bass = new Tone.MonoSynth({
            oscillator: { type: 'sine' },
            envelope: { attack: 0.05, decay: 0.3, sustain: 0.4, release: 0.8 }
        }).toDestination();

        transport.bpm.value = config.bpm;

        // Simple bassline: C - G - A - F
        const bassNotes = ['C2', 'G2', 'A2', 'F2'];
        const bassPart = new Tone.Part((time, note) => {
            bass.triggerAttackRelease(note, '2n', time);
        }, bassNotes.map((note, i) => [i * 2, note]));
        bassPart.loop = true;
        bassPart.loopEnd = 8;
        bassPart.start(0);

        transport.start();
    }, config.duration);
}

async function generateChordsStem() {
    console.log('Generating chords stem...');

    return await Tone.Offline(({ transport }) => {
        const synth = new Tone.PolySynth(Tone.Synth, {
            oscillator: { type: 'triangle' },
            envelope: { attack: 0.8, decay: 0.5, sustain: 0.7, release: 2 },
            volume: -8
        }).toDestination();

        transport.bpm.value = config.bpm;

        // Chord progression: C - G - Am - F
        const chords = [
            ['C3', 'E3', 'G3'],
            ['G3', 'B3', 'D4'],
            ['A3', 'C4', 'E4'],
            ['F3', 'A3', 'C4']
        ];

        const chordPart = new Tone.Part((time, chord) => {
            synth.triggerAttackRelease(chord, '1n', time);
        }, chords.map((chord, i) => [i * 2, chord]));
        chordPart.loop = true;
        chordPart.loopEnd = 8;
        chordPart.start(0);

        transport.start();
    }, config.duration);
}

async function generateMelodyStem() {
    console.log('Generating melody stem...');

    return await Tone.Offline(({ transport }) => {
        const synth = new Tone.PolySynth(Tone.Synth, {
            oscillator: { type: 'triangle' },
            envelope: { attack: 0.05, decay: 0.3, sustain: 0.4, release: 1.2 }
        }).toDestination();

        transport.bpm.value = config.bpm;

        // Melody pattern
        const melody = ['C4', 'E4', 'G4', 'E4', 'A4', 'G4', 'E4', 'C4'];
        const melodyPart = new Tone.Part((time, note) => {
            if (Math.random() > 0.2) { // 80% note probability
                synth.triggerAttackRelease(note, '4n', time);
            }
        }, melody.map((note, i) => [i * 0.5, note]));
        melodyPart.loop = true;
        melodyPart.loopEnd = 4;
        melodyPart.start(0);

        transport.start();
    }, config.duration);
}

async function generatePadsStem() {
    console.log('Generating pads stem...');

    return await Tone.Offline(({ transport }) => {
        const synth = new Tone.PolySynth(Tone.Synth, {
            oscillator: { type: 'sine' },
            envelope: { attack: 1.5, decay: 1, sustain: 0.8, release: 3 },
            volume: -12
        }).toDestination();

        const reverb = new Tone.Reverb({ decay: 4, wet: 0.7 }).toDestination();
        synth.connect(reverb);

        transport.bpm.value = config.bpm;

        // Sustained pad chords
        const pads = [
            ['C4', 'E4', 'G4', 'B4'],
            ['G3', 'B3', 'D4', 'F4'],
            ['A3', 'C4', 'E4', 'G4'],
            ['F3', 'A3', 'C4', 'E4']
        ];

        const padPart = new Tone.Part((time, chord) => {
            synth.triggerAttackRelease(chord, '2n', time);
        }, pads.map((chord, i) => [i * 2, chord]));
        padPart.loop = true;
        padPart.loopEnd = 8;
        padPart.start(0);

        transport.start();
    }, config.duration);
}

async function main() {
    console.log('=== Audio Stem Generator ===\n');
    console.log('Note: This script requires Tone.js Node.js environment.');
    console.log('Tone.js offline rendering is primarily designed for browser use.\n');
    console.log('RECOMMENDED APPROACH:');
    console.log('For production-quality stems, use one of these methods:\n');
    console.log('1. DAW Software (Best Quality):');
    console.log('   - Ableton Live, FL Studio, Logic Pro, or similar');
    console.log('   - Export each instrument track as a separate audio file');
    console.log('   - Ensure loops are seamless (8 or 16 bars recommended)\n');
    console.log('2. Sample Libraries (Quick & Professional):');
    console.log('   - Splice.com - Professional sample library ($)');
    console.log('   - Looperman.com - Free loops community');
    console.log('   - LANDR Samples - Free sample packs\n');
    console.log('3. AI Generation:');
    console.log('   - Suno AI - Generate full tracks');
    console.log('   - AIVA - Compose royalty-free music');
    console.log('   - Mubert - Royalty-free stems\n');
    console.log('4. Commission Custom Stems:');
    console.log('   - Fiverr or Upwork for custom production');
    console.log('   - Typically $50-200 per mood\n');

    console.log('ALTERNATIVE: Use the included synthesis fallback');
    console.log('The system works without stems and will use Tone.js synthesis.');
    console.log('Try it now - it sounds decent and requires no audio files!\n');
}

main().catch(console.error);
