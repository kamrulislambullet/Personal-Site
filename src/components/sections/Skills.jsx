import { useEffect, useRef } from "react";
import SectionHeader from "../ui/SectionHeader";
import skillsData from "../../data/skills";

const SkillCard = ({ name, pct, Icon, color }) => {
  const fillRef = useRef(null);
  const col     = color === "cyan" ? "#00e5ff" : "#ff6b35";
  const bg      = color === "cyan"
    ? "linear-gradient(90deg,#00e5ff,#7c3aed)"
    : "linear-gradient(90deg,#ff6b35,#ff1f6e)";

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && fillRef.current) {
          fillRef.current.style.width = pct + "%";
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    const target = fillRef.current?.closest("section") ?? fillRef.current?.parentElement;
    if (target) obs.observe(target);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div
      className="p-5 bg-white/3 border border-white/[.07] rounded-[5px] transition-all duration-300 hover:border-cyan/30 hover:-translate-y-1 cursor-default"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Icon size={15} style={{ color: col }} />
          <span className="font-syne font-semibold text-[.87rem] text-[#e8edf5]">{name}</span>
        </div>
        <span className="font-syne font-bold text-[.8rem]" style={{ color: col }}>{pct}%</span>
      </div>

      <div className="skill-track">
        <div ref={fillRef} className="skill-fill" style={{ background: bg }} />
      </div>
    </div>
  );
};

const Skills = () => (
  <section id="skills" className="py-14 md:py-28 px-[5%] bg-bg">
    <SectionHeader
      tag="My Expertise"
      title="Technical Skills"
      desc="Technologies I work with regularly and have built production-grade projects with."
      center
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-275 mx-auto">
      {skillsData.map((skill, i) => (
        <div key={skill.name} className="reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
          <SkillCard {...skill} />
        </div>
      ))}
    </div>
  </section>
);

export default Skills;