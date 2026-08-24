// Small celebratory sparkle burst, reused anywhere a Logic Room needs to
// mark a correct answer without a full "success screen" — positioned via
// the parent's `position: relative`.
export default function Particles({ count = 6, radius = 22, emoji = '✨' }) {
  const particles = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    return {
      key: i,
      tx: `${Math.round(Math.cos(angle) * radius)}px`,
      ty: `${Math.round(Math.sin(angle) * radius)}px`,
      delay: `${i * 15}ms`,
    };
  });

  return (
    <span className="lr-particles">
      {particles.map((p) => (
        <span key={p.key} className="lr-particle" style={{ '--tx': p.tx, '--ty': p.ty, animationDelay: p.delay }}>
          {emoji}
        </span>
      ))}
    </span>
  );
}
