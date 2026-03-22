import { motion } from "framer-motion";
import MotionWrapper from "./animations/MotionWrapper";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";
import { Star, TrendingUp } from "lucide-react";

// ── Testimonials data (real ThriveNext clients) ────────────────────────────
const TESTIMONIALS = [
  {
    quote:
      "ThriveNext transformed our local visibility in under 90 days. Our inbound call volume increased by nearly 300% — we went from page 3 to the #1 spot in Google Maps.",
    author: "Rajesh Kumar",
    role: "CEO, TechStart India",
    initials: "RK",
    borderColor: "#006a6a",
  },
  {
    quote:
      "Surgical precision. They diagnosed why our GMB listings were lagging and implemented a strategy that scaled all 14 of our locations simultaneously.",
    author: "Sarah Jenkins",
    role: "Head of Marketing, Apex Realty UK",
    initials: "SJ",
    borderColor: "#000f22",
  },
  {
    quote:
      "After just 30 days, our calls literally doubled. We went from barely showing up on Google Maps to being in the top 3 for every major keyword in our city.",
    author: "Ahmed Khan",
    role: "Owner, SwiftPlumb Services UAE",
    initials: "AK",
    borderColor: "#006a6a",
  },
  {
    quote:
      "We've seen a 250% increase in Google Maps impressions within 3 months. The reporting is crystal-clear and the team responds on WhatsApp the same day.",
    author: "Priya Sharma",
    role: "Director, DentaCare Clinics India",
    initials: "PS",
    borderColor: "#000f22",
  },
];

// ── WhyChooseSection ───────────────────────────────────────────────────────
const WhyChooseSection = () => (
  <section id="why-us" className="section-padding relative overflow-hidden" style={{ background: "#f7f9fb" }}>
    <div className="container-narrow">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left: proof stats */}
        <div className="lg:w-1/3 shrink-0">
          <MotionWrapper>
            <span
              className="text-[10px] font-bold uppercase tracking-widest mb-3 block"
              style={{ color: "#006a6a" }}
            >
              Client Results
            </span>
            <h2
              className="text-4xl font-extrabold mb-5 leading-tight"
              style={{ color: "#000f22", fontFamily: "Manrope, sans-serif" }}
            >
              Real Businesses,<br />Real Growth
            </h2>
            <p className="mb-10 leading-relaxed" style={{ color: "#43474d" }}>
              Over 230 businesses across India, UAE, UK, USA, Canada &amp; Australia have trusted
              ThriveNext to grow their local search presence.
            </p>
          </MotionWrapper>

          <div className="flex flex-col gap-6">
            {[
              { icon: Star, value: "4.9/5", label: "Average Client Rating" },
              { icon: TrendingUp, value: "+128%", label: "Avg. Visibility Growth" },
            ].map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "#90efef" }}
                >
                  <Icon className="h-5 w-5 fill-current" style={{ color: "#006e6e" }} />
                </div>
                <div>
                  <p className="font-extrabold text-xl" style={{ color: "#000f22" }}>
                    {value}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#43474d" }}>
                    {label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: testimonial grid */}
        <StaggerContainer className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {TESTIMONIALS.map((t, i) => (
            <StaggerItem key={i}>
              <div
                className="p-8 rounded-2xl flex flex-col justify-between h-full"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(196,198,206,0.2)",
                  borderLeft: `4px solid ${t.borderColor}`,
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-5" style={{ color: "#006a6a" }}>
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p
                  className="font-medium text-base italic mb-7 leading-relaxed flex-grow"
                  style={{ color: "#000f22" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0"
                    style={{ background: "#0a2540" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#000f22" }}>
                      {t.author}
                    </p>
                    <p className="text-xs" style={{ color: "#43474d" }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
