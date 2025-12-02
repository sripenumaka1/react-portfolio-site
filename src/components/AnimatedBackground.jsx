import React, { useMemo } from 'react';
import styles from './AnimatedBackground.module.css';

const PARTICLE_COUNT = 28;

function generateParticles(count) {
  const randomBetween = (min, max) => Math.random() * (max - min) + min;
  return Array.from({ length: count }).map(() => ({
    size: randomBetween(8, 22),
    left: `${randomBetween(2, 98)}%`,
    top: `${randomBetween(5, 95)}%`,
    duration: `${randomBetween(3, 6)}s`, // Even faster: 3-6 seconds
    delay: `${randomBetween(0, 3)}s`, // Shorter delays: 0-3 seconds
    opacity: randomBetween(0.1, 0.2),
    x: `${randomBetween(-120, 120)}px`, // Increased movement range
    y: `${randomBetween(-150, 80)}px`, // Increased movement range
  }));
}

const AnimatedBackground = () => {
  const particles = useMemo(() => generateParticles(PARTICLE_COUNT), []);
  return (
    <div className={styles.bgRoot} aria-hidden>
      <div className={styles.gradientLayer} />
      <div className={styles.particles}>
        {particles.map((p, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: p.left,
              top: p.top,
              '--p-size': `${p.size}px`,
              '--p-duration': p.duration,
              '--p-delay': p.delay,
              '--p-opacity': p.opacity,
              '--p-x': p.x,
              '--p-y': p.y,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;


