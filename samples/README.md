# Audio Samples Directory

This directory contains audio samples/loops for the organic music mode.

## 🎵 Three Modes of Operation

### 1. **Synthetic Mode** (Default)
- Uses Tone.js synthesizers
- Fully electronic/synth sounds
- No downloads needed
- Instant playback

### 2. **Organic Mode - Sampler** (If no loops found)
- Uses individual note samples from Salamander Grand Piano
- Loads from Tone.js CDN automatically
- Natural piano sound
- Generates melodies/chords from notes

### 3. **Organic Mode - Loop-Based** (If samples downloaded)
- Uses real music loops from Freesound.org
- Layered drum/bass/melody loops
- Most realistic, production-ready sound
- **Requires downloading samples first!**

## 🚀 Quick Start - Download Loops

To use loop-based organic mode:

### Step 1: Get Freesound API Key
See **[FREESOUND_SETUP.md](../FREESOUND_SETUP.md)** for detailed instructions.

Quick version:
1. Go to https://freesound.org/apiv2/apply/
2. Sign up and apply for free API key
3. Copy your API key

### Step 2: Set API Key
```bash
export FREESOUND_API_KEY="your_api_key_here"
```

### Step 3: Download Samples
```bash
node download-samples.js
```

This will download ~30-40 loops organized into:
- `samples/drums/` - Drum loops, kicks, snares, hi-hats
- `samples/bass/` - Bass loops and bass guitar
- `samples/melody/` - Piano, guitar, synth loops
- `samples/vocals/` - Vocal chops/samples
- `samples/manifest.json` - Metadata about all samples

### Step 4: Test It!
1. Open `index.html`
2. Select **"Organic"** mode
3. Generate music
4. It will automatically detect and use your downloaded loops!

## 🎛️ How It Works

When you click "Generate Music" in Organic mode:

**WITH downloaded samples:**
```
✅ Found manifest.json
🎵 Loading loop-based music...
✅ Drum loop loaded
✅ Bass loop loaded
✅ Melody loop loaded
🎵 All loops playing!
```

**WITHOUT downloaded samples:**
```
❌ No manifest.json found
🎹 Using sampler mode (CDN piano samples)
```

## 📁 Directory Structure

```
samples/
├── drums/
│   ├── drum-loop_1_*.mp3
│   ├── kick_1_*.mp3
│   ├── snare_1_*.mp3
│   └── hihat_1_*.mp3
├── bass/
│   ├── bass-loop_1_*.mp3
│   └── bass-guitar_1_*.mp3
├── melody/
│   ├── piano-loop_1_*.mp3
│   ├── guitar-loop_1_*.mp3
│   └── synth-loop_1_*.mp3
├── vocals/
│   └── vocal-chop_1_*.mp3
├── manifest.json
├── README.md (this file)
├── SAMPLES_README.md (detailed info)
└── QUICK_START.md (quick guide)
```

## 🔧 Customization

### Download More/Different Samples

Edit `download-samples.js` and modify the `SAMPLE_QUERIES` object:

```javascript
const SAMPLE_QUERIES = {
    drums: [
        { query: 'trap drums 140 bpm', tag: 'trap-drums', count: 5 },
        // Add your own queries here!
    ],
    // ...
};
```

Then run `node download-samples.js` again.

### Recommended Search Terms

- **Drums:** "boom bap drums", "trap drums", "house drums", "dnb drums"
- **Bass:** "808 bass", "sub bass", "reese bass", "funk bass"
- **Melody:** "lofi piano", "ambient pad", "rhodes loop", "guitar riff"
- **FX:** "vinyl noise", "tape hiss", "riser", "impact"

## 📜 License

All samples from Freesound.org are Creative Commons licensed. Check `manifest.json` for specific license info for each sample. Most are:
- **CC0** (Public Domain)
- **CC BY** (Attribution required)
- **CC BY-NC** (Non-commercial use only)

Always check licenses before commercial use!

## 🐛 Troubleshooting

**"No samples found"**
- Run `node download-samples.js` first
- Check that `manifest.json` exists in `samples/` directory

**"404 errors loading samples"**
- File paths might be incorrect
- Check console for exact error
- Verify files exist in correct directories

**"Loops don't sync"**
- Download samples with matching BPM (default: 120 BPM)
- Edit search queries to specify BPM

**"Sounds weird/off-key"**
- Loops might be in different keys
- Try downloading again with different queries
- Use pitch-shift feature (coming soon!)

## 🎯 Next Steps

- [ ] Download samples using `download-samples.js`
- [ ] Test organic mode with loops
- [ ] Customize search queries for your style
- [ ] Mix loops with different styles/moods
- [ ] Share your favorite combinations!
