import { useState } from "react";
import { ExternalLink } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import projects from "../../data/projects";

const ProjectCard = ({ Icon, tag, title, desc, tech, grad }) => (
  <div className="reveal group relative bg-white/2 border border-white/5 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-cyan/40 hover:bg-white/4 flex flex-col sm:flex-row h-full">
    
    {/* Thumbnail Section - Left side on Desktop */}
    <div className="relative w-full sm:w-[40%] aspect-video sm:aspect-auto min-h-50 flex items-center justify-center overflow-hidden border-b sm:border-b-0 sm:border-r border-white/5">
      <div
        className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-700"
        style={{ background: grad }}
      />
      
      {/* Moving Gradient Glow */}
      <div className="absolute -inset-full bg-linear-to-tr from-transparent via-white/5 to-transparent rotate-45 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      <Icon size={48} strokeWidth={1} className="text-white/20 group-hover:text-cyan/60 group-hover:scale-110 transition-all duration-500 relative z-10" />

      {/* Modern Hover Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="p-3 bg-white rounded-full text-black">
             <ExternalLink size={20} />
          </div>
        </div>
      </div>
    </div>

    {/* Info Section - Right side */}
    <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-px bg-cyan/50"></span>
        <span className="text-cyan text-[0.65rem] uppercase tracking-[0.2em] font-bold">
          {tag}
        </span>
      </div>
      
      <h3 className="font-syne font-bold text-white text-xl mb-3 group-hover:text-cyan transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-2">
        {desc}
      </p>
      
      <div className="flex gap-2 flex-wrap mt-auto">
        {tech.map((t) => (
          <span
            key={t}
            className="text-[0.6rem] px-3 py-1 bg-white/3 border border-white/8 rounded-full text-muted/80 uppercase tracking-wider group-hover:border-cyan/20 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="py-14 md:py-28 px-[5%] bg-bg overflow-hidden">
      <div className="max-w-350 mx-auto">
        <SectionHeader
          tag="Selected Works"
          title="Featured Projects"
          desc="Blending aesthetic design with high-performance engineering."
          center
        />

        {/* Project Grid - 2 Columns on Medium+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full">
          {visible.map((project, i) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;