"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01{}[]<>/=;:._+-*&@#$%";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const themeRef = useRef(resolvedTheme);

  useEffect(() => {
    themeRef.current = resolvedTheme;
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const columns: number[] = [];
    const speeds: number[] = [];

    const fontSize = 14;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const colCount = Math.floor(canvas.width / fontSize);
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
      const isLight = themeRef.current === "light";

      // Fade trail — color matches current theme background
      ctx.fillStyle = isLight
        ? "rgba(248, 250, 252, 0.10)"
        : "rgba(11, 15, 25, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = columns[i] * fontSize;

        ctx.fillStyle = isLight
          ? "rgba(37, 99, 235, 0.22)"
          : "rgba(59, 130, 246, 0.12)";
        ctx.fillText(char, x, y);

        if (columns[i] > 1) {
          const trailChar = CHARS[Math.floor(Math.random() * CHARS.length)];
          ctx.fillStyle = isLight
            ? "rgba(6, 182, 212, 0.14)"
            : "rgba(6, 182, 212, 0.06)";
          ctx.fillText(trailChar, x, y - fontSize);
        }

        columns[i] += speeds[i];

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
