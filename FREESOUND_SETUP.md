# Freesound.org Sample Downloader Setup

This guide will help you download real music loops from Freesound.org to use in the organic music mode.

## Step 1: Get Your Free API Key

1. **Go to Freesound.org:**
   - Visit: https://freesound.org/apiv2/apply/

2. **Create Account (if you don't have one):**
   - Click "Sign up" at top right
   - Fill in username, email, password
   - Verify your email

3. **Apply for API Key:**
   - Go back to: https://freesound.org/apiv2/apply/
   - Fill in the form:
     - **Name**: "Music Generator App" (or anything)
     - **Description**: "Personal music loop player/generator"
     - **Accept terms**
   - Click "Apply for a key"

4. **Get Your API Key:**
   - You'll be redirected to your credentials page
   - Copy the **API Key** (long string of letters/numbers)
   - Keep this private!

## Step 2: Set Up Environment

Open your terminal in the project directory and set the API key:

### On Mac/Linux:
```bash
export FREESOUND_API_KEY="your_api_key_here"
```

### On Windows (Command Prompt):
```cmd
set FREESOUND_API_KEY=your_api_key_here
```

### On Windows (PowerShell):
```powershell
$env:FREESOUND_API_KEY="your_api_key_here"
```

**Replace `your_api_key_here` with your actual API key!**

## Step 3: Download Samples

Run the downloader script:

```bash
node download-samples.js
```

### What it downloads:

**Drums:**
- 5 drum loops (hip-hop style, 120 BPM)
- 3 kick drum one-shots
- 3 snare drum one-shots
- 3 hi-hat loops

**Bass:**
- 5 bass loops (120 BPM)
- 3 bass guitar loops

**Melody:**
- 3 piano loops
- 3 guitar loops
- 3 synth loops (120 BPM)

**Vocals:**
- 3 vocal chops/samples

### Expected Output:

```
🎵 Starting Freesound.org sample download...

📁 Downloading drums samples...
  🔍 Searching: "drum loop 120 bpm hip hop"
    ⬇️  Downloading: drum-loop_1_hip_hop_beat.mp3
    ✅ Downloaded: drum-loop_1_hip_hop_beat.mp3 (4.00s)
  ...

📁 Downloading bass samples...
  ...

✨ Download complete!
📊 Summary:
   drums: 14 samples
   bass: 8 samples
   melody: 9 samples
   vocals: 3 samples
```

## Step 4: Check Your Samples

All samples are saved to:
```
samples/
├── drums/
├── bass/
├── melody/
├── vocals/
└── manifest.json
```

The `manifest.json` file contains metadata about all downloaded samples.

## Troubleshooting

### Error: "FREESOUND_API_KEY environment variable not set"
- Make sure you set the environment variable (Step 2)
- Make sure you're in the same terminal window where you set it

### Error: "API returned 401"
- Your API key is invalid or expired
- Get a new key from https://freesound.org/apiv2/apply/

### Error: "No results found"
- Some searches might not return results
- This is normal - the script will skip and continue

### Downloads are slow
- The script waits 500ms between downloads to respect API rate limits
- This is intentional and normal

### Can I download more samples?
- Yes! Edit `download-samples.js`
- Change the `count` values in `SAMPLE_QUERIES`
- Add new search queries

## Next Steps

After downloading samples, the music generator will automatically use them when you select **Organic mode**!

## License Info

All samples from Freesound.org are Creative Commons licensed. The downloader saves license info in `manifest.json`. Always check licenses if you plan to distribute your music commercially.

## Tips

- **Better results:** Edit the search queries in `download-samples.js` to match your style
- **BPM matching:** Most queries search for 120 BPM loops (common tempo)
- **Quality:** The script filters for stereo (2 channel) and 1-10 second duration
- **Re-download:** Delete the `samples/` folder to download fresh samples
