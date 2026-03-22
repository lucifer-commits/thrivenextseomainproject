import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

// ── Constants ──────────────────────────────────────────────────────────────
const WHATSAPP_LINK =
  "https://wa.me/917808335684?text=Hi,%20I%20want%20a%20free%20SEO%20consultation";

// ── CTASection ─────────────────────────────────────────────────────────────
const CTASection = () => (
  <section id="cta" className="section-padding" style={{ background: "#f7f9fb" }}>
    <div className="container-narrow">
      <div
        className="rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#000f22 0%,#0a2540 100%)" }}
      >
        {/* Subtle glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(0,106,106,0.12)", filter: "blur(70px)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <span
            className="text-[10px] font-bold uppercase tracking-widest mb-4 block"
            style={{ color: "#93f2f2" }}
          >
            Ready to Grow?
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-7"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Get Your Free SEO Audit Today
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto mb-12"
            style={{ color: "#768dad" }}
          >
            We'll analyse your Google Business Profile, local citations, and competitor rankings —
            then show you exactly what it takes to dominate the map pack.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              id="cta-whatsapp-btn"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-bold text-xl text-white transition-all hover:opacity-90"
              style={{ background: "#006a6a", boxShadow: "0 4px 30px rgba(0,106,106,0.4)" }}
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 px-10 py-5 rounded-xl font-bold text-xl text-white transition-all"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Contact Us <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-8 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            No commitment • Response within 24 hours • Serving India, UAE, UK, USA, Canada &amp; Australia
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CTASection;
