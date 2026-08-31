'use client'

import React, { useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo } from "react";
import { Zap } from "lucide-react";
import { OutsourcingBlock, FaceOrientation, CubeAngles } from "@/types/animation";
import { CUBE_BLOCKS, FACE_ORIENTATIONS } from "./cubeBlocks";
import { CubeFaceCard } from "./CubeFaceCard";

interface CubeStageProps {
  onInspectBlock?: (block: OutsourcingBlock) => void;
  selectedFace?: FaceOrientation | null;
  onSelectFace?: (face: FaceOrientation) => void;
  expansionFactor?: number;
  angles?: CubeAngles;
  setAngles?: React.Dispatch<React.SetStateAction<CubeAngles>>;
  className?: string;
}

const DEFAULT_INITIAL_ANGLES: CubeAngles = { rotX: -20, rotY: 35 };

// Runs before paint on the client (avoids the initial-size "pop"), falls back
// to the regular effect during SSR so React doesn't warn about a no-op.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Memoized so idle-rotation state updates on CubeStage don't cascade into
// re-rendering all six face subtrees every tick only the wrapper div's
// inline transform actually needs to change per frame.
const MemoCubeFaceCard = React.memo(CubeFaceCard);

export const CubeStage: React.FC<CubeStageProps> = ({
  onInspectBlock,
  selectedFace: controlledSelectedFace,
  onSelectFace: controlledOnSelectFace,
  expansionFactor = 1.35,
  angles: controlledAngles,
  setAngles: controlledSetAngles,
  className = "h-112.5 sm:h-125 lg:h-135",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [internalAngles, setInternalAngles] = useState<CubeAngles>(DEFAULT_INITIAL_ANGLES);
  const [internalSelectedFace, setInternalSelectedFace] = useState<FaceOrientation | null>("front");

  const angles = controlledAngles ?? internalAngles;
  const setAngles = controlledSetAngles ?? setInternalAngles;
  const selectedFace = controlledSelectedFace !== undefined ? controlledSelectedFace : internalSelectedFace;
  const onSelectFace = controlledOnSelectFace ?? setInternalSelectedFace;

  const isDraggingRef = useRef<boolean>(false);
  const pointerStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastPointerRef = useRef<{ x: number; y: number; time: number }>({
    x: 0,
    y: 0,
    time: 0,
  });
  const velocityRef = useRef<{ vx: number; vy: number }>({ vx: 0, vy: 0 });
  const targetAnglesRef = useRef<CubeAngles | null>(null);

  // Stops idle ambient rotation permanently once the user actually engages
  // with the cube — previously the cube would auto-rotate away from a face
  // the user had just deliberately clicked, the moment the pointer left it.
  const hasInteractedRef = useRef<boolean>(false);

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isBuilt, setIsBuilt] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  const [cubeSize, setCubeSize] = useState<number>(270);

  //Respect prefers-reduced-motion 
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Only run the animation loop while the cube is actually on screen
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsVisible(true); 
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useIsomorphicLayoutEffect(() => {
    const updateSize = () => {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;
      if (width < 640) {
        setCubeSize(210);
      } else if (width < 1024) {
        setCubeSize(240);
      } else if (width < 1280) {
        setCubeSize(260);
      } else {
        setCubeSize(275);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Single mount-in reveal instead of an infinite bounce loop.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBuilt(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Physics / rotation loop
  useEffect(() => {
    if (!isVisible) return; 
    if (prefersReducedMotion) return; 

    let animationFrameId: number;

    const updatePhysics = () => {
      if (targetAnglesRef.current) {
        const target = targetAnglesRef.current;
        setAngles((prev) => {
          const dx = target.rotX - prev.rotX;
          const dy = target.rotY - prev.rotY;

          const newRotX = prev.rotX + dx * 0.12;
          const newRotY = prev.rotY + dy * 0.12;

          if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
            targetAnglesRef.current = null;
            return { rotX: target.rotX, rotY: target.rotY };
          }
          return { rotX: newRotX, rotY: newRotY };
        });
      } else if (!isDraggingRef.current) {
        if (
          Math.abs(velocityRef.current.vx) > 0.01 ||
          Math.abs(velocityRef.current.vy) > 0.01
        ) {
          setAngles((prev) => ({
            rotX: prev.rotX - velocityRef.current.vy,
            rotY: prev.rotY + velocityRef.current.vx,
          }));
          velocityRef.current.vx *= 0.94;
          velocityRef.current.vy *= 0.94;
        } else if (!isHovered && !hasInteractedRef.current) {
          // Ambient idle sway — only ever runs before the user's first
          // interaction. Once they drag or pick a face, this stops for good.
          setAngles((prev) => ({
            rotX: prev.rotX + 0.08 * Math.sin(Date.now() * 0.0008),
            rotY: (prev.rotY + 0.3) % 360,
          }));
        }
      }

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isVisible, prefersReducedMotion, setAngles]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;

    hasInteractedRef.current = true;
    isDraggingRef.current = true;
    targetAnglesRef.current = null;
    velocityRef.current = { vx: 0, vy: 0 };
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
    lastPointerRef.current = {
      x: e.clientX,
      y: e.clientY,
      time: performance.now(),
    };

    const target = e.currentTarget;
    try {
      target.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const now = performance.now();
    const dt = Math.max(now - lastPointerRef.current.time, 1);
    const dx = e.clientX - lastPointerRef.current.x;
    const dy = e.clientY - lastPointerRef.current.y;

    const sensitivity = 0.55;

    setAngles((prev) => ({
      rotX: Math.max(-180, Math.min(180, prev.rotX - dy * sensitivity)),
      rotY: prev.rotY + dx * sensitivity,
    }));

    velocityRef.current = {
      vx: (dx / dt) * 4.5,
      vy: (dy / dt) * 4.5,
    };

    lastPointerRef.current = { x: e.clientX, y: e.clientY, time: now };
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const snapToFace = useCallback(
    (face: FaceOrientation) => {
      hasInteractedRef.current = true;
      onSelectFace(face);
      const targetConfig = FACE_ORIENTATIONS[face];
      if (targetConfig) {
        targetAnglesRef.current = {
          rotX: targetConfig.rotX,
          rotY: targetConfig.rotY,
        };
      }
    },
    [onSelectFace],
  );

  const halfSize = cubeSize / 2;
  const currentZDistance = halfSize * expansionFactor;

  const getFaceTransform = (face: FaceOrientation, built: boolean) => {
    if (!built) {
      return "translate3d(0px, 0px, 0px) scale(0.1)";
    }

    switch (face) {
      case "front":
        return `translateZ(${currentZDistance}px)`;
      case "back":
        return `rotateY(180deg) translateZ(${currentZDistance}px)`;
      case "right":
        return `rotateY(90deg) translateZ(${currentZDistance}px)`;
      case "left":
        return `rotateY(-90deg) translateZ(${currentZDistance}px)`;
      case "top":
        return `rotateX(90deg) translateZ(${currentZDistance}px)`;
      case "bottom":
        return `rotateX(-90deg) translateZ(${currentZDistance}px)`;
    }
  };

  // Only actually animating (drag momentum or snap easing) gets the
  // will-change hint — leaving it on permanently costs GPU memory for no
  // benefit while the cube is sitting idle or fully at rest.
  const isActivelyAnimating =
    isDraggingRef.current || targetAnglesRef.current !== null ||
    Math.abs(velocityRef.current.vx) > 0.01 || Math.abs(velocityRef.current.vy) > 0.01;

  const faceCards = useMemo(
    () =>
      CUBE_BLOCKS.map((block) => {
        const isSelected = selectedFace === block.face;
        const transformStyle = getFaceTransform(block.face, isBuilt);

        return (
          <div
            key={block.id}
            id={`face-wrapper-${block.face}`}
            onClick={(e) => {
              e.stopPropagation();
              snapToFace(block.face);
            }}
            className="absolute top-0 left-0 transition-all cursor-pointer"
            style={{
              width: `${cubeSize}px`,
              height: `${cubeSize}px`,
              transform: transformStyle,
              transformStyle: "preserve-3d",
              transition: isDraggingRef.current
                ? "none"
                : "transform 0.55s cubic-bezier(0.2, 0.9, 0.3, 1), opacity 0.5s ease",
              opacity: isBuilt ? 1 : 0,
            }}
          >
            <MemoCubeFaceCard
              block={block}
              isSelected={isSelected}
              onInspect={(b) => {
                if (onInspectBlock) {
                  onInspectBlock(b);
                }
                snapToFace(b.face);
              }}
              isExploded={true}
            />
          </div>
        );
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedFace, isBuilt, cubeSize, currentZDistance, onInspectBlock, snapToFace]
  );

  return (
    <div
      id="3d-cube-stage-container"
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full relative flex items-center justify-center cursor-grab select-none touch-none ${className}`}
      style={{ perspective: "1300px" }}
    >
      {/* Soft grounding shadow so the cube reads as sitting on a surface
          rather than floating in a void. */}
      <div
        aria-hidden="true"
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          width: `${cubeSize * 1.1}px`,
          height: `${cubeSize * 0.18}px`,
          background:
            "radial-gradient(ellipse at center, rgba(11,37,69,0.20) 0%, transparent 70%)",
          filter: "blur(6px)",
        }}
      />

      <div
        id="cube-3d-assembly"
        className="relative flex items-center justify-center transition-transform ease-out"
        style={{
          width: `${cubeSize}px`,
          height: `${cubeSize}px`,
          transformStyle: "preserve-3d",
          transform: `rotateX(${angles.rotX}deg) rotateY(${angles.rotY}deg)`,
          willChange: isActivelyAnimating ? "transform" : "auto",
        }}
      >
        <div
          id="inner-core-engine"
          className="absolute rounded-2xl border border-dashed border-slate-300 bg-white dark:bg-black flex flex-col items-center justify-center p-4 transition-all duration-500 shadow-lg dark:shadow-[0_0_35px_rgba(255,255,255,0.15)]"
          style={{
            width: `${cubeSize * 0.52}px`,
            height: `${cubeSize * 0.52}px`,
            transform: "translateZ(0px)",
            transformStyle: "preserve-3d",
            opacity: isBuilt ? 1 : 0,
            transition: "opacity 0.6s ease 0.2s, transform 0.6s cubic-bezier(0.2,0.9,0.3,1) 0.2s",
          }}
        >
          <div className="w-8 h-8 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-black flex items-center justify-center font-black mb-1.5">
            <Zap size={16} className="fill-slate-900 stroke-slate-900 dark:fill-black dark:stroke-black" />
          </div>
          <span className="font-mono text-[9px] font-black uppercase tracking-widest text-slate-900 dark:text-white text-center">
            DELIVERABLES
          </span>
        </div>

        {faceCards}
      </div>
    </div>
  );
};