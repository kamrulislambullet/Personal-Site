import { useRef, useState, useEffect } from "react";
import { BarChart2, Users, Award, Coffee } from "lucide-react";
import useCounter from "../../hooks/useCounter";

const COUNTERS = [
  { target: 50,  label: "Projects Completed", Icon: BarChart2 },
  { target: 40,  label: "Happy Clients",       Icon: Users     },
  { target: 3,   label: "Years Experience",    Icon: Award     },
  { target: 500, label: "Coffee Cups",         Icon: Coffee    },
];

const CounterItem = ({ target, label, Icon, triggered, delay }) => {
  const value = useCounter(target, triggered);
  return (
    <div className="reveal text-center" style={{ transitionDelay: `${delay}s` }}>
      <Icon size={26} className="text-cyan mx-auto mb-3 opacity-70" />
      <span className="font-syne font-extrabold text-white leading-none block"
            style={{ fontSize: "3rem" }}>
        {value}<span className="text-cyan">+</span>
      </span>
      <div className="text-white/55 text-xs mt-2 uppercase tracking-widest font-syne">{label}</div>
    </div>
  );
};

const Counters = () => {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTriggered(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative py-28 px-[5%] overflow-hidden"
      style={{ background: "linear-gradient(135deg,#00e5ff,#7c3aed)" }}
    >
      <div className="absolute inset-0 bg-bg/70" />
      <div className="relative z-10 flex justify-around flex-wrap gap-8 max-w-250 mx-auto">
        {COUNTERS.map(({ target, label, Icon }, i) => (
          <CounterItem
            key={label}
            target={target}
            label={label}
            Icon={Icon}
            triggered={triggered}
            delay={i * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default Counters;