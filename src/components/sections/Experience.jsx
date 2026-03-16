import { Building2, GraduationCap } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Timeline from "../ui/Timeline";
import { expData, eduData } from "../../data/experience";

const Experience = () => (
  <section id="experience" className="py-28 px-[5%] bg-bg-2">
    <SectionHeader tag="My Journey" title="Experience & Education" center />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-275 mx-auto">
      {/* Work */}
      <div className="reveal-l">
        <div className="font-syne font-bold text-white text-[1.1rem] mb-7 pb-4 border-b border-white/[.07] flex items-center gap-2">
          <Building2 size={17} className="text-cyan" />
          Work Experience
        </div>
        <Timeline items={expData} />
      </div>

      {/* Education */}
      <div className="reveal-r">
        <div className="font-syne font-bold text-white text-[1.1rem] mb-7 pb-4 border-b border-white/[.07] flex items-center gap-2">
          <GraduationCap size={17} className="text-cyan" />
          Education
        </div>
        <Timeline items={eduData} />
      </div>
    </div>
  </section>
);

export default Experience;