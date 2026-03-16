import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
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
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Btn from "../ui/Btn";

// ── EmailJS Keys ──────────────────────────────────────────
const EJS_SERVICE_ID = "service_8c40qis";
const EJS_TEMPLATE_ID = "template_wpczh5k";
const EJS_PUBLIC_KEY = "Y0qEzoeIqq_rAdVjX";
// ─────────────────────────────────────────────────────────

const CONTACT_INFO = [
  { Icon: Mail, label: "Email", value: "kamrulislambullet@gmail.com" },
  { Icon: Phone, label: "Phone", value: "+8801774377254" },
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

const INIT_FORM = {
  from_name: "",
  from_email: "",
  phone: "",
  budget: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(INIT_FORM);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSend = () => {
    // ── Validation ──
    if (
      !form.from_name.trim() ||
      !form.from_email.trim() ||
      !form.message.trim()
    ) {
      toast.error("Name, Email and Message are required.", {
        style: {
          background: "#0f172a",
          color: "#e8edf5",
          border: "1px solid rgba(255,80,80,.35)",
          fontFamily: "DM Sans, sans-serif",
          fontSize: "0.88rem",
        },
        iconTheme: { primary: "#ff5050", secondary: "#0f172a" },
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(EJS_SERVICE_ID, EJS_TEMPLATE_ID, form, EJS_PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm(INIT_FORM);
        toast.success("Message sent! I'll reply within 24 hours.", {
          duration: 5000,
          style: {
            background: "#0d1f1a",
            color: "#4ade80",
            border: "1px solid rgba(74,222,128,.25)",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.88rem",
          },
          iconTheme: { primary: "#4ade80", secondary: "#0d1f1a" },
        });
      })
      .catch(() => {
        setLoading(false);
        toast.error("Something went wrong. Please try again.", {
          style: {
            background: "#0f172a",
            color: "#e8edf5",
            border: "1px solid rgba(255,80,80,.35)",
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.88rem",
          },
          iconTheme: { primary: "#ff5050", secondary: "#0f172a" },
        });
      });
  };

  return (
    <section id="contact" className="py-28 px-[5%] bg-bg">
      {/* Toast container */}
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />

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
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                placeholder="John Doe"
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-muted text-[.72rem] uppercase tracking-widest mb-1.5 font-dm">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
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
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+880 1XXX-XXXXXX"
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-muted text-[.72rem] uppercase tracking-widest mb-1.5 font-dm">
                Budget
              </label>
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className={`${inputCls} appearance-none cursor-pointer`}
              >
                <option value="" className="text-black">
                  Select budget
                </option>
                <option value="$50 - $100" className="text-black">
                  $50 - $100
                </option>
                <option value="$100 - $500" className="text-black">
                  $100 - $500
                </option>
                <option value="$500 - $1,000" className="text-black">
                  $500 - $1,000
                </option>
                <option value="$1,000 - $3,000" className="text-black">
                  $1,000 - $3,000
                </option>
                <option value="$3,000 - $10,000" className="text-black">
                  $3,000 - $10,000
                </option>
                <option value="$10,000+" className="text-black">
                  $10,000+
                </option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-muted text-[.72rem] uppercase tracking-widest mb-1.5 font-dm">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project inquiry, collaboration..."
              className={inputCls}
            />
          </div>

          <div className="mb-5">
            <label className="block text-muted text-[.72rem] uppercase tracking-widest mb-1.5 font-dm">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project, timeline, and goals..."
              className={`${inputCls} min-h-32.5 resize-y`}
            />
          </div>

          <Btn
            primary
            onClick={handleSend}
            full
            icon={Send}
            disabled={loading || sent}
          >
            {loading ? "Sending..." : sent ? "Message Sent ✓" : "Send Message"}
          </Btn>

          {/* Send another message */}
          {sent && (
            <button
              onClick={() => setSent(false)}
              className="mt-3 w-full text-center text-muted text-[.78rem] font-dm hover:text-cyan transition-colors duration-300 underline underline-offset-2"
            >
              Send another message
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
