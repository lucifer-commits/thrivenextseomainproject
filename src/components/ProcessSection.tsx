import { motion } from "framer-motion";
import MotionWrapper from "./animations/MotionWrapper";

// ── Data ───────────────────────────────────────────────────────────────────
const STEPS = [
  {
    number: "01",
    title: "Free SEO Audit",
    description:
      "We analyse your GMB profile, website technical health, local citations, and competitor landscape — completely free.",
  },
  {
    number: "02",
    title: "Custom SEO Strategy",
    description:
      "A tailored local SEO roadmap covering on-page, off-page, and GMB optimization based on your specific goals.",
  },
  {
    number: "03",
    title: "Execute & Build Authority",
    description:
      "Hands-on implementation: profile optimization, citation building, review strategy, and content deployment.",
  },
  {
    number: "04",
    title: "Report & Scale",
    description:
      "Monthly transparent reporting with rankings, traffic, and call data — then we scale what's working.",
  },
] as const;

// ── ProcessSection ─────────────────────────────────────────────────────────
const ProcessSection = () => (
  <section id="process" className="section-padding" style={{ background: "#f2f4f6" }}>
    <div className="container-narrow">
      <MotionWrapper className="text-center mb-20">
        <span
          className="text-[10px] font-bold uppercase tracking-widest mb-3 block"
          style={{ color: "#006a6a" }}
        >
          How We Work
        </span>
        <h2
          className="text-4xl font-extrabold mb-4"
          style={{ color: "#000f22", fontFamily: "Manrope, sans-serif" }}
        >
          A Simple, Proven Process
        </h2>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "#43474d" }}>
          From audit to ranking — here's exactly how ThriveNext delivers results.
        </p>
      </MotionWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {STEPS.map(({ number, title, description }, index) => (
          <ProcessCard key={number} number={number} title={title} description={description} delay={index * 0.1} />
        ))}
      </div>
    </div>
  </section>
);

// ── Sub-component: ProcessCard (hover effect via inline state) ─────────────
function ProcessCard({
  number,
  title,
  description,
  delay,
}: {
  number: string;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group p-8 h-full rounded-2xl cursor-default transition-colors duration-300 bg-white hover:bg-teal-600"
      style={{ willChange: "transform" }}
    >
      <span
        className="text-6xl font-extrabold block mb-5 leading-none transition-colors duration-300 text-teal-600/20 group-hover:text-white/25"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        {number}
      </span>
      <h4
        className="text-xl font-bold mb-3 transition-colors duration-300 text-slate-900 group-hover:text-white"
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        {title}
      </h4>
      <p className="text-sm leading-relaxed transition-colors duration-300 text-slate-500 group-hover:text-white/85">
        {description}
      </p>
    </motion.div>
  );
}

export default ProcessSection;
