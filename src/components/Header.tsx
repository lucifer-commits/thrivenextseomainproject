import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

// ── Constants ──────────────────────────────────────────────────────────────
const WHATSAPP_LINK =
  "https://wa.me/917808335684?text=Hi,%20I%20want%20a%20free%20SEO%20consultation";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/seo-packages", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

// ── Component ──────────────────────────────────────────────────────────────
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Scroll-based header shadow
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-50/95 backdrop-blur-xl shadow-sm border-b border-slate-200/60"
          : "bg-slate-50/85 backdrop-blur-md"
      }`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group shrink-0"
            aria-label="ThriveNext SEO — Home"
          >
            <span
              className="text-xl font-extrabold tracking-tight leading-none"
              style={{ color: "#000f22", fontFamily: "Manrope, sans-serif" }}
            >
              ThriveNext
              <span style={{ color: "#006a6a" }}>SEO</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-[0.72rem] font-semibold uppercase tracking-wider transition-colors ${
                  isActive(to)
                    ? "text-teal-700 border-b-2 border-teal-600 pb-0.5"
                    : "text-slate-600 hover:text-teal-600"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="header-cta-btn"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg,#000f22 0%,#0a2540 100%)" }}
          >
            Free Audit
          </a>

          {/* Mobile toggle */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-slate-800" />
            ) : (
              <Menu className="h-5 w-5 text-slate-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-slate-50/98 backdrop-blur-2xl border-t border-slate-200">
          <nav className="flex flex-col p-6 gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-base font-semibold py-3.5 px-4 rounded-xl transition-colors ${
                  isActive(to)
                    ? "text-teal-700 bg-teal-50"
                    : "text-slate-700 hover:text-teal-600 hover:bg-slate-100"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="h-px bg-slate-200 my-3" />
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white text-lg"
              style={{ background: "linear-gradient(135deg,#000f22 0%,#0a2540 100%)" }}
            >
              Get Free Audit <ArrowRight className="h-5 w-5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
