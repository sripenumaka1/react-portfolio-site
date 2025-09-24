import React, { useMemo } from 'react';
import styles from './AnimatedBackground.module.css';

const PARTICLE_COUNT = 28;

function generateParticles(count) {
  const randomBetween = (min, max) => Math.random() * (max - min) + min;
  return Array.from({ length: count }).map(() => ({
    size: randomBetween(8, 22),
    left: `${randomBetween(2, 98)}%`,
    top: `${randomBetween(5, 95)}%`,
    duration: `${randomBetween(6, 12)}s`, // Faster: reduced from 12-26s to 6-12s
    delay: `${randomBetween(0, 5)}s`, // Faster: reduced from 0-10s to 0-5s
    opacity: randomBetween(0.08, 0.18),
    x: `${randomBetween(-80, 80)}px`,
    y: `${randomBetween(-120, 60)}px`,
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


