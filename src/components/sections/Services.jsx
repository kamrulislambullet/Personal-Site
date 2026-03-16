import SectionHeader from "../ui/SectionHeader";
import servicesData from "../../data/services";

const colorMap = {
  cyan:   { iconBg: "bg-cyan/10",    iconText: "text-cyan",   priceText: "text-cyan"   },
  orange: { iconBg: "bg-orange/10",  iconText: "text-orange", priceText: "text-orange" },
  purple: { iconBg: "bg-purple/15",  iconText: "text-purple", priceText: "text-purple" },
};

const ServiceCard = ({ Icon, title, desc, price, color }) => {
  const { iconBg, iconText, priceText } = colorMap[color];

  return (
    <div className="reveal card-topbar p-8 bg-white/3 border border-white/[.07] rounded-md transition-all duration-300 hover:border-cyan/20 hover:-translate-y-1 cursor-default">
      <div className={`w-12 h-12 rounded-[10px] flex items-center justify-center mb-6 ${iconBg}`}>
        <Icon size={22} className={iconText} />
      </div>
      <h3 className="font-syne font-bold text-white text-[1.02rem] mb-3">{title}</h3>
      <p className="text-muted text-[.88rem] leading-relaxed">{desc}</p>
      <div className={`mt-5 font-syne font-bold text-[.78rem] tracking-wider ${priceText}`}>{price}</div>
    </div>
  );
};

const Services = () => (
  <section id="services" className="py-28 px-[5%] bg-bg-2">
    <SectionHeader
      tag="What I Offer"
      title="My Services"
      desc="End-to-end digital solutions from design to deployment."
      center
    />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-275 mx-auto">
      {servicesData.map((service, i) => (
        <div key={service.title} style={{ transitionDelay: `${i * 0.08}s` }}>
          <ServiceCard {...service} />
        </div>
      ))}
    </div>
  </section>
);

export default Services;