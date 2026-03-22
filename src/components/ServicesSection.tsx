import { motion } from "framer-motion";
import MotionWrapper from "./animations/MotionWrapper";

// ── Data ───────────────────────────────────────────────────────────────────
const TRUST_BRANDS = ["CleanPro UK", "DentaCare", "Apex Realty", "SwiftPlumb", "LawHouse Legal"];

const SERVICES = [
  {
    icon: "edit_square",
    title: "Google Business Profile Optimization",
    description:
      "Deep-dive technical audit and full reconstruction of your GMB listing. Every category, attribute, and description field is aligned with high-intent search patterns to maximize your map-pack conversion surface.",
    chips: ["Map Pack Dominance", "Keyword Mapping"],
    colSpan: 8,
    dark: false,
    borderAccent: "#006a6a",
  },
  {
    icon: "troubleshoot",
    title: "Reputation & Review Engineering",
    description:
      "Data-driven review acquisition and response frameworks that build social proof and inject keyword density into user feedback — directly improving trust signals.",
    stat: { value: "92%", label: "Avg. Trust Lift" },
    colSpan: 4,
    dark: true,
    borderAccent: null,
  },
  {
    icon: "location_on",
    title: "Local Citation Building",
    description:
      "Synchronizing your NAP data across high-authority directories to cement your local trust signals and prevent ranking dilution.",
    colSpan: 4,
    dark: false,
    borderAccent: null,
    bg: "#e6e8ea",
  },
  {
    icon: "analytics",
    title: "Geo-Grid Rank Monitoring",
    description:
      "Real-time rank tracking across geo-coordinates with heatmaps that reveal exactly where you're winning — and where competitors are stealing your calls.",
    info: "GMB+ Multi-location",
    colSpan: 8,
    dark: false,
    borderAccent: "#000f22",
  },
] as const;

// ── ServicesSection ────────────────────────────────────────────────────────
const ServicesSection = () => (
  <>
    {/* Trust bar */}
    <section style={{ background: "#f2f4f6" }} className="py-12">
      <div className="container-narrow">
        <p
          className="text-center text-[10px] font-bold uppercase tracking-widest mb-10"
          style={{ color: "#43474d" }}
        >
          Trusted by Category Leaders Across India, UAE, UK &amp; USA
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {TRUST_BRANDS.map((brand) => (
            <span
              key={brand}
              className="text-lg font-bold cursor-default transition-colors duration-300"
              style={{ color: "#000f22", fontFamily: "Manrope, sans-serif" }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Bento grid */}
    <section id="services" style={{ background: "#f7f9fb" }} className="section-padding">
      <div className="container-narrow">
        {/* Header */}
        <MotionWrapper className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span
                className="font-bold uppercase tracking-widest text-[10px] mb-4 block"
                style={{ color: "#006a6a" }}
              >
                Our Services
              </span>
              <h2
                className="text-4xl font-extrabold mb-5"
                style={{ color: "#000f22", fontFamily: "Manrope, sans-serif" }}
              >
                Full-Stack Local SEO &amp; GMB Optimization
              </h2>
              <p className="text-lg" style={{ color: "#43474d" }}>
                84% of GMB interactions are discovery searches — we make sure your business is the
                one they find first, whether you have 1 location or 100.
              </p>
            </div>
          </div>
        </MotionWrapper>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Row 1 */}
          <ServiceCard
            delay={0}
            colSpan="md:col-span-8"
            style={{
              background: "#ffffff",
              borderLeft: "4px solid #006a6a",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}
          >
            <span className="material-symbols-outlined text-4xl mb-6 block" style={{ color: "#006a6a" }}>
              edit_square
            </span>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#000f22", fontFamily: "Manrope, sans-serif" }}>
              Google Business Profile Optimization
            </h3>
            <p className="leading-relaxed max-w-md mb-8" style={{ color: "#43474d" }}>
              Deep-dive technical audit and full reconstruction of your GMB listing. Every category,
              attribute, and description field is aligned with high-intent search patterns to
              maximize your map-pack conversion surface.
            </p>
            <div className="flex flex-wrap gap-3">
              {["MAP PACK DOMINANCE", "KEYWORD MAPPING"].map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-2 rounded-lg text-[0.68rem] font-bold uppercase"
                  style={{ background: "#f2f4f6", color: "#000f22" }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </ServiceCard>

          <ServiceCard
            delay={0.1}
            colSpan="md:col-span-4"
            style={{ background: "#0a2540" }}
            className="flex flex-col justify-between text-white"
          >
            <div>
              <span className="material-symbols-outlined text-4xl mb-6 block" style={{ color: "#93f2f2" }}>
                troubleshoot
              </span>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
                Reputation &amp; Review Engineering
              </h3>
              <p className="leading-relaxed" style={{ color: "#768dad" }}>
                Data-driven review acquisition frameworks that build social proof and inject keyword
                density into user feedback.
              </p>
            </div>
            <div className="pt-8 flex items-center gap-2">
              <span className="font-bold text-3xl" style={{ color: "#93f2f2", fontFamily: "Manrope, sans-serif" }}>
                4.9★
              </span>
              <span className="text-[0.68rem] font-bold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>
                Avg. Google Rating
              </span>
            </div>
          </ServiceCard>

          {/* Row 2 */}
          <ServiceCard
            delay={0.15}
            colSpan="md:col-span-4"
            style={{ background: "#e6e8ea" }}
          >
            <span className="material-symbols-outlined text-4xl mb-6 block" style={{ color: "#006a6a" }}>
              location_on
            </span>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#000f22", fontFamily: "Manrope, sans-serif" }}>
              Local Citation Building
            </h3>
            <p className="leading-relaxed" style={{ color: "#43474d" }}>
              NAP synchronization across 50+ high-authority directories — no inconsistencies, no
              ranking dilution.
            </p>
          </ServiceCard>

          <ServiceCard
            delay={0.2}
            colSpan="md:col-span-8"
            style={{
              background: "#ffffff",
              borderLeft: "4px solid #000f22",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <span className="material-symbols-outlined text-4xl mb-6 block" style={{ color: "#000f22" }}>
                  analytics
                </span>
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#000f22", fontFamily: "Manrope, sans-serif" }}>
                  Geo-Grid Rank Monitoring
                </h3>
                <p className="leading-relaxed" style={{ color: "#43474d" }}>
                  Real-time heatmap tracking across geo-coordinates reveals exactly where you win
                  the map pack — and where competitors are stealing your calls.
                </p>
              </div>
              <div
                className="flex-shrink-0 w-full md:w-1/3 h-28 rounded-xl flex items-center justify-center"
                style={{ background: "#f2f4f6", border: "1px solid rgba(196,198,206,0.2)" }}
              >
                <span className="font-extrabold text-4xl" style={{ color: "rgba(0,15,34,0.08)" }}>
                  GMB+
                </span>
              </div>
            </div>
          </ServiceCard>
        </div>
      </div>
    </section>
  </>
);

// ── Shared card wrapper ────────────────────────────────────────────────────
function ServiceCard({
  children,
  delay = 0,
  colSpan = "",
  style = {},
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  colSpan?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`${colSpan} p-10 rounded-2xl hover:shadow-md transition-shadow duration-300 ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default ServicesSection;
