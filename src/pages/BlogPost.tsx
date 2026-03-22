import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import SeoHead from "@/components/SeoHead";
import { blogPosts } from "@/data/blogPosts";
import { useEffect } from "react";


const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const whatsappLink = "https://wa.me/917808335684?text=Hi,%20I%20want%20a%20free%20SEO%20audit";

  // Enhanced markdown-to-HTML renderer for blog content
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];
    let inTable = false;
    let tableRows: string[][] = [];
    let inBlockquote = false;
    let blockquoteLines: string[] = [];
    let listKey = 0;
    let tableKey = 0;
    let blockquoteKey = 0;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${listKey++}`} className="list-disc pl-6 space-y-3 my-6 text-muted-foreground marker:text-primary">
            {listItems.map((item, i) => (
              <li key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    const flushTable = () => {
      if (tableRows.length > 1) {
        elements.push(
          <div key={`table-${tableKey++}`} className="overflow-x-auto my-8 rounded-xl border border-border shadow-sm">
            <table className="w-full border-collapse bg-card">
              <thead>
                <tr className="bg-secondary/80 border-b border-border">
                  {tableRows[0].map((cell, i) => (
                    <th key={i} className="px-5 py-3 text-left text-foreground font-semibold text-sm">
                      {formatInline(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(2).map((row, ri) => (
                  <tr key={ri} className="border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors">
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-5 py-3 text-muted-foreground text-sm" dangerouslySetInnerHTML={{ __html: formatInline(cell) }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    const flushBlockquote = () => {
      if (blockquoteLines.length > 0) {
        elements.push(
          <blockquote key={`bq-${blockquoteKey++}`} className="my-8 border-l-4 border-primary bg-primary/5 pl-6 pr-4 py-4 rounded-r-lg italic text-foreground/90 shadow-sm">
            {blockquoteLines.map((line, i) => (
               <p key={i} className="mb-2 last:mb-0 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
            ))}
          </blockquote>
        );
        blockquoteLines = [];
        inBlockquote = false;
      }
    };

    const formatInline = (text: string) => {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-bold">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
        .replace(/`(.*?)`/g, '<code class="bg-secondary px-1.5 py-0.5 rounded text-sm font-mono text-primary">$1</code>');
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      if (!trimmed) {
        flushList();
        flushTable();
        flushBlockquote();
        continue;
      }

      // Blockquote
      if (trimmed.startsWith("> ")) {
        flushList();
        flushTable();
        inBlockquote = true;
        blockquoteLines.push(trimmed.substring(2));
        continue;
      } else if (inBlockquote) {
        flushBlockquote();
      }

      // Table
      if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
        flushList();
        flushBlockquote();
        inTable = true;
        const cells = trimmed.split("|").filter(Boolean).map(c => c.trim());
        tableRows.push(cells);
        continue;
      } else if (inTable) {
        flushTable();
      }

      // Images: ![alt](url)
      const imgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (imgMatch) {
        flushList();
        flushBlockquote();
        elements.push(
          <div key={`img-${i}`} className="my-10 relative rounded-xl overflow-hidden shadow-md group">
            <img src={imgMatch[2]} alt={imgMatch[1]} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            {imgMatch[1] && (
              <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm text-center">{imgMatch[1]}</p>
              </div>
            )}
          </div>
        );
        continue;
      }

      // Headers
      if (trimmed.startsWith("## ")) {
        flushList();
        flushBlockquote();
        elements.push(
          <div key={i} className="mt-14 mb-6 relative">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-primary rounded-full hidden md:block"></div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              {formatInline(trimmed.replace("## ", ""))}
            </h2>
          </div>
        );
        continue;
      }
      if (trimmed.startsWith("### ")) {
        flushList();
        flushBlockquote();
        elements.push(
          <h3 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4 flex items-center gap-2">
            <span className="text-primary opacity-70 text-lg">#</span>
            {formatInline(trimmed.replace("### ", ""))}
          </h3>
        );
        continue;
      }
      if (trimmed.startsWith("#### ")) {
        flushList();
        flushBlockquote();
        elements.push(
          <h4 key={i} className="text-xl font-semibold text-foreground mt-8 mb-3">
            {formatInline(trimmed.replace("#### ", ""))}
          </h4>
        );
        continue;
      }

      // List items
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        inList = true;
        listItems.push(trimmed.replace(/^[-*] /, ""));
        continue;
      }

      // Checkbox items
      if (trimmed.startsWith("- [ ]") || trimmed.startsWith("- [x]")) {
        inList = true;
        listItems.push(trimmed.replace(/^- \[[ x]\] /, ""));
        continue;
      }

      // Numbered list
      if (/^\d+\.\s/.test(trimmed)) {
        inList = true;
        listItems.push(trimmed.replace(/^\d+\.\s/, ""));
        continue;
      }

      flushList();
      flushBlockquote();

      // Normal paragraph
      elements.push(
        <p
          key={i}
          className="text-muted-foreground leading-[1.8] my-5 text-[1.05rem]"
          dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
        />
      );
    }

    flushList();
    flushTable();
    flushBlockquote();
    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Dynamic per-page SEO — fixes CSR two-wave indexing gap */}
      <SeoHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonicalPath={`/blog/${post.slug}`}
        type="article"
        articleMeta={{
          datePublished: post.date,
          keywords: post.keywords,
          author: "ThriveNext SEO Agency",
        }}
      />

      <main className="pt-24 pb-16">
        <article className="container max-w-3xl mx-auto px-4">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Post Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>

          {/* Post Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose-custom"
          >
            {renderContent(post.content)}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-center text-primary-foreground"
          >
            <h3 className="text-2xl font-bold mb-3">Ready to Improve Your SEO?</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-md mx-auto">
              Get a free SEO audit and discover how we can boost your search engine rankings and website traffic.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Your Free SEO Audit
              </a>
            </Button>
          </motion.div>
        </article>
      </main>

      <Footer />
      <StickyWhatsApp />
    </div>
  );
};

export default BlogPost;
