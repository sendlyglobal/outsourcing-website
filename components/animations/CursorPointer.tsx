import React, { useEffect, useRef, useState } from "react";
import { ThemeProps } from "@/types/animation";
import {
  Maximize2,
  Minimize2,
  Sun,
  Moon,
  Sparkles,
  Sliders,
  RefreshCw,
  Zap,
  Orbit,
  EyeOff,
} from "lucide-react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  colorOffset: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

export const CursorCanvas: React.FC<ThemeProps> = ({
  isDark = true,
  setIsDark,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Settings State - locked to Sunset & Orbit
  const [particleCount, setParticleCount] = useState<number>(85);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [connectionDistance, setConnectionDistance] = useState<number>(140);
  const [cursorRadius, setCursorRadius] = useState<number>(160);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [fps, setFps] = useState<number>(60);

  // References for live animation loop without triggering react re-renders
  const stateRef = useRef({
    isDark,
    particleCount,
    showGrid,
    connectionDistance,
    cursorRadius,
  });

  // Keep stateRef updated synchronously
  useEffect(() => {
    stateRef.current = {
      isDark,
      particleCount,
      showGrid,
      connectionDistance,
      cursorRadius,
    };
  }, [isDark, particleCount, showGrid, connectionDistance, cursorRadius]);

  // Sunset Theme Color Palette
  const getSunsetColors = (dark: boolean) => ({
    primary: dark ? "#fb923c" : "#ea580c",
    secondary: dark ? "#f43f5e" : "#e11d48",
    particleRgb: dark ? "251, 146, 60" : "234, 88, 12",
    cursorGlow: dark ? "rgba(251, 146, 60, 0.18)" : "rgba(234, 88, 12, 0.14)",
    lineRgb: dark ? "244, 63, 94" : "225, 29, 72",
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const ripples: Ripple[] = [];

    // Cursor tracking
    let cursor = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: true,
      down: false,
    };

    // Initialize particles
    const initParticles = (count: number) => {
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 2.2 + 1.2;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.75,
          vy: (Math.random() - 0.5) * 0.75,
          radius,
          baseRadius: radius,
          alpha: Math.random() * 0.5 + 0.35,
          colorOffset: Math.random(),
        });
      }
    };

    initParticles(stateRef.current.particleCount);

    // Responsive Canvas Resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles(stateRef.current.particleCount);
    };

    window.addEventListener("resize", handleResize);

    // Pointer Event Listeners
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      cursor.active = true;
      if ("touches" in e) {
        if (e.touches.length > 0) {
          cursor.targetX = e.touches[0].clientX;
          cursor.targetY = e.touches[0].clientY;
        }
      } else {
        cursor.targetX = e.clientX;
        cursor.targetY = e.clientY;
      }
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      cursor.down = true;
      let posX = cursor.x;
      let posY = cursor.y;

      if ("touches" in e && e.touches.length > 0) {
        posX = e.touches[0].clientX;
        posY = e.touches[0].clientY;
      } else if ("clientX" in e) {
        posX = e.clientX;
        posY = e.clientY;
      }

      // Add shockwave ripple with sunset colors
      const colors = getSunsetColors(stateRef.current.isDark);
      ripples.push({
        x: posX,
        y: posY,
        radius: 0,
        maxRadius: 180,
        alpha: 0.8,
        color: colors.primary,
      });

      // Scatter nearby particles on click
      for (const p of particles) {
        const dx = p.x - posX;
        const dy = p.y - posY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && dist > 0) {
          const force = (180 - dist) / 180;
          p.vx += (dx / dist) * force * 5;
          p.vy += (dy / dist) * force * 5;
        }
      }
    };

    const handlePointerUp = () => {
      cursor.down = false;
    };

    const handleMouseLeave = () => {
      cursor.active = false;
    };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchend", handlePointerUp);
    window.addEventListener("mouseleave", handleMouseLeave);

    // FPS Meter
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsTimer = 0;

    // Animation Loop
    const render = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      frameCount++;
      fpsTimer += delta;
      if (fpsTimer >= 1000) {
        setFps(Math.round((frameCount * 1000) / fpsTimer));
        frameCount = 0;
        fpsTimer = 0;
      }

      // Sync particle count if changed in controls
      if (particles.length !== stateRef.current.particleCount) {
        initParticles(stateRef.current.particleCount);
      }

      const {
        isDark: dark,
        showGrid: grid,
        connectionDistance: maxDist,
        cursorRadius: cRadius,
      } = stateRef.current;
      const colors = getSunsetColors(dark);

      // Smooth cursor lerp
      cursor.x += (cursor.targetX - cursor.x) * 0.2;
      cursor.y += (cursor.targetY - cursor.y) * 0.2;

      // Clear Canvas with backdrop color
      ctx.fillStyle = dark ? "#000000" : "#ffffff";
      ctx.fillRect(0, 0, width, height);

      // Render Ambient Grid / Radar Pattern
      if (grid) {
        const gridSize = 48;
        const dotColor = dark
          ? "rgba(255, 255, 255, 0.08)"
          : "rgba(0, 0, 0, 0.08)";
        const activeDotColor = dark
          ? `rgba(${colors.particleRgb}, 0.45)`
          : `rgba(${colors.particleRgb}, 0.55)`;

        for (let x = 0; x < width; x += gridSize) {
          for (let y = 0; y < height; y += gridSize) {
            const dx = cursor.x - x;
            const dy = cursor.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            ctx.beginPath();
            if (cursor.active && dist < cRadius) {
              const glow = 1 - dist / cRadius;
              ctx.arc(x, y, 1.2 + glow * 1.8, 0, Math.PI * 2);
              ctx.fillStyle = activeDotColor;
            } else {
              ctx.arc(x, y, 0.9, 0, Math.PI * 2);
              ctx.fillStyle = dotColor;
            }
            ctx.fill();
          }
        }
      }

      // Draw Cursor Ambient Radial Field
      if (cursor.active) {
        const gradient = ctx.createRadialGradient(
          cursor.x,
          cursor.y,
          0,
          cursor.x,
          cursor.y,
          cRadius * 1.3,
        );
        gradient.addColorStop(0, colors.cursorGlow);
        gradient.addColorStop(
          0.6,
          dark
            ? `rgba(${colors.particleRgb}, 0.04)`
            : `rgba(${colors.particleRgb}, 0.02)`,
        );
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cursor.x, cursor.y, cRadius * 1.3, 0, Math.PI * 2);
        ctx.fill();

        // Cursor Core Indicator
        ctx.beginPath();
        ctx.arc(cursor.x, cursor.y, cursor.down ? 5 : 3.5, 0, Math.PI * 2);
        ctx.fillStyle = colors.primary;
        ctx.shadowColor = colors.primary;
        ctx.shadowBlur = cursor.down ? 16 : 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Outer Ring on cursor
        ctx.beginPath();
        ctx.arc(cursor.x, cursor.y, cursor.down ? 22 : 14, 0, Math.PI * 2);
        ctx.strokeStyle = dark
          ? `rgba(${colors.particleRgb}, 0.35)`
          : `rgba(${colors.particleRgb}, 0.45)`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // Process and Draw Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 4.5;
        r.alpha *= 0.94;

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${colors.particleRgb}, ${r.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        if (r.alpha < 0.01 || r.radius > r.maxRadius) {
          ripples.splice(i, 1);
        }
      }

      // Update and Draw Particles - Locked to Orbit Interaction Mode
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Basic Drift
        p.x += p.vx;
        p.y += p.vy;

        // Natural friction & bounds
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Keep minimum baseline drift
        if (Math.abs(p.vx) < 0.2) p.vx += (Math.random() - 0.5) * 0.1;
        if (Math.abs(p.vy) < 0.2) p.vy += (Math.random() - 0.5) * 0.1;

        // Bounce off canvas boundaries
        if (p.x < 0) {
          p.x = 0;
          p.vx *= -1;
        } else if (p.x > width) {
          p.x = width;
          p.vx *= -1;
        }

        if (p.y < 0) {
          p.y = 0;
          p.vy *= -1;
        } else if (p.y > height) {
          p.y = height;
          p.vy *= -1;
        }

        // Orbit Interaction Physics around cursor
        if (cursor.active) {
          const dx = cursor.x - p.x;
          const dy = cursor.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < cRadius) {
            const normalizedDist = 1 - dist / cRadius;
            const angle = Math.atan2(dy, dx);

            // Orbit clockwise around cursor with gentle inward gravitational attraction
            const tangentAngle = angle + Math.PI / 2;
            p.vx +=
              Math.cos(tangentAngle) * normalizedDist * 0.65 +
              Math.cos(angle) * 0.12;
            p.vy +=
              Math.sin(tangentAngle) * normalizedDist * 0.65 +
              Math.sin(angle) * 0.12;
            p.radius = p.baseRadius + normalizedDist * 2.2;
          } else {
            p.radius = p.baseRadius;
          }
        }

        // Connect particles with each other using Sunset lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * (dark ? 0.35 : 0.22);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${colors.lineRgb}, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw the Particle Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colors.particleRgb}, ${p.alpha})`;
        if (p.radius > p.baseRadius + 0.5) {
          ctx.shadowColor = colors.primary;
          ctx.shadowBlur = 6;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      id="cursor-canvas-container"
      className={`relative w-screen h-screen overflow-hidden select-none transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* The Master Background Canvas */}
      <canvas
        ref={canvasRef}
        id="interactive-cursor-canvas"
        className="absolute inset-0 block w-full h-full cursor-crosshair touch-none"
      />

      {/* Floating Header / Minimal Sunset Orbit HUD Banner */}
      <header className="absolute top-5 left-6 right-6 flex items-center justify-between pointer-events-none z-20">
        <div className="flex items-center gap-3 pointer-events-auto">
          <div
            className={`p-2.5 rounded-xl backdrop-blur-md border shadow-lg ${
              isDark
                ? "bg-black/90 border-orange-500/30 text-orange-400"
                : "bg-white/90 border-orange-300 text-orange-600 shadow-md"
            }`}
          >
            <Orbit
              className="w-5 h-5 animate-spin"
              style={{ animationDuration: "8s" }}
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1
                className={`text-sm sm:text-base font-bold tracking-tight font-['Space_Grotesk'] ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                Sunset Orbital Field
              </h1>
              <span
                className={`px-2 py-0.5 text-[10px] font-mono rounded-full border font-semibold ${
                  isDark
                    ? "bg-orange-500/10 border-orange-500/30 text-orange-400"
                    : "bg-orange-500/10 border-orange-500/40 text-orange-600"
                }`}
              >
                {fps} FPS
              </span>
              <span
                className={`hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono rounded-full border ${
                  isDark
                    ? "bg-rose-500/10 border-rose-500/30 text-rose-400"
                    : "bg-rose-500/10 border-rose-500/30 text-rose-600"
                }`}
              >
                Sunset · Orbit
              </span>
            </div>
            <p
              className={`text-[11px] ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              Particles orbit gravitationally around the cursor · Click for
              sunset shockwave
            </p>
          </div>
        </div>

        {/* Top Right Quick Actions */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {setIsDark && (
            <button
              id="btn-toggle-theme"
              onClick={() => setIsDark(!isDark)}
              className={`p-2.5 rounded-xl backdrop-blur-md border shadow-md transition-all ${
                isDark
                  ? "bg-black/90 border-zinc-800 text-zinc-300 hover:text-orange-400"
                  : "bg-white/90 border-zinc-200 text-zinc-700 hover:text-orange-600"
              }`}
              title="Toggle Light/Dark Theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          )}

          <button
            id="btn-toggle-fullscreen"
            onClick={toggleFullscreen}
            className={`p-2.5 rounded-xl backdrop-blur-md border shadow-md transition-all hidden sm:flex ${
              isDark
                ? "bg-black/90 border-zinc-800 text-zinc-300 hover:text-orange-400"
                : "bg-white/90 border-zinc-200 text-zinc-700 hover:text-orange-600"
            }`}
            title="Toggle Fullscreen"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>

          <button
            id="btn-toggle-controls"
            onClick={() => setShowControls(!showControls)}
            className={`p-2.5 rounded-xl backdrop-blur-md border shadow-md transition-all ${
              showControls
                ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white border-orange-400"
                : isDark
                  ? "bg-black/90 border-zinc-800 text-zinc-300"
                  : "bg-white/90 border-zinc-200 text-zinc-700"
            }`}
            title="Toggle Settings Panel"
          >
            {showControls ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Sliders className="w-4 h-4" />
            )}
          </button>
        </div>
      </header>

      {/* Streamlined Sunset Orbit Settings Drawer */}
      {showControls && (
        <div
          className={`absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-80 backdrop-blur-xl border rounded-2xl shadow-2xl p-5 z-20 pointer-events-auto space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-300 ${
            isDark
              ? "bg-black/90 border-zinc-800 text-white shadow-black/80"
              : "bg-white/90 border-zinc-200 text-black shadow-zinc-300/60"
          }`}
        >
          <div
            className={`flex items-center justify-between pb-3 border-b ${
              isDark ? "border-zinc-800" : "border-zinc-200"
            }`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span
                className={`text-xs font-semibold uppercase tracking-wider font-mono ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                Orbit Parameters
              </span>
            </div>
            <button
              onClick={() => {
                setParticleCount(85);
                setShowGrid(true);
                setConnectionDistance(140);
                setCursorRadius(160);
              }}
              className={`text-[11px] font-mono hover:text-orange-500 flex items-center gap-1 ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
              title="Reset parameters to default"
            >
              <RefreshCw className="w-3 h-3" />
              Reset
            </button>
          </div>

          {/* Active Configuration Badges */}
          <div
            className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-mono ${
              isDark
                ? "bg-zinc-950/80 border-zinc-800/80"
                : "bg-zinc-50 border-zinc-200"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 shadow-sm" />
              <span className={isDark ? "text-zinc-300" : "text-zinc-700"}>
                Sunset Palette
              </span>
            </div>
            <div className="flex items-center gap-1 text-orange-400 font-semibold">
              <Orbit className="w-3 h-3" />
              <span>Orbit Mode</span>
            </div>
          </div>

          {/* Particle Density Slider */}
          <div>
            <div
              className={`flex justify-between text-[11px] font-mono mb-1 ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              <span>Particle Density:</span>
              <span
                className={`font-bold ${isDark ? "text-white" : "text-black"}`}
              >
                {particleCount}
              </span>
            </div>
            <input
              type="range"
              min="30"
              max="160"
              step="5"
              value={particleCount}
              onChange={(e) => setParticleCount(Number(e.target.value))}
              className={`w-full accent-orange-500 cursor-pointer h-1.5 rounded-lg ${
                isDark ? "bg-zinc-800" : "bg-zinc-200"
              }`}
            />
          </div>

          {/* Cursor Orbit Radius Slider */}
          <div>
            <div
              className={`flex justify-between text-[11px] font-mono mb-1 ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              <span>Orbit Radius:</span>
              <span
                className={`font-bold ${isDark ? "text-white" : "text-black"}`}
              >
                {cursorRadius}px
              </span>
            </div>
            <input
              type="range"
              min="80"
              max="260"
              step="10"
              value={cursorRadius}
              onChange={(e) => setCursorRadius(Number(e.target.value))}
              className={`w-full accent-orange-500 cursor-pointer h-1.5 rounded-lg ${
                isDark ? "bg-zinc-800" : "bg-zinc-200"
              }`}
            />
          </div>

          {/* Background Radar Grid Toggle */}
          <div
            className={`pt-2 border-t flex items-center justify-between text-[11px] font-mono ${
              isDark ? "border-zinc-800" : "border-zinc-200"
            }`}
          >
            <span className={isDark ? "text-zinc-400" : "text-zinc-600"}>
              Radar Grid:
            </span>
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`px-3 py-1 rounded-md transition-all font-semibold ${
                showGrid
                  ? "bg-orange-500/20 border border-orange-500/40 text-orange-500"
                  : isDark
                    ? "bg-zinc-900 border border-zinc-800 text-zinc-500"
                    : "bg-zinc-100 border border-zinc-200 text-zinc-500"
              }`}
            >
              {showGrid ? "Active" : "Off"}
            </button>
          </div>
        </div>
      )}

      {/* Bottom Instruction Hint */}
      <footer className="absolute bottom-6 left-6 pointer-events-none z-10 hidden sm:block">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg backdrop-blur-md border text-[11px] font-mono ${
            isDark
              ? "bg-black/90 border-zinc-800 text-zinc-300 shadow-lg"
              : "bg-white/90 border-zinc-200 text-zinc-700 shadow-md"
          }`}
        >
          <Zap className="w-3.5 h-3.5 text-orange-400" />
          <span>
            Move cursor to attract particles into orbital paths · Click for
            sunset shockwave
          </span>
        </div>
      </footer>
    </div>
  );
};
