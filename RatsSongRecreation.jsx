import React, { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';

export default function RatsSongRecreation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const synthRef = useRef(null);
  const bassRef = useRef(null);
  const loopRef = useRef(null);

  useEffect(() => {
    return () => {
      if (loopRef.current) {
        loopRef.current.dispose();
      }
      if (synthRef.current) synthRef.current.dispose();
      if (bassRef.current) bassRef.current.dispose();
      Tone.Transport.stop();
      Tone.Transport.cancel();
    };
  }, []);

  const initAudio = async () => {
    await Tone.start();
    console.log('Audio initialized');

    // Lead synth for the melody
    synthRef.current = new Tone.Synth({
      oscillator: { type: 'square' },
      envelope: {
        attack: 0.005,
        decay: 0.1,
        sustain: 0.3,
        release: 0.1
      }
    }).toDestination();

    // Bass synth
    bassRef.current = new Tone.Synth({
      oscillator: { type: 'sawtooth' },
      envelope: {
        attack: 0.01,
        decay: 0.2,
        sustain: 0.4,
        release: 0.2
      }
    }).toDestination();

    synthRef.current.volume.value = -6;
    bassRef.current.volume.value = -10;

    Tone.Transport.bpm.value = 140;

    setIsInitialized(true);
  };

  const togglePlay = async () => {
    if (!isInitialized) {
      await initAudio();
    }

    if (isPlaying) {
      Tone.Transport.stop();
      if (loopRef.current) {
        loopRef.current.stop();
      }
      setIsPlaying(false);
    } else {
      // Simple melody pattern
      const pattern = new Tone.Pattern((time, note) => {
        synthRef.current.triggerAttackRelease(note, '8n', time);
      }, ['D4', 'E4', 'F#4', 'A4', 'D5', 'D5', 'C#5', 'B4', 'A4', 'G4', 'F#4', 'E4'], 'up');

      pattern.interval = '8n';

      // Bass pattern
      let bassIndex = 0;
      const bassNotes = ['D2', 'D2', 'G2', 'A2'];

      loopRef.current = new Tone.Loop((time) => {
        bassRef.current.triggerAttackRelease(bassNotes[bassIndex % bassNotes.length], '4n', time);
        bassIndex++;
      }, '4n');

      pattern.start(0);
      loopRef.current.start(0);
      Tone.Transport.start();

      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🐀</div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Rats Meme Song
          </h1>
          <p className="text-pink-200 text-sm">Jerma Rats - Tone.js Recreation</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-medium">Playback</span>
              <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
            </div>

            <button
              onClick={togglePlay}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                isPlaying
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-purple-500 hover:bg-purple-600 text-white'
              }`}
            >
              {isPlaying ? '⏸ Stop' : '▶ Play'}
            </button>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-white font-medium mb-3">Features:</h3>
            <ul className="text-pink-200 text-sm space-y-2">
              <li>• Tempo: 140 BPM</li>
              <li>• Square wave lead synth</li>
              <li>• Sawtooth bass line</li>
              <li>• Upbeat, playful melody</li>
              <li>• 🐀 We're the rats! 🐀</li>
            </ul>
          </div>

          <div className="text-center text-xs text-pink-300">
            Click play to hear the melody. Make sure your volume is up!
          </div>
        </div>
      </div>
    </div>
  );
}
