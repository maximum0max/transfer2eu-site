import React from 'react'
// Reveal — fade-up-on-scroll wrapper. An IntersectionObserver flips `.is-in`
// the first time the element enters the viewport, then stops observing (the
// reveal is one-way). `delay` staggers siblings. Motion + the reduced-motion
// guard live in colors_and_type.css under the MOTION section.

function Reveal({ children, delay = 0, as: Tag = 'div', style, className = '', ...rest }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  const [done, setDone]   = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // SSR / very old browsers — just show it (and skip the GPU layer).
    if (typeof IntersectionObserver === 'undefined') { setShown(true); setDone(true); return; }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { setShown(true); io.unobserve(e.target); }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // After the fade finishes, drop will-change so the browser can release
  // the dedicated compositor layer.
  React.useEffect(() => {
    if (!shown) return;
    const t = setTimeout(() => setDone(true), 800 + delay);
    return () => clearTimeout(t);
  }, [shown, delay]);

  return (
    <Tag
      ref={ref}
      className={`t2-reveal ${shown ? 'is-in' : ''} ${done ? 'is-done' : ''} ${className}`.trim()}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
