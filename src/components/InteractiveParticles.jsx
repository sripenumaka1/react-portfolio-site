import React, { useEffect, useRef } from 'react';
import styles from './InteractiveParticles.module.css';

const PARTICLE_COUNT = 24;
const PARTICLE_SPEED = 0.08;
const ATTRACTION_DISTANCE = 160;
const ATTRACTION_FORCE = 0.12;

class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 3 + 1;
    this.origSize = this.size;
    this.targetSize = this.size;
  }

  update(mouseX, mouseY) {
    // Move particles
    this.x += this.vx;
    this.y += this.vy;

    // Wrap around screen
    if (this.x < 0) this.x = this.canvas.width;
    if (this.x > this.canvas.width) this.x = 0;
    if (this.y < 0) this.y = this.canvas.height;
    if (this.y > this.canvas.height) this.y = 0;

    // Mouse attraction
    if (mouseX !== null && mouseY !== null) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < ATTRACTION_DISTANCE) {
        const force = (ATTRACTION_DISTANCE - dist) / ATTRACTION_DISTANCE;
        this.vx += dx / dist * force * ATTRACTION_FORCE;
        this.vy += dy / dist * force * ATTRACTION_FORCE;
        this.targetSize = this.origSize * (1 + force);
      } else {
        this.targetSize = this.origSize;
      }
    }

    // Apply friction and max speed
    this.vx *= 0.98;
    this.vy *= 0.98;
    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (speed > PARTICLE_SPEED) {
      this.vx = (this.vx / speed) * PARTICLE_SPEED;
      this.vy = (this.vy / speed) * PARTICLE_SPEED;
    }

    // Smooth size transitions
    this.size += (this.targetSize - this.size) * 0.1;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(35, 39, 42, 0.14)';
    ctx.fill();
  }
}

const InteractiveParticles = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = particlesRef.current;
    let animationFrame = frameRef.current;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array(PARTICLE_COUNT).fill().map(() => new Particle(canvas));
      particlesRef.current = particles;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update(mouseRef.current.x, mouseRef.current.y);
        particle.draw(ctx);
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    // Setup
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.particleCanvas}
      aria-hidden="true"
    />
  );
};

export default InteractiveParticles;
