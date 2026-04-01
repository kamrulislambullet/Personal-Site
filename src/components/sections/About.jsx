import { Monitor, Download } from "lucide-react";
import LineAccent from "../ui/LineAccent";
import Tag from "../ui/Tag";
import Btn from "../ui/Btn";
import kamrul2 from "../../assets/profile.png";
import resumePDF from "../../assets/Kamrul_Hasan_Resume.pdf";

const INFO_ITEMS = [
  { label: "Name", value: "Kamrul Hasan", color: null },
  { label: "Email", value: "kamrulhasanbullet96@gmail.com", color: null },
  { label: "Location", value: "Dhaka, Bangladesh", color: null },
  {
    label: "Available",
    value: "✓ Freelance & Full-time",
    color: "text-green-500",
  },
];

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = resumePDF;
  link.download = "Kamrul_Hasan_Resume.pdf"; 
  link.click();
};

const About = () => (
  <section id="about" className="py-28 px-[5%] bg-bg-2">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
      {/* ── Image ── */}
      <div className="reveal-l relative">
        <div
          className="w-full rounded-md border border-white/[.07] flex items-center justify-center"
          style={{
            aspectRatio: "4/5",
            background:
              "linear-gradient(145deg,rgba(0,229,255,.05),rgba(124,58,237,.1))",
          }}
        >
          <Monitor size={80} className="text-cyan/20" />
          <img src={kamrul2} alt="Kamrul Hasan" />
        </div>

        {/* Experience badge */}
        <div className="absolute -bottom-5 -right-5 w-22 h-22 rounded-full flex flex-col items-center justify-center bg-grad-2">
          <span className="font-syne font-extrabold text-white text-2xl leading-none">
            3
          </span>
          <span className="font-syne font-bold text-white/80 text-[.55rem] uppercase tracking-wider text-center leading-tight">
            Years
            <br />
            Exp.
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="reveal-r">
        <Tag>Who I Am</Tag>
        <h2
          className="font-syne font-bold text-white tracking-tight leading-tight"
          style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}
        >
          Passionate Developer
          <br />
          Who Loves to Code
        </h2>
        <LineAccent />

        <p className="text-muted leading-relaxed text-[.95rem] mb-4">
          I'm a Full-Stack Web Developer with a passion for crafting clean,
          performant, and visually compelling web applications. 3+ years of
          experience in React, Node.js, and modern frontend development.
        </p>
        <p className="text-muted leading-relaxed text-[.95rem] mb-7">
          Great code isn't just functional — it's readable, scalable, and
          elegantly designed. When I'm not coding, I'm exploring design systems
          and writing about web development.
        </p>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-7">
          {INFO_ITEMS.map(({ label, value, color }) => (
            <div
              key={label}
              className="p-4 bg-white/3 border border-white/[.07] rounded-sm"
            >
              <div className="text-muted text-[14px] uppercase tracking-widest mb-1 font-dm">
                {label}
              </div>
              <div
                className={`text-base font-medium font-dm ${color || "text-[#e8edf5]"}`}
              >
                {value}
              </div>
            </div>
          ))}
        </div>

        <Btn primary icon={Download} onClick={handleDownload} >
          Download CV
        </Btn>
      </div>
    </div>
  </section>
);

export default About;
