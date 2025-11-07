# Audio Samples Directory

This directory contains audio samples for the organic music mode.

## Directory Structure

```
samples/
├── piano/          # Piano samples (Salamander Grand Piano)
├── bass/           # Bass guitar samples
├── drums/          # Drum samples (kick, snare, hi-hat, shaker)
├── guitar/         # Guitar samples
└── strings/        # String instrument samples
```

## Required Samples

### Free Sample Sources

#### 1. **Salamander Grand Piano** (Recommended for Piano)
- Source: https://archive.org/details/SalamanderGrandPianoV3
- License: Creative Commons (CC BY 3.0)
- Download: Get the basic set (48khz 16bit)
- Place in: `samples/piano/`
- Notes needed: C2, D2, E2, F2, G2, A2, B2, C3, D3, E3, F3, G3, A3, B3, C4, D4, E4, F4, G4, A4, B4, C5
- Rename format: `C2.mp3`, `D2.mp3`, etc.

#### 2. **University of Iowa Electronic Music Studios**
- Source: http://theremin.music.uiowa.edu/MIS.html
- License: Public Domain
- Instruments: Bass, Guitar, Strings
- Place bass in: `samples/bass/`
- Place guitar in: `samples/guitar/`
- Place strings in: `samples/strings/`

#### 3. **Philharmonia Orchestra Samples**
- Source: https://philharmonia.co.uk/resources/sound-samples/
- License: Creative Commons (CC BY-SA 3.0)
- Great for: Strings, orchestral sounds
- Place in: `samples/strings/`

#### 4. **Free Drum Samples**
- Source: https://freewavesamples.com/drum-samples
- License: Various (check individual samples)
- Required: kick.wav, snare.wav, hihat.wav, shaker.wav
- Place in: `samples/drums/`

## Quick Start Sample Pack

For a quick start, you can use these simplified samples:

### Minimal Setup (for testing):
1. **Piano**: Get 12 notes (C3-B3) from Salamander Grand Piano
2. **Bass**: Get 4 notes (C2, E2, G2, A2) from any bass sample pack
3. **Drums**: Get kick.wav, snare.wav, hihat.wav from any free drum pack
4. **Guitar**: Get 6 notes (E2, A2, D3, G3, B3, E4) from free guitar samples

## Alternative: Use CDN-hosted samples

If you don't want to download, the code will attempt to load samples from:
- Tonejs samples: https://tonejs.github.io/audio/salamander/
- This is used as a fallback if local samples aren't found

## File Format

- Format: MP3, WAV, or OGG
- Recommended: WAV or MP3 (48kHz, 16-bit)
- Naming: Use note names (e.g., C3.mp3, D3.mp3)

## Testing

After placing samples, open `index.html` and:
1. Select "Organic" mode
2. Choose a style and mood
3. Click "Generate Music"
4. Check browser console for loading messages
