import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ── Constants ──────────────────────────────────────────────────────────────
const WHATSAPP_LINK =
  "https://wa.me/917808335684?text=Hi,%20I%20want%20a%20free%20SEO%20consultation";

// ── Animation variants ─────────────────────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// ── HeroSection ────────────────────────────────────────────────────────────
const HeroSection = () => (
  <section
    id="hero"
    className="relative pt-16 overflow-hidden"
    style={{ background: "linear-gradient(135deg,#000f22 0%,#0a2540 100%)" }}
  >
    <div className="container-narrow relative z-10 pt-20 pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── Left: Copy ─────────────────────────────────────── */}
        <motion.div initial="hidden" animate="visible" variants={container}>
          {/* Badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 mb-8">
            <div
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                className="material-symbols-outlined text-sm"
                style={{ color: "#93f2f2", fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span
                className="text-white text-[0.7rem] font-semibold tracking-widest uppercase"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Google Certified SEO Specialists
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-7"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Rank Higher on Google Maps —&nbsp;
            <span style={{ color: "#93f2f2" }}>More Calls,&nbsp;More Revenue</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl max-w-xl mb-10 font-medium leading-relaxed"
            style={{ color: "#768dad" }}
          >
            ThriveNext is India's leading GMB &amp; local SEO agency. We help service businesses
            dominate the Google Map Pack and grow organic revenue — no paid ads needed.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <a
              id="hero-primary-cta"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg text-white transition-all hover:opacity-90"
              style={{ background: "#006a6a" }}
            >
              Get Free SEO Audit
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/seo-packages"
              className="flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg text-white transition-all"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              View Packages
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Visibility Index card ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="relative z-10 p-8 rounded-2xl shadow-2xl"
            style={{
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(196,198,206,0.15)",
              borderLeft: "4px solid #006a6a",
            }}
          >
            {/* Card header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "#000f22", fontFamily: "Manrope, sans-serif" }}
                >
                  Visibility Index
                </h3>
                <p className="text-sm" style={{ color: "#43474d" }}>
                  Real-time GMB Performance
                </p>
              </div>
              <span
                className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
                style={{ background: "#90efef", color: "#006e6e" }}
              >
                Live Data
              </span>
            </div>

            {/* Animated bar chart */}
            <div className="h-32 flex items-end gap-2 mb-6">
              {[25, 40, 50, 75, 100].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-full rounded-t-lg"
                  style={{ background: `rgba(0,106,106,${0.2 + i * 0.18})` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                />
              ))}
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-3 gap-4 pt-4"
              style={{ borderTop: "1px solid rgba(196,198,206,0.25)" }}
            >
              {[
                { label: "CTR", value: "+142%" },
                { label: "Rank", value: "#1.2" },
                { label: "Calls", value: "3.4k" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p
                    className="text-[0.68rem] font-bold uppercase tracking-wider mb-1"
                    style={{ color: "#43474d" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-2xl font-extrabold"
                    style={{ color: "#006a6a", fontFamily: "Manrope, sans-serif" }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative blurs */}
          <div
            className="absolute -top-12 -right-12 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "rgba(0,106,106,0.18)", filter: "blur(60px)" }}
          />
          <div
            className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: "rgba(10,37,64,0.4)", filter: "blur(50px)" }}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
