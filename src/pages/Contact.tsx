import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Shield, ArrowRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import SeoHead from "@/components/SeoHead";

// ── Constants ──────────────────────────────────────────────────────────────
const WHATSAPP_LINK =
  "https://wa.me/917808335684?text=Hi,%20I%20want%20a%20free%20SEO%20consultation";
const EMAIL = "thrivenextmanager@gmail.com";

// ── ContactForm state type ─────────────────────────────────────────────────
interface FormState {
  name: string;
  email: string;
  website: string;
  message: string;
}

// ── Contact ────────────────────────────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <div className="min-h-screen" style={{ background: "#f7f9fb" }}>
      <SeoHead
        title="Contact ThriveNext SEO Agency | Free SEO Audit"
        description="Contact ThriveNext for a free local SEO audit. Reach us on WhatsApp at +91 78083 35684 or email thrivenextmanager@gmail.com. Serving India, UAE, UK, USA, Canada & Australia."
        canonicalPath="/contact"
      />
      <Header />

      <main className="pt-16">
        <div className="container-narrow py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* ── Left: Info ─────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="text-[10px] font-bold uppercase tracking-widest mb-4 block"
                style={{ color: "#006a6a" }}
              >
                Get In Touch
              </span>
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tight mb-5"
                style={{ color: "#000f22", fontFamily: "Manrope, sans-serif" }}
              >
                Let's Grow Your
                <br />
                <span style={{ color: "#006a6a" }}>Local Rankings</span>
              </h1>
              <p className="text-lg leading-relaxed mb-10" style={{ color: "#43474d" }}>
                Contact us for a free GMB audit and local SEO strategy session. We'll show you
                exactly what it takes to rank #1 in your area.
              </p>

              {/* Contact cards */}
              <div className="space-y-4 mb-10">
                <ContactCard icon={<MessageCircle className="h-5 w-5" />} href={WHATSAPP_LINK} external>
                  <p className="font-bold" style={{ color: "#000f22" }}>WhatsApp</p>
                  <p className="text-sm" style={{ color: "#006a6a" }}>+91 78083 35684</p>
                </ContactCard>

                <ContactCard icon={<Mail className="h-5 w-5" />} href={`mailto:${EMAIL}`}>
                  <p className="font-bold" style={{ color: "#000f22" }}>Email</p>
                  <p className="text-sm" style={{ color: "#006a6a" }}>{EMAIL}</p>
                </ContactCard>

                <ContactCard icon={<MapPin className="h-5 w-5" />}>
                  <p className="font-bold" style={{ color: "#000f22" }}>Global Service</p>
                  <p className="text-sm" style={{ color: "#43474d" }}>
                    India · UAE · UK · USA · Canada · Australia
                  </p>
                </ContactCard>
              </div>

              {/* Response time chip */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: "#e6f9f9", color: "#006a6a" }}
              >
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                Typical response within 2–4 hours
              </div>
            </motion.div>

            {/* ── Right: Audit Request form ───────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="p-10 rounded-2xl"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.07)",
                  border: "1px solid rgba(196,198,206,0.2)",
                }}
              >
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#000f22", fontFamily: "Manrope, sans-serif" }}
                >
                  Request a Free SEO Audit
                </h2>
                <p className="text-sm mb-8" style={{ color: "#43474d" }}>
                  Fill in your details and we'll send you a personalised audit within 24 hours.
                </p>

                <div className="space-y-5">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Your Name"
                      type="text"
                      placeholder="e.g. Rajesh Kumar"
                      value={form.name}
                      onChange={handleChange("name")}
                    />
                    <FormField
                      label="Email Address"
                      type="email"
                      placeholder="name@company.com"
                      value={form.email}
                      onChange={handleChange("email")}
                    />
                  </div>

                  <FormField
                    label="Website URL"
                    type="url"
                    placeholder="https://www.yourbusiness.com"
                    value={form.website}
                    onChange={handleChange("website")}
                  />

                  {/* Message */}
                  <div>
                    <label
                      className="block text-[10px] font-bold uppercase tracking-widest mb-2"
                      style={{ color: "#43474d" }}
                    >
                      Tell us about your goals
                    </label>
                    <textarea
                      rows={4}
                      placeholder="e.g. We want to rank #1 for 'plumber London'..."
                      className="w-full px-4 py-3.5 rounded-lg border outline-none resize-none transition-all text-sm"
                      style={{ background: "#f2f4f6", borderColor: "#e0e3e5", color: "#000f22" }}
                      onFocus={(e) => { e.target.style.borderColor = "#006a6a"; }}
                      onBlur={(e) => { e.target.style.borderColor = "#e0e3e5"; }}
                      value={form.message}
                      onChange={handleChange("message")}
                    />
                  </div>

                  {/* Submit → WhatsApp */}
                  <a
                    id="contact-submit-btn"
                    href={`${WHATSAPP_LINK}&text=Hi,%20my%20name%20is%20${encodeURIComponent(form.name)}.%20Website:%20${encodeURIComponent(form.website)}.%20${encodeURIComponent(form.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold text-white text-base transition-all hover:opacity-90"
                    style={{ background: "#000f22" }}
                  >
                    <MessageCircle className="h-5 w-5" />
                    Send via WhatsApp
                    <ArrowRight className="h-5 w-5" />
                  </a>

                  {/* Trust chips */}
                  <div
                    className="flex flex-wrap items-center gap-5 pt-4"
                    style={{ borderTop: "1px solid #f2f4f6" }}
                  >
                    {["100% Free Audit", "No Commitment", "GDPR Compliant"].map((t) => (
                      <span
                        key={t}
                        className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider"
                        style={{ color: "#43474d" }}
                      >
                        <Shield className="h-3 w-3" style={{ color: "#006a6a" }} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      <StickyWhatsApp />
    </div>
  );
};

// ── Sub-components ─────────────────────────────────────────────────────────
function ContactCard({
  icon,
  href,
  external,
  children,
}: {
  icon: React.ReactNode;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      {...(href
        ? { href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
        : {})}
      className="flex items-center gap-4 p-5 rounded-xl transition-all hover:shadow-sm cursor-pointer"
      style={{
        background: "#ffffff",
        borderLeft: "3px solid #006a6a",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        textDecoration: "none",
      }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
        style={{ background: "#90efef", color: "#006e6e" }}
      >
        {icon}
      </div>
      <div>{children}</div>
    </Tag>
  );
}

function FormField({
  label,
  type,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label
        className="block text-[10px] font-bold uppercase tracking-widest mb-2"
        style={{ color: "#43474d" }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3.5 rounded-lg border outline-none transition-all text-sm"
        style={{ background: "#f2f4f6", borderColor: "#e0e3e5", color: "#000f22" }}
        onFocus={(e) => { e.target.style.borderColor = "#006a6a"; }}
        onBlur={(e) => { e.target.style.borderColor = "#e0e3e5"; }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Contact;
