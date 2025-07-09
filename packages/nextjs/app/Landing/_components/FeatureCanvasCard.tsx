"use client";

import { useEffect, useRef } from "react";

interface FeatureCanvasCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCanvasCard({ icon, title, description }: FeatureCanvasCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = 300);
    const height = (canvas.height = 200);

    let scanY = 0;
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.5 + 0.2,
    }));

    const draw = () => {
      // Fondo
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);

      // Partículas flotantes
      ctx.fillStyle = "#00ff41aa";
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.y += p.speed;
        if (p.y > height) p.y = 0;
      });

      // Borde neón pulsante
      ctx.lineWidth = 4;
      ctx.strokeStyle = `hsl(${(Date.now() / 10) % 360}, 100%, 50%)`;
      ctx.strokeRect(0, 0, width, height);

      // Escaneo vertical
      const gradient = ctx.createLinearGradient(0, scanY, 0, scanY + 20);
      gradient.addColorStop(0, "transparent");
      gradient.addColorStop(0.5, "#00ff41aa");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanY, width, 20);
      scanY = (scanY + 1) % height;

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="relative w-[300px] h-[200px]">
      <canvas ref={canvasRef} className="absolute top-0 left-0 z-0 rounded-md" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center font-mono text-sm pointer-events-none">
        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-3">{icon}</div>
        <h3 className="text-green-300 text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
