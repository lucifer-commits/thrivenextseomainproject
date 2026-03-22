import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import SeoHead from "@/components/SeoHead";

// ── Constants ──────────────────────────────────────────────────────────────
const WHATSAPP_LINK =
  "https://wa.me/917808335684?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20SEO%20packages";

// ── Packages data ──────────────────────────────────────────────────────────
const PACKAGES = [
  {
    name: "Starter",
    price: "$175",
    priceINR: "₹15,000",
    period: "/month",
    tagline: "Perfect for local businesses just getting started.",
    popular: false,
    features: [
      "Google Business Profile Audit",
      "Basic Profile Optimization",
      "NAP Synchronization (10 dirs)",
      "2 × GMB Posts / month",
      "Review Response Template",
      "Monthly Rankings Report",
    ],
  },
  {
    name: "Growth",
    price: "$350",
    priceINR: "₹29,500",
    period: "/month",
    tagline: "For businesses ready to dominate the local map pack.",
    popular: true,
    features: [
      "Full Profile Reconstruction",
      "Citation Building (50 dirs)",
      "Weekly GMB Posts & Q&A",
      "Review Acquisition Campaigns",
      "Geo-Grid Heatmap Tracking",
      "Competitor Gap Analysis",
      "Priority WhatsApp Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceINR: "Contact Us",
    period: "",
    tagline: "Multi-location scaling for franchises & agencies.",
    popular: false,
    features: [
      "Multi-Location Management (5+)",
      "Dedicated SEO Account Manager",
      "Daily Posting & Real-time Monitoring",
      "Custom Reporting Dashboard",
      "Competitor Displacement Strategy",
      "Bi-weekly Strategy Calls",
    ],
  },
] as const;

// ── Stats ──────────────────────────────────────────────────────────────────
const STATS = [
  { label: "Success Rate", value: "94%" },
  { label: "Avg. Visibility Lift", value: "+128%" },
  { label: "Businesses Served", value: "230+" },
  { label: "Countries", value: "6" },
];

// ── Page ───────────────────────────────────────────────────────────────────
const SEOPackages = () => (
  <div className="min-h-screen" style={{ background: "#f7f9fb" }}>
    <SeoHead
      title="SEO Packages & Pricing | ThriveNext SEO Agency India"
      description="Affordable local SEO packages starting at $175/month. Choose from Starter, Growth, or Enterprise plans. Google My Business optimization, citation building & map pack ranking."
      canonicalPath="/seo-packages"
    />
    <Header />

    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ background: "#f7f9fb" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle,#c4c6ce44 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-narrow relative z-10">
          <div
            className="flex flex-col md:flex-row items-end justify-between gap-8 pl-8"
            style={{ borderLeft: "4px solid #006a6a" }}
          >
            <div className="max-w-3xl">
              <span
                className="text-[10px] uppercase tracking-[0.2em] font-bold mb-4 block"
                style={{ color: "#006a6a" }}
              >
                Pricing Plans
              </span>
              <h1
                className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
                style={{ color: "#000f22", fontFamily: "Manrope, sans-serif" }}
              >
                SEO Packages &amp; Pricing
              </h1>
            </div>
            <p className="text-lg max-w-xs font-medium mb-2" style={{ color: "#43474d" }}>
              Transparent, result-focused pricing. No hidden fees. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16" style={{ background: "#f7f9fb" }}>
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span
                      className="text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
                      style={{ background: "#006a6a" }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}
                <div
                  className="p-8 rounded-2xl flex flex-col h-full transition-all duration-300 hover:shadow-xl"
                  style={{
                    background: pkg.popular ? "#000f22" : "#ffffff",
                    border: pkg.popular ? "none" : "1px solid rgba(196,198,206,0.4)",
                    transform: pkg.popular ? "scale(1.05)" : undefined,
                    boxShadow: pkg.popular ? "0 25px 50px rgba(0,15,34,0.3)" : undefined,
                  }}
                >
                  <div className="mb-7">
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ color: pkg.popular ? "#ffffff" : "#000f22", fontFamily: "Manrope, sans-serif" }}
                    >
                      {pkg.name}
                    </h3>
                    <p className="text-sm" style={{ color: pkg.popular ? "#768dad" : "#43474d" }}>
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-4xl font-extrabold"
                        style={{ color: pkg.popular ? "#ffffff" : "#000f22", fontFamily: "Manrope, sans-serif" }}
                      >
                        {pkg.price}
                      </span>
                      {pkg.period && (
                        <span className="font-medium" style={{ color: pkg.popular ? "#768dad" : "#43474d" }}>
                          {pkg.period}
                        </span>
                      )}
                    </div>
                    <p className="text-xs mt-1" style={{ color: pkg.popular ? "#5a7a9a" : "#94a3b8" }}>
                      {pkg.priceINR}{pkg.period ? " / month" : ""}
                    </p>
                  </div>

                  <ul className="space-y-3.5 mb-10 flex-grow">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#006a6a" }} />
                        <span className="text-sm" style={{ color: pkg.popular ? "#768dad" : "#43474d" }}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                    style={{
                      background: pkg.popular ? "#006a6a" : "#000f22",
                      color: "#ffffff",
                    }}
                  >
                    <MessageCircle className="h-4 w-4" />
                    {pkg.name === "Enterprise" ? "Request Custom Quote" : "Get Started"}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16" style={{ background: "#f2f4f6" }}>
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(({ label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="pl-6"
                style={{ borderLeft: "1px solid rgba(196,198,206,0.4)" }}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-widest block mb-1"
                  style={{ color: "#43474d" }}
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
    </main>

    <Footer />
    <StickyWhatsApp />
  </div>
);

export default SEOPackages;
