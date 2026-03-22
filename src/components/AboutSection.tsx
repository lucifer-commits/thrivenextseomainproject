import { motion } from "framer-motion";
import MotionWrapper from "./animations/MotionWrapper";

// ── Stats data ─────────────────────────────────────────────────────────────
const STATS = [
  { label: "Success Rate", value: "94%" },
  { label: "Avg. Visibility Lift", value: "+128%" },
  { label: "Businesses Served", value: "230+" },
  { label: "Countries", value: "6" },
];

// ── AboutSection (Stats strip under hero) ─────────────────────────────────
const AboutSection = () => (
  <section id="about" style={{ background: "#f7f9fb" }} className="pb-16 pt-14">
    <div className="container-narrow">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map(({ label, value }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="pl-6"
            style={{ borderLeft: "1px solid rgba(196,198,206,0.4)" }}
          >
            <span
              className="text-[10px] font-bold uppercase tracking-widest block mb-1"
              style={{ color: "#43474d", fontFamily: "Inter, sans-serif" }}
            >
              {label}
            </span>
            <div
              className="text-3xl font-extrabold"
              style={{ color: "#006a6a", fontFamily: "Manrope, sans-serif" }}
            >
              {value}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
