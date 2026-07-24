import React, { useEffect, useRef } from 'react';

export const GlobalNetworkSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create 3D points on a sphere
    const pointCount = 65;
    const radius = Math.min(width, height) * 0.32;
    const points: { x: number; y: number; z: number; origX: number; origY: number; origZ: number; size: number; isGold: boolean }[] = [];

    for (let i = 0; i < pointCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / pointCount);
      const theta = Math.sqrt(pointCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      points.push({
        x,
        y,
        z,
        origX: x,
        origY: y,
        origZ: z,
        size: Math.random() * 2.5 + 1.5,
        isGold: Math.random() > 0.4
      });
    }

    let angleX = 0.002;
    let angleY = 0.003;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw subtle background radial glow
      const bgGlow = ctx.createRadialGradient(centerX, centerY, 50, centerX, centerY, radius * 1.4);
      bgGlow.addColorStop(0, 'rgba(37, 99, 235, 0.18)');
      bgGlow.addColorStop(0.5, 'rgba(217, 119, 6, 0.08)');
      bgGlow.addColorStop(1, 'rgba(10, 13, 20, 0)');
      ctx.fillStyle = bgGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Draw outer ambient ring
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.1, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(245, 158, 11, 0.2)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.95, 0, Math.PI * 2);
      ctx.stroke();

      // Rotate points
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      points.forEach((p) => {
        // Rotate around Y
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // Rotate around X
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        p.x = x1;
        p.y = y1;
        p.z = z2;
      });

      // Sort points by Z for depth rendering
      const sortedPoints = [...points].sort((a, b) => a.z - b.z);

      // Draw connections
      for (let i = 0; i < sortedPoints.length; i++) {
        for (let j = i + 1; j < sortedPoints.length; j++) {
          const p1 = sortedPoints[i];
          const p2 = sortedPoints[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < radius * 0.52) {
            const alpha = (1 - dist / (radius * 0.52)) * ((p1.z + radius) / (radius * 2)) * 0.35;
            ctx.beginPath();
            ctx.moveTo(centerX + p1.x, centerY + p1.y);
            ctx.lineTo(centerX + p2.x, centerY + p2.y);

            if (p1.isGold && p2.isGold) {
              ctx.strokeStyle = `rgba(245, 158, 11, ${alpha.toFixed(2)})`;
            } else {
              ctx.strokeStyle = `rgba(59, 130, 246, ${alpha.toFixed(2)})`;
            }

            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      sortedPoints.forEach((p) => {
        const scale = (p.z + radius * 1.5) / (radius * 2.5);
        const screenX = centerX + p.x;
        const screenY = centerY + p.y;
        const alpha = Math.max(0.2, (p.z + radius) / (radius * 2));

        ctx.beginPath();
        ctx.arc(screenX, screenY, Math.max(1, p.size * scale), 0, Math.PI * 2);

        if (p.isGold) {
          ctx.fillStyle = `rgba(251, 191, 36, ${alpha})`;
          ctx.shadowColor = 'rgba(245, 158, 11, 0.8)';
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = `rgba(96, 165, 250, ${alpha})`;
          ctx.shadowColor = 'rgba(59, 130, 246, 0.8)';
          ctx.shadowBlur = 8;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
