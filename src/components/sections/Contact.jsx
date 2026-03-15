import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Youtube,
  Send,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Btn from "../ui/Btn";

const CONTACT_INFO = [
  { Icon: Mail, label: "Email", value: "yourname@email.com" },
  { Icon: Phone, label: "Phone", value: "+880 1XXX-XXXXXX" },
  { Icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
  { Icon: Clock, label: "Working Hours", value: "Sun-Thu: 9AM - 8PM BST" },
];

const SOCIALS = [
  { Icon: Github, label: "GitHub" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Dribbble, label: "Dribbble" },
  { Icon: Youtube, label: "YouTube" },
];

const inputCls =
  "w-full bg-white/[.03] border border-white/[.08] rounded-[3px] text-[#e8edf5] font-dm text-[.93rem] px-4 py-3 focus:border-cyan outline-none transition-colors duration-300";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1600);
  };

  return (
    <section id="contact" className="py-14 md:py-28 px-[5%] bg-bg">
      <SectionHeader
        tag="Get In Touch"
        title="Let's Work Together"
        desc="Have a project in mind? Let's discuss how we can bring it to life."
        center
      />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 max-w-275 mx-auto">
        {/* ── Left: Info ── */}
        <div className="reveal-l">
          {CONTACT_INFO.map(({ Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 mb-7">
              <div className="w-11 h-11 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-cyan" />
              </div>
              <div>
                <div className="text-muted text-[.7rem] uppercase tracking-widest font-dm mb-0.5">
                  {label}
                </div>
                <div className="text-[#e8edf5] text-[.92rem] font-dm">
                  {value}
                </div>
              </div>
            </div>
          ))}

          {/* Social icons */}
          <div className="flex gap-2.5 mt-2">
            {SOCIALS.map(({ Icon, label }) => (
              <button
                key={label}
                title={label}
                className="w-10 h-10 bg-white/3 border border-white/[.07] rounded-md flex items-center justify-center text-muted hover:border-cyan hover:text-cyan hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={16} />
              </button>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mt-7 h-48 bg-white/3 border border-white/[.07] rounded-[5px] relative overflow-hidden flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-[.07]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,rgba(0,229,255,.1) 0,rgba(0,229,255,.1) 1px,transparent 1px,transparent 40px)," +
                  "repeating-linear-gradient(90deg,rgba(0,229,255,.1) 0,rgba(0,229,255,.1) 1px,transparent 1px,transparent 40px)",
              }}
            />
            <div className="text-center relative z-10">
              <MapPin size={28} className="text-cyan mx-auto mb-2" />
              <span className="text-muted text-sm font-dm">
                Dhaka, Bangladesh
              </span>
            </div>
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div className="reveal-r">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-muted text-[.72rem] uppercase tracking-widest mb-1.5 font-dm">
                Your Name
              </label>
              <input type="text" placeholder="John Doe" className={inputCls} />
            </div>
            <div>
              <label className="block text-muted text-[.72rem] uppercase tracking-widest mb-1.5 font-dm">
                Email
              </label>
              <input
                type="email"
                placeholder="john@email.com"
                className={inputCls}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-muted text-[.72rem] uppercase tracking-widest mb-1.5 font-dm">
                Phone
              </label>
              <input
                type="tel"
                placeholder="+880 1XXX-XXXXXX"
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-muted text-[.72rem] uppercase tracking-widest mb-1.5 font-dm">
                Budget
              </label>
              <select className={`${inputCls} appearance-none`}>
                <option>Select budget</option>
                <option>$500 – $1,000</option>
                <option>$1,000 – $3,000</option>
                <option>$3,000 – $10,000</option>
                <option>$10,000+</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-muted text-[.72rem] uppercase tracking-widest mb-1.5 font-dm">
              Subject
            </label>
            <input
              type="text"
              placeholder="Project inquiry, collaboration..."
              className={inputCls}
            />
          </div>

          <div className="mb-5">
            <label className="block text-muted text-[.72rem] uppercase tracking-widest mb-1.5 font-dm">
              Message
            </label>
            <textarea
              placeholder="Tell me about your project, timeline, and goals..."
              className={`${inputCls} min-h-32.5 resize-y`}
            />
          </div>

          {!sent ? (
            <Btn primary onClick={handleSend} full icon={Send}>
              {loading ? "Sending..." : "Send Message"}
            </Btn>
          ) : (
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-sm text-green-400 text-[.88rem] text-center flex items-center justify-center gap-2 font-dm">
              <CheckCircle2 size={16} />
              Message sent! I'll reply within 24 hours.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
