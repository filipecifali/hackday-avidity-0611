# Manual Sample Download Guide (No API Needed!)

Download music loops directly from Freesound.org's website - no API key or script needed!

## 📦 What You Need to Download

To use loop-based organic mode, download a few samples in each category:
- **3-5 drum loops** (full beat patterns)
- **2-3 bass loops**
- **2-3 melody loops** (piano, guitar, or synth)
- **1-2 vocal chops** (optional)

Total: ~10-15 files, about 20-50MB

## 🔍 Direct Search Links

Click these links to find samples on Freesound.org:

### Drum Loops
**Link:** https://freesound.org/search/?q=drum+loop+120+bpm&f=duration:%5B1+TO+10%5D&s=rating_desc

**What to look for:**
- "drum loop" or "beat" in the title
- 2-8 seconds long
- BPM around 110-130 (any tempo works)
- Good ratings (stars)

**Download 3-5 drum loops**

---

### Bass Loops
**Link:** https://freesound.org/search/?q=bass+loop&f=duration:%5B1+TO+10%5D&s=rating_desc

**What to look for:**
- "bass loop" or "bassline" in title
- 2-8 seconds long
- Rhythmic bass patterns

**Download 2-3 bass loops**

---

### Melody Loops (Piano)
**Link:** https://freesound.org/search/?q=piano+loop+melodic&f=duration:%5B1+TO+10%5D&s=rating_desc

**Download 1-2 piano loops**

### Melody Loops (Guitar)
**Link:** https://freesound.org/search/?q=guitar+loop&f=duration:%5B1+TO+10%5D&s=rating_desc

**Download 1-2 guitar loops**

### Melody Loops (Synth)
**Link:** https://freesound.org/search/?q=synth+loop+melodic&f=duration:%5B1+TO+10%5D&s=rating_desc

**Download 1-2 synth loops**

---

### Vocal Chops (Optional)
**Link:** https://freesound.org/search/?q=vocal+chop&f=duration:%5B1+TO+10%5D&s=rating_desc

**Download 1-2 vocal samples if you want**

---

## 💾 How to Download from Freesound

1. **Click a search link above**
2. **Browse the results** - click on any sound that looks interesting
3. **Listen to preview** - click the play button
4. **Like it? Download it:**
   - Click the **"Download"** button (right side of page)
   - You DON'T need to log in - just click "Download without logging in"
   - Save the file to your Downloads folder

5. **Repeat** until you have enough samples!

## 📁 Where to Put Downloaded Files

Move your downloaded files into these folders:

```
samples/
├── drums/       ← Put drum loops here
├── bass/        ← Put bass loops here
├── melody/      ← Put melody loops here (piano/guitar/synth)
└── vocals/      ← Put vocal chops here (optional)
```

**File format:** MP3, WAV, or OGG all work fine!

**File names:** Any name is fine - the app will find them automatically

## 🏷️ Create manifest.json

After placing your files, create a simple `manifest.json` in the `samples/` folder:

```json
{
  "drums": [
    { "file": "drum_loop_1.mp3", "tag": "drum-loop" },
    { "file": "drum_loop_2.mp3", "tag": "drum-loop" },
    { "file": "kick.wav", "tag": "kick" }
  ],
  "bass": [
    { "file": "bass_loop_1.mp3", "tag": "bass-loop" },
    { "file": "bass_loop_2.mp3", "tag": "bass-loop" }
  ],
  "melody": [
    { "file": "piano_loop.mp3", "tag": "piano-loop" },
    { "file": "guitar_loop.wav", "tag": "guitar-loop" }
  ],
  "vocals": [
    { "file": "vocal_chop.mp3", "tag": "vocal-chop" }
  ]
}
```

**Replace the file names** with your actual downloaded file names!

## ✅ Quick Checklist

- [ ] Download 3-5 drum loops → save to `samples/drums/`
- [ ] Download 2-3 bass loops → save to `samples/bass/`
- [ ] Download 2-3 melody loops → save to `samples/melody/`
- [ ] (Optional) Download 1-2 vocal chops → save to `samples/vocals/`
- [ ] Create `samples/manifest.json` with your file names
- [ ] Test it in the app!

## 🎮 Test Your Samples

1. Open `index.html` in your browser
2. Select **"Organic"** mode
3. Choose any style/mood
4. Click **"Generate Music"**

**Expected console output:**
```
🎵 Loading loop-based music from samples...
✅ Drum loop loaded: drum_loop_1.mp3
✅ Bass loop loaded: bass_loop_1.mp3
✅ Melody loop loaded: piano_loop.mp3
🎵 All loops loaded and playing!
```

## 💡 Tips

**Finding good loops:**
- Sort by "rating" or "downloads" to find popular samples
- Look for "loop" in the title
- Preview before downloading!
- BPM doesn't matter too much - mix different tempos for interesting effects

**Sample quality:**
- Higher rating = usually better quality
- Check file size: bigger usually = higher quality
- Look for comments from other users

**License awareness:**
- Most samples are Creative Commons (free to use)
- Check the license before commercial use
- Usually listed on the sample page

## 🚀 Recommended Quick Start Packs

**Minimal Setup (5 files, 5 minutes):**
- 2 drum loops
- 1 bass loop
- 2 melody loops

**Standard Setup (10 files, 10 minutes):**
- 4 drum loops
- 2 bass loops
- 3 melody loops
- 1 vocal chop

**Full Setup (20+ files, 20 minutes):**
- 8 drum loops + individual kicks/snares
- 5 bass loops
- 6 melody loops
- 3 vocal chops

## 🆘 Troubleshooting

**"No loops found"**
→ Make sure `manifest.json` exists and file names match exactly

**"404 loading sample"**
→ Check file names in `manifest.json` match actual files

**"Loops sound weird"**
→ Different BPMs/keys mixed together - normal! Try different combinations

**Can't download from Freesound**
→ Try right-click → "Save link as" on the download button

## 🎵 Alternative Sample Sources

If Freesound doesn't work, try these free alternatives:

- **Looperman.com** - https://www.looperman.com/loops - Free loops, no signup
- **FreeSound.org** - https://freesound.org - What we're using
- **SampleSwap** - https://sampleswap.org - Free sample packs
- **99Sounds** - https://99sounds.org - Free sample libraries

All are legal and free for personal use!

---

**Once you've downloaded your samples, you're ready to make music! 🎶**
