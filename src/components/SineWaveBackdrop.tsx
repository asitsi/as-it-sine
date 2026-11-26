export function SineWaveBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      {/* Ambient radial glows matching AS-IT SINE cyan -> blue -> violet palette */}
      <div className="absolute -top-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 dark:bg-cyan-500/15 blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/4 -right-32 h-[34rem] w-[34rem] rounded-full bg-violet-500/20 dark:bg-violet-600/15 blur-3xl animate-pulse-glow" />
      <div className="absolute -bottom-40 left-1/3 h-[28rem] w-[28rem] rounded-full bg-blue-500/15 dark:bg-blue-600/10 blur-3xl" />

      {/* Subtle architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(100,116,139,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,116,139,0.12) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
        }}
      />

      {/* Flowing Sine Waves */}
      <svg
        className="absolute bottom-0 left-0 w-[120%] max-w-none opacity-45 dark:opacity-35 animate-wave-drift"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sineWaveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#2563EB" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="sineWaveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path
          d="M0,192 C180,96 360,288 540,192 C720,96 900,288 1080,192 C1260,96 1350,160 1440,192"
          stroke="url(#sineWaveGrad1)"
          strokeWidth="2.5"
        />
        <path
          d="M0,228 C200,132 380,310 580,220 C780,130 960,300 1160,210 C1300,150 1380,185 1440,215"
          stroke="url(#sineWaveGrad2)"
          strokeWidth="1.75"
          strokeDasharray="6 6"
        />
      </svg>
    </div>
  );
}
