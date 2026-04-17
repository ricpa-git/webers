"use client";

import { useEffect, useRef } from "react";

const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01{}[]<>/=;:._+-*&@#$%";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let columns: number[] = [];
    let speeds: number[] = [];

    const fontSize = 14;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const colCount = Math.floor(canvas.width / fontSize);
      // Preserve existing drops, add new ones if needed
      const oldLen = columns.length;
      columns.length = colCount;
      speeds.length = colCount;
      for (let i = oldLen; i < colCount; i++) {
        columns[i] = Math.random() * canvas.height / fontSize;
        speeds[i] = 0.3 + Math.random() * 0.7;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      // Fade trail — very transparent for subtle effect
      ctx.fillStyle = "rgba(11, 15, 25, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = columns[i] * fontSize;

        // Brighter head character
        ctx.fillStyle = "rgba(59, 130, 246, 0.12)";
        ctx.fillText(char, x, y);

        // Slightly dimmer trail char above
        if (columns[i] > 1) {
          const trailChar = CHARS[Math.floor(Math.random() * CHARS.length)];
          ctx.fillStyle = "rgba(6, 182, 212, 0.06)";
          ctx.fillText(trailChar, x, y - fontSize);
        }

        columns[i] += speeds[i];

        // Reset column randomly to create staggered effect
        if (y > canvas.height && Math.random() > 0.98) {
          columns[i] = 0;
          speeds[i] = 0.3 + Math.random() * 0.7;
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
