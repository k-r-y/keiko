// Professional, Modern Studio Audio Synthesizer
// Engineered for subtle, non-fatiguing, high-end acoustic feedback
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.soundProfile = 'modern-scissor'; // Default: Ultra-clean MacBook / Scissor switch
    this.volume = 0.22; // Refined, subtle default volume
    this.noiseBuffer = null;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.generatePinkNoise();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Generate pink/brownian noise for natural, warm impact acoustics (no harsh static)
  generatePinkNoise() {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 0.15; // 150ms
    this.noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = this.noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
    }
  }

  setProfile(profile) {
    this.soundProfile = profile;
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
  }

  playKeySound(isSpace = false, isEnter = false) {
    if (this.soundProfile === 'off') return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(this.volume, t);
    masterGain.connect(this.ctx.destination);

    // Natural micro-jitter (±2.5%) for organic keystroke variation
    const jitter = (Math.random() - 0.5) * 0.05;
    const scale = (1 + jitter) * (isSpace ? 0.72 : isEnter ? 0.82 : 1.0);

    switch (this.soundProfile) {
      case 'modern-scissor':
        // MacBook Pro / Magic Keyboard Scissor Switch (Clean, subtle, high-end aluminum tap)
        this.playModernScissor(t, masterGain, scale, isSpace || isEnter);
        break;

      case 'studio-thock':
        // Studio Muted Thock (Deep, warm, low-frequency dampened linear switch)
        this.playStudioThock(t, masterGain, scale, isSpace || isEnter);
        break;

      case 'minimal-tick':
        // Minimalist UI Tick (Subtle, modern tactile micro-tick like Linear/Raycast)
        this.playMinimalTick(t, masterGain, scale, isSpace || isEnter);
        break;

      case 'soft-pebble':
        // Soft Pebble Pop (Rounded, organic, calming acoustic pop)
        this.playSoftPebble(t, masterGain, scale, isSpace || isEnter);
        break;

      case 'crisp-mechanical':
        // Refined Modern Mechanical (Crisp, dampened mechanical actuation)
        this.playCrispMechanical(t, masterGain, scale, isSpace || isEnter);
        break;

      default:
        this.playModernScissor(t, masterGain, scale, isSpace || isEnter);
        break;
    }
  }

  // 1. Modern Scissor Switch (MacBook Pro / Scissor - crisp, tight, zero harshness)
  playModernScissor(t, masterGain, scale, isHeavy) {
    // A. Soft membrane impact transient (pink noise filtered around 1400Hz)
    if (this.noiseBuffer) {
      const noise = this.ctx.createBufferSource();
      noise.buffer = this.noiseBuffer;

      const bandpass = this.ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.setValueAtTime((isHeavy ? 1100 : 1450) * scale, t);
      bandpass.Q.setValueAtTime(1.8, t);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.5, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.018);

      noise.connect(bandpass);
      bandpass.connect(noiseGain);
      noiseGain.connect(masterGain);
      noise.start(t);
      noise.stop(t + 0.02);
    }

    // B. Aluminum chassis damped bottom-out (micro warm sine drop)
    const bodyOsc = this.ctx.createOscillator();
    const bodyGain = this.ctx.createGain();
    bodyOsc.type = 'sine';
    bodyOsc.frequency.setValueAtTime((isHeavy ? 140 : 210) * scale, t);
    bodyOsc.frequency.exponentialRampToValueAtTime(70, t + 0.022);

    bodyGain.gain.setValueAtTime(0.55, t);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, t + 0.024);

    bodyOsc.connect(bodyGain);
    bodyGain.connect(masterGain);
    bodyOsc.start(t);
    bodyOsc.stop(t + 0.026);
  }

  // 2. Studio Muted Thock (Deep, smooth, warm keyboard acoustics)
  playStudioThock(t, masterGain, scale, isHeavy) {
    // Low-passed warm bottom-out
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime((isHeavy ? 150 : 220) * scale, t);
    osc.frequency.exponentialRampToValueAtTime(60, t + 0.038);

    gain.gain.setValueAtTime(0.75, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(t);
    osc.stop(t + 0.042);

    // Warm wooden / foam dampening layer
    if (this.noiseBuffer) {
      const thud = this.ctx.createBufferSource();
      thud.buffer = this.noiseBuffer;

      const lowpass = this.ctx.createBiquadFilter();
      lowpass.type = 'lowpass';
      lowpass.frequency.setValueAtTime((isHeavy ? 500 : 750) * scale, t);

      const thudGain = this.ctx.createGain();
      thudGain.gain.setValueAtTime(0.4, t);
      thudGain.gain.exponentialRampToValueAtTime(0.001, t + 0.025);

      thud.connect(lowpass);
      lowpass.connect(thudGain);
      thudGain.connect(masterGain);
      thud.start(t);
      thud.stop(t + 0.028);
    }
  }

  // 3. Minimalist UI Tick (Subtle tactile click, Linear.app / Raycast style)
  playMinimalTick(t, masterGain, scale, isHeavy) {
    if (this.noiseBuffer) {
      const tick = this.ctx.createBufferSource();
      tick.buffer = this.noiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime((isHeavy ? 1600 : 2100) * scale, t);
      filter.Q.setValueAtTime(3.0, t);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.45, t);
      gain.gain.exponentialRampToValueAtTime(0.0005, t + 0.012);

      tick.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      tick.start(t);
      tick.stop(t + 0.014);
    }
  }

  // 4. Soft Pebble Pop (Calming, organic acoustic pop)
  playSoftPebble(t, masterGain, scale, isHeavy) {
    const popOsc = this.ctx.createOscillator();
    const popGain = this.ctx.createGain();

    popOsc.type = 'sine';
    popOsc.frequency.setValueAtTime((isHeavy ? 280 : 390) * scale, t);
    popOsc.frequency.exponentialRampToValueAtTime(120, t + 0.03);

    popGain.gain.setValueAtTime(0.6, t);
    popGain.gain.exponentialRampToValueAtTime(0.001, t + 0.032);

    popOsc.connect(popGain);
    popGain.connect(masterGain);
    popOsc.start(t);
    popOsc.stop(t + 0.035);
  }

  // 5. Refined Modern Mechanical (Clean, premium mechanical clack)
  playCrispMechanical(t, masterGain, scale, isHeavy) {
    // Micro tactile snap
    if (this.noiseBuffer) {
      const snap = this.ctx.createBufferSource();
      snap.buffer = this.noiseBuffer;

      const snapFilter = this.ctx.createBiquadFilter();
      snapFilter.type = 'bandpass';
      snapFilter.frequency.setValueAtTime((isHeavy ? 1800 : 2400) * scale, t);
      snapFilter.Q.setValueAtTime(2.5, t);

      const snapGain = this.ctx.createGain();
      snapGain.gain.setValueAtTime(0.35, t);
      snapGain.gain.exponentialRampToValueAtTime(0.001, t + 0.012);

      snap.connect(snapFilter);
      snapFilter.connect(snapGain);
      snapGain.connect(masterGain);
      snap.start(t);
      snap.stop(t + 0.014);
    }

    // Solid PBT keycap body pop
    const body = this.ctx.createOscillator();
    const bodyGain = this.ctx.createGain();
    body.type = 'triangle';
    body.frequency.setValueAtTime((isHeavy ? 310 : 440) * scale, t);
    body.frequency.exponentialRampToValueAtTime(140, t + 0.028);

    bodyGain.gain.setValueAtTime(0.45, t);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);

    body.connect(bodyGain);
    bodyGain.connect(masterGain);
    body.start(t);
    body.stop(t + 0.032);
  }

  // Soft, modern, non-jarring error feedback (gentle muted wood tap)
  playErrorSound() {
    if (this.soundProfile === 'off') return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, t);
    osc.frequency.exponentialRampToValueAtTime(65, t + 0.04);

    gain.gain.setValueAtTime(this.volume * 0.5, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.045);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.05);
  }

  // Elegant, subtle completion chime
  playCompleteSound() {
    if (this.soundProfile === 'off') return;
    this.init();
    if (!this.ctx) return;

    // Gentle glass / metallic chime arpeggio
    const freqs = [587.33, 739.99, 880.00, 1174.66]; // D5, F#5, A5, D6
    freqs.forEach((freq, idx) => {
      const t = this.ctx.currentTime + idx * 0.06;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(this.volume * 0.35, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.3);
    });
  }
}

export const SOUND_PROFILES = {
  'modern-scissor': {
    id: 'modern-scissor',
    name: 'MacBook Scissor (Subtle)',
    desc: 'Crisp, quiet aluminum chassis tap',
  },
  'studio-thock': {
    id: 'studio-thock',
    name: 'Studio Muted Thock',
    desc: 'Deep, warm dampened linear switch',
  },
  'minimal-tick': {
    id: 'minimal-tick',
    name: 'Minimalist UI Tick',
    desc: 'Tactile micro-tick acoustic',
  },
  'soft-pebble': {
    id: 'soft-pebble',
    name: 'Soft Pebble Pop',
    desc: 'Rounded, organic calming pop',
  },
  'crisp-mechanical': {
    id: 'crisp-mechanical',
    name: 'Refined Mechanical',
    desc: 'Dampened modern tactile switch',
  },
  'off': {
    id: 'off',
    name: 'Muted (Audio Off)',
    desc: 'Silent keyboard typing',
  },
};

export const soundEngine = new SoundEngine();
