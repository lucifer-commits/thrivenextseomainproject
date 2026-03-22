import { Link } from "react-router-dom";

// ── Constants ──────────────────────────────────────────────────────────────
const YEAR = new Date().getFullYear();
const WHATSAPP_LINK = "https://wa.me/917808335684";
const EMAIL = "thrivenextmanager@gmail.com";

// ── Footer ─────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{ background: "#f1f3f5" }} className="py-14 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <Link
            to="/"
            className="inline-block text-lg font-extrabold mb-3"
            style={{ color: "#000f22", fontFamily: "Manrope, sans-serif" }}
          >
            ThriveNext<span style={{ color: "#006a6a" }}>SEO</span>
          </Link>
          <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
            India's leading local SEO &amp; Google My Business optimization agency. Serving
            businesses across India, UAE, UK, USA, Canada &amp; Australia.
          </p>
        </div>

        {/* Services */}
        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest mb-5" style={{ color: "#0f172a" }}>
            Services
          </h5>
          <ul className="space-y-3 text-sm" style={{ color: "#64748b" }}>
            {[
              "GMB Profile Optimization",
              "Local SEO Strategy",
              "Citation Building",
              "Review Management",
              "Geo-Grid Monitoring",
            ].map((s) => (
              <li key={s}>
                <Link to="/seo-packages" className="hover:text-teal-600 transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest mb-5" style={{ color: "#0f172a" }}>
            Quick Links
          </h5>
          <ul className="space-y-3 text-sm" style={{ color: "#64748b" }}>
            <li><Link to="/blog" className="hover:text-teal-600 transition-colors">SEO Blog</Link></li>
            <li><Link to="/seo-packages" className="hover:text-teal-600 transition-colors">SEO Packages</Link></li>
            <li><Link to="/contact" className="hover:text-teal-600 transition-colors">Contact Us</Link></li>
            <li>
              <a href="/sitemap.xml" className="hover:text-teal-600 transition-colors" target="_blank" rel="noopener noreferrer">
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest mb-5" style={{ color: "#0f172a" }}>
            Contact
          </h5>
          <ul className="space-y-3 text-sm" style={{ color: "#64748b" }}>
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-600 transition-colors"
              >
                📲 +91 78083 35684
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-teal-600 transition-colors">
                ✉️ {EMAIL}
              </a>
            </li>
            <li style={{ color: "#94a3b8" }}>
              🌍 India · UAE · UK · USA · Canada · Australia
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-xs"
        style={{ borderTop: "1px solid rgba(196,198,206,0.4)", color: "#94a3b8" }}
      >
        <p>© {YEAR} ThriveNext SEO Agency. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
