import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    const numericTarget = parseInt(target, 10);

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericTarget));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Hero() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section
      id="domov"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.1),_transparent_60%)]" />

      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Profesionálne elektroinštalácie
          </span>
          <br />
          <span className="text-white">pre váš domov aj firmu</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 opacity-80">
          Spoľahlivé elektrikárske služby s viac ako 15-ročnými skúsenosťami.
          Od kompletných rozvodov až po opravy a revízie — vždy kvalitne a načas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#kontakt"
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Požiadať o cenovú ponuku
          </a>
          <a
            href="#sluzby"
            className="w-full sm:w-auto border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Naše služby
          </a>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">
              <AnimatedCounter target="500" suffix="+" />
            </div>
            <div className="text-sm text-gray-400 mt-1">dokončených projektov</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">
              <AnimatedCounter target="15" />
            </div>
            <div className="text-sm text-gray-400 mt-1">rokov skúseností</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">
              <AnimatedCounter target="4" suffix=".9★" />
            </div>
            <div className="text-sm text-gray-400 mt-1">hodnotenie zákazníkov</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">
              24h
            </div>
            <div className="text-sm text-gray-400 mt-1">pohotovostný servis</div>
          </div>
        </div>
      </div>
    </section>
  );
}
