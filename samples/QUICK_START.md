# Quick Start Guide - Audio Samples

## Current Setup (No Download Needed!)

The **Organic mode** now uses real audio samples! By default, it loads samples from the Tone.js CDN:

**CDN Source:** https://tonejs.github.io/audio/salamander/

This is the **Salamander Grand Piano** library - high-quality, free piano samples.

## How It Works

1. **Open index.html** in your browser
2. **Select "Organic" mode** (instead of Synthetic)
3. **Choose a style and mood**
4. **Click "Generate Music"**

The organic mode will:
- Load real piano samples from the CDN
- Use them for lead melodies, chords, bass, and pads
- Sound MUCH more realistic than synthesizers!

## Browser Console Messages

When organic mode loads, you'll see:
```
Creating ORGANIC instruments with audio samples
Piano samples loaded successfully
Melody samples loaded successfully
Brass samples loaded successfully
Pad samples loaded successfully
Bass samples loaded successfully
```

## Optional: Host Samples Locally

If you want to host samples locally (faster loading, offline support):

1. Download Salamander Grand Piano samples
2. Place MP3 files in `samples/piano/` directory
3. Name them: `C2.mp3`, `D2.mp3`, `E2.mp3`, etc.
4. The code will automatically try local files first!

## Comparison

**Synthetic Mode:**
- Uses Tone.js synthesizers (FMSynth, AMSynth, etc.)
- Fully electronic sound
- Instant loading, no network needed
- Great for electronic/EDM styles

**Organic Mode:**
- Uses real audio samples (Salamander Grand Piano)
- Natural, acoustic sound
- Requires sample loading (CDN or local)
- Great for classical/jazz/acoustic styles

## Troubleshooting

**If samples don't load:**
- Check browser console for errors
- Make sure you have internet connection (for CDN)
- Try running with a local web server instead of `file://`
  - Python: `python -m http.server`
  - Node: `npx serve`

**If music sounds weird:**
- Samples take 1-2 seconds to load
- Wait for "samples loaded successfully" messages
- If still issues, switch back to Synthetic mode
