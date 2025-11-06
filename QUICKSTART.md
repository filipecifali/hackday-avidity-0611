# Quick Start: Adding High-Quality Stems

Based on the video tutorial reference, here's how to create professional stems for this system.

## Current Status

✅ **Hybrid system is implemented and working**
✅ **Synthesis fallback is active** - Try it now! Enter a mood and hear the music.
⏳ **Waiting for audio stems** - Add them to unlock professional quality

## What You Need

For each mood, create 5 instrument tracks:
1. **Drums** - 4/4 kick, snare, hi-hats
2. **Bass** - Root notes following chord progression
3. **Chords** - Piano, guitar, or synth pads
4. **Melody** - Lead instrument (trumpet, sax, keys)
5. **Pads** - Atmospheric background layers

## Quick Production Guide (Lo-Fi Jazz Style)

### 1. Chords (Start Here)
```
- Use electric piano or warm synth preset
- Chord progression: C → G → Am → F (for happy)
- Add SLIDES and BENDS between chords
- Rhythm: Swing feel, laid-back groove
- Export: 8 bars, loopable
```

### 2. Bass Line
```
- Start with root tones (C, G, A, F)
- Jump to other chord tones in between
- Add small leading notes up to main tones
- Keep it groovy and simple
- Export: 8 bars, matches chord loop
```

### 3. Drums
```
- Four-on-floor kick OR laid-back swing
- Rim rhythm or regular kick-snare pattern
- SQUASH the drums (compression!)
- Add saturation/distortion for crunch
- Throw on shaker/hi-hat for texture
- Export: 8 bars, loopable
```

### 4. Melody
```
- Brass preset (trumpet/saxophone sound)
- Play over the chord progression
- Add expression and slides
- Don't overplay - leave space!
- Export: 8 bars, optional variations
```

### 5. Pads
```
- Soft, atmospheric synth
- Long sustained notes following chords
- Lots of reverb
- Low in the mix (background element)
- Export: 8 bars, very ambient
```

## Quick DAW Setup (Any DAW)

### Settings
- **Tempo**: 120 BPM (happy), 70 BPM (calm), etc.
- **Length**: 8 bars (16 beats = ~16 seconds at 120 BPM)
- **Format**: MP3 or WAV
- **Sample Rate**: 44100 Hz
- **Bit Depth**: 16-bit minimum

### Export Each Track Separately
```
1. Solo the drums track → Export as "happy_drums_01.mp3"
2. Solo the bass track → Export as "happy_bass_01.mp3"
3. Solo the chords track → Export as "happy_chords_01.mp3"
4. Solo the melody track → Export as "happy_melody_01.mp3"
5. Solo the pads track → Export as "happy_pads_01.mp3"
```

### Place Files in Correct Folders
```
audio/stems/drums/happy_drums_01.mp3
audio/stems/bass/happy_bass_01.mp3
audio/stems/chords/happy_chords_01.mp3
audio/stems/melody/happy_melody_01.mp3
audio/stems/pads/happy_pads_01.mp3
```

## Pro Tips from the Video

✨ **Slowdown technique**: Record at normal speed, then slow down 10-20% for lo-fi vibe
🎛️ **Saturation**: Add warmth with tube saturation or tape emulation
🔊 **Compression**: Squash those drums! Make them punchy
🌊 **Reverb**: Add space, especially on pads and melody
🎹 **Imperfection**: Don't quantize everything - human feel is key
🎵 **Slides & Bends**: Essential for that jazzy, emotional quality

## Fastest Way to Get Started (No DAW)

### Option 1: Download Free Loops (5 minutes)
1. Go to **Looperman.com**
2. Search for: "jazz piano 120 bpm", "lo-fi bass", "chill drums"
3. Download 5 loops that fit together
4. Rename and place in correct folders
5. Refresh the page - hybrid system activates!

### Option 2: Use Sample Packs (10 minutes)
1. Download free lo-fi pack from **LANDR Samples**
2. Find 5 loops from the pack
3. Use free online converter to trim to 8 bars
4. Rename and organize
5. Done!

### Option 3: AI Generation (15 minutes)
1. Use **Suno AI** or **AIVA** to generate a track
2. Use stem separation tool like **LALAL.AI** (free tier)
3. Extract drums, bass, other, vocals (becomes pads)
4. Organize and rename files
5. Ready to go!

## File Naming Reference

```
{mood}_{instrument}_{version}.mp3

Examples:
happy_drums_01.mp3
happy_bass_01.mp3
happy_chords_01.mp3
happy_melody_01.mp3
happy_pads_01.mp3

energetic_drums_01.mp3
calm_drums_01.mp3
sad_drums_01.mp3
peaceful_drums_01.mp3
excited_drums_01.mp3
```

## BPM Guide for Each Mood

| Mood       | BPM | Feel                          |
|------------|-----|-------------------------------|
| Happy      | 120 | Upbeat, cheerful              |
| Energetic  | 140 | Fast, driving, intense        |
| Calm       | 70  | Slow, relaxed, chill          |
| Sad        | 65  | Melancholic, emotional        |
| Peaceful   | 60  | Very slow, meditative         |
| Excited    | 150 | Very fast, high energy        |

## Testing Your Stems

1. Add stems for one mood (e.g., "happy")
2. Open `index.html` in browser
3. Type "happy" and click "Generate Music"
4. Status should show: **(High Quality Stems)**
5. Hear your professionally produced music!

## Troubleshooting

**"Still using Synthesized mode"**
- Check file paths exactly match the naming convention
- Ensure files are in correct subdirectories
- Check browser console for loading errors
- Verify files are valid MP3/WAV format

**"Music doesn't loop smoothly"**
- Ensure stems are exactly the same length
- Check that loop points are clean (fade in/out at ends)
- Use 8 or 16 bar loops for best results

**"Volume balance is off"**
- Edit `stemLevels` in index.html for each mood
- Values range from 0.0 (silent) to 1.0 (full volume)
- Typical: drums 0.7-1.0, melody 0.8-1.0, pads 0.3-0.7

## Next Steps

1. **Start with one mood** - Make "happy" sound great first
2. **Test and iterate** - Adjust volumes, swap stems
3. **Expand gradually** - Add other moods when ready
4. **Share your creation** - This is a unique musical experience!

---

**Remember**: The synthesis fallback already sounds good! Stems are an enhancement, not a requirement. Start using it now, add stems later when you have time to make them perfect.
