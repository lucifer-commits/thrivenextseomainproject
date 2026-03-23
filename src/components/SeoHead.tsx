import { useEffect } from "react";

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  type?: "website" | "article";
  articleMeta?: {
    datePublished: string;
    dateModified?: string;
    author?: string;
    keywords?: string[];
    image?: string;
  };
  ogImage?: string;
}

const SITE_URL = "https://thrivenextseo.in";
const SITE_NAME = "ThriveNext SEO Agency";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * SeoHead — injects page-level SEO metadata into <head>.
 *
 * Implements recommendations from "Engineering for Search":
 *  - Metadata Orchestration: per-page title (<60 chars), meta desc (<160 chars)
 *  - Open Graph + Twitter Card for social sharing signals
 *  - Canonical tags to prevent duplicate content dilution
 *  - JSON-LD Article schema for blog posts (fixes CSR second-wave indexing)
 *  - BreadcrumbList schema for page hierarchy signals
 */
const SeoHead = ({
  title,
  description,
  canonicalPath,
  type = "website",
  articleMeta,
  ogImage = DEFAULT_OG_IMAGE,
}: SeoHeadProps) => {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  useEffect(() => {
    // ── Title ──────────────────────────────────────────────
    document.title = title;

    // ── Helper to upsert a <meta> tag ─────────────────────
    const setMeta = (attr: string, attrVal: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${attrVal}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // ── Helper to upsert a <link> tag ─────────────────────
    const setLink = (rel: string, href: string, extra?: Record<string, string>) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
      if (extra) Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
    };

    // ── Helper to upsert a JSON-LD <script> ───────────────
    const setJsonLd = (id: string, data: object) => {
      let el = document.querySelector(`script[data-seo="${id}"]`) as HTMLScriptElement | null;
      if (!el) {
        el = document.createElement("script");
        el.setAttribute("type", "application/ld+json");
        el.setAttribute("data-seo", id);
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(data);
    };

    // ── Standard meta ─────────────────────────────────────
    setMeta("name", "description", description);

    // ── Canonical ─────────────────────────────────────────
    setLink("canonical", canonicalUrl);

    // ── Open Graph ────────────────────────────────────────
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "en_IN");

    if (type === "article" && articleMeta) {
      setMeta("property", "article:published_time", articleMeta.datePublished);
      if (articleMeta.dateModified)
        setMeta("property", "article:modified_time", articleMeta.dateModified);
      setMeta("property", "article:author", articleMeta.author || SITE_NAME);
      if (articleMeta.keywords?.length)
        setMeta("property", "article:section", articleMeta.keywords[0]);
    }

    // ── Twitter / X Card ──────────────────────────────────
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);
    setMeta("name", "twitter:site", "@ThriveNextSEO");

    // ── JSON-LD: Article (blog posts) ─────────────────────
    if (type === "article" && articleMeta) {
      setJsonLd("article", {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        image: [articleMeta.image || ogImage],
        datePublished: articleMeta.datePublished,
        dateModified: articleMeta.dateModified || articleMeta.datePublished,
        author: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/favicon.ico`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        keywords: articleMeta.keywords?.join(", "),
      });

      // BreadcrumbList schema for blog posts
      setJsonLd("breadcrumb", {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: title, item: canonicalUrl },
        ],
      });
    }

    // ── Cleanup on unmount ────────────────────────────────
    return () => {
      document.querySelectorAll("script[data-seo]").forEach((el) => el.remove());
    };
  }, [title, description, canonicalUrl, type, ogImage, articleMeta]);

  return null; // Renders nothing — all work is done in useEffect on <head>
};

export default SeoHead;
