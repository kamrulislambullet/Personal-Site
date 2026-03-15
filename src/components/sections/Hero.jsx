import { ArrowRight, Mail, Code2, TrendingUp } from "lucide-react";
import Btn from "../ui/Btn";
import kamrul from "../../assets/kamrul.jpg"

const Hero = () => (
  <section
    id="hero"
    className="md:min-h-screen flex items-center px-[5%] pt-28 pb-20 relative overflow-hidden bg-bg"
  >
    {/* Background glows */}
    <div
      className="absolute -top-50 -right-20 w-162.5 h-162.5 rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle,rgba(0,229,255,.09) 0%,transparent 65%)" }}
    />
    <div
      className="absolute -bottom-25 -left-20 w-125 h-125 rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle,rgba(124,58,237,.11) 0%,transparent 65%)" }}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-290 mx-auto w-full relative z-10">

      {/* ── Left ── */}
      <div className="animate-slidein">
        {/* Available tag */}
        <div className="flex items-center gap-2 text-cyan text-xs font-bold tracking-[.18em] uppercase mb-6 font-syne">
          <span className="w-6 h-px bg-cyan inline-block" />
          Available for Freelance
        </div>

        {/* Heading */}
        <h1
          className="font-syne font-extrabold text-white leading-none tracking-tight mb-5"
          style={{ fontSize: "clamp(2.8rem,5.5vw,5rem)" }}
        >
          Hello, I'm
          <br />
          <span className="bg-grad-1 bg-clip-text text-transparent">KAMRUL</span>
        </h1>

        {/* Sub */}
        <p className="text-muted font-light text-lg leading-relaxed mb-8 max-w-115">
          A{" "}
          <strong className="text-orange font-medium">Full-Stack Web Developer</strong> &amp;
          UI/UX Enthusiast based in Dhaka, Bangladesh. I build fast, beautiful, accessible
          digital experiences.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap">
          <Btn
            primary
            icon={ArrowRight}
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Btn>
          <Btn
            icon={Mail}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let's Talk
          </Btn>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-10 pt-8 border-t border-white/[.07] flex-wrap">
          {[["3+", "Years Exp."], ["50+", "Projects"], ["40+", "Clients"]].map(([n, l]) => (
            <div key={l}>
              <div className="font-syne text-[2rem] font-extrabold text-white leading-none">
                <span className="text-cyan">{n}</span>
              </div>
              <div className="text-muted text-xs mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right ── */}
      <div className="hidden md:flex justify-center animate-float">
        <div className="relative w-[320px] h-100">
          {/* Photo card */}
          <div
            className="w-full h-full rounded-md border border-white/[.07] flex flex-col items-center justify-center relative overflow-hidden animate-glow"
            style={{ background: "linear-gradient(145deg,rgba(0,229,255,.06),rgba(124,58,237,.11))" }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.75 bg-grad-1" />
            <div className="w-28 h-28 rounded-full bg-white/5 border border-white/[.07] flex items-center justify-center mb-4">
              <Code2 size={52} className="text-cyan/50" />
            </div>
            <img src={kamrul} alt="Kamrul Hasan" />
          </div>

          {/* Badge — top right */}
          <div className="absolute -top-4 -right-7 bg-bg-2 border border-white/8 rounded-xl px-4 py-3 flex items-center gap-3 backdrop-blur-xl">
            <div>
              <div className="text-muted text-[.68rem]">Status</div>
              <div className="font-syne text-white font-bold text-sm">Open to Work</div>
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse2 inline-block" />
          </div>

          {/* Badge — bottom left */}
          <div className="absolute bottom-5 -left-10 bg-bg-2 border border-white/8 rounded-xl px-4 py-3 flex items-center gap-3 backdrop-blur-xl">
            <div>
              <div className="text-muted text-[.68rem]">Projects</div>
              <div className="font-syne text-white font-extrabold text-xl">50+</div>
            </div>
            <TrendingUp size={20} className="text-cyan" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;