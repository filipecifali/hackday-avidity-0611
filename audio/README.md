# Audio Stems Directory

This directory contains audio stems (individual instrument tracks) used for the hybrid music generation system.

## Directory Structure

```
audio/stems/
├── drums/      - Drum patterns and percussion
├── bass/       - Bass lines
├── chords/     - Chord progressions and rhythm guitar
├── melody/     - Lead melodies and hooks
└── pads/       - Atmospheric pads and ambient textures
```

## File Naming Convention

Audio files should follow this naming pattern:
`{mood}_{instrument}_{variation}.{format}`

Examples:
- `happy_drums_01.mp3`
- `calm_bass_01.mp3`
- `energetic_melody_02.mp3`

## Supported Formats

- MP3 (recommended for web, good compression)
- WAV (highest quality, larger files)
- OGG (good compression, open format)

## Stem Requirements

For best results, stems should:
- Be **loop-friendly** (seamless when repeated)
- Have the **same BPM** within a mood category
- Be **4, 8, or 16 bars** in length
- Be mixed at appropriate levels (not too loud/quiet)
- Have minimal reverb/effects (applied dynamically in code)

## Mood Categories

### Happy (120 BPM)
- Upbeat, major key
- Bright, cheerful instrumentation

### Energetic (140 BPM)
- Fast-paced, driving rhythm
- Intense, powerful sounds

### Calm (70 BPM)
- Slow, relaxed tempo
- Soft, gentle instrumentation

### Sad (65 BPM)
- Minor key, melancholic
- Emotional, introspective

### Peaceful (60 BPM)
- Very slow, meditative
- Ambient, spacious sounds

### Excited (150 BPM)
- Very fast, high energy
- Bright, major tonality

## How to Add Stems

1. Record or create stems at the appropriate BPM for each mood
2. Export as loopable audio files
3. Name according to convention above
4. Place in appropriate subdirectory
5. The system will automatically detect and use available stems

## Sample Sources

If you need royalty-free stems to get started:
- **Splice** (https://splice.com) - Professional samples and loops
- **Looperman** (https://looperman.com) - Free loops
- **Freesound** (https://freesound.org) - Creative Commons audio
- **LANDR Samples** (https://samples.landr.com) - Free sample packs

## Current Status

✅ **Synthesis engine is high-quality and production-ready**

The system uses advanced synthesis techniques (FM synthesis, chorus, delay,
compression) that sound professional without any audio files. Audio stems
are completely OPTIONAL - only add them if you want to use specific
pre-recorded instruments or a particular sound design.

**Synthesis includes:**
- FM brass/lead sounds with delay
- Detuned chorus pads for thickness
- Filtered bass with envelope modulation
- Realistic drums (kick, snare, hi-hat)
- Humanization (velocity, timing variations)
- Professional effects chain

**When to add stems:**
- You have specific recordings you want to use
- You prefer sample-based over synthesized sound
- You want to match a particular genre/style
- You have access to professional session recordings

For most use cases, the synthesis sounds great as-is!
