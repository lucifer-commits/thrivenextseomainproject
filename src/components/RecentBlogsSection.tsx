import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import MotionWrapper from "./animations/MotionWrapper";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";
import { blogPosts } from "@/data/blogPosts";

const RecentBlogsSection = () => {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section id="insights" className="section-padding" style={{ background: "#ffffff" }}>
      <div className="container-narrow">
        <MotionWrapper className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span
              className="text-[10px] font-bold uppercase tracking-widest mb-3 block"
              style={{ color: "#006a6a" }}
            >
              Market Intelligence
            </span>
            <h2
              className="text-4xl font-extrabold mb-4"
              style={{ color: "#000f22", fontFamily: "Manrope, sans-serif" }}
            >
              SEO Insights &amp; Strategies
            </h2>
            <p className="text-lg" style={{ color: "#43474d" }}>
              Latest ranking frameworks, algorithm updates, and local search strategies from our SEO experts.
            </p>
          </div>
          <Link
            to="/blog"
            className="hidden md:flex items-center gap-2 font-bold text-[0.8rem] uppercase tracking-wider transition-all hover:gap-3"
            style={{ color: "#006a6a" }}
          >
            View All Intelligence
            <ArrowRight className="h-5 w-5" />
          </Link>
        </MotionWrapper>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {recentPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="block h-full group">
                <div
                  className="p-8 rounded-2xl flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  style={{
                    background: "#f7f9fb",
                    border: "1px solid rgba(196,198,206,0.3)",
                    borderTop: "3px solid #006a6a",
                  }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                      style={{ background: "#90efef", color: "#006e6e" }}
                    >
                      {post.category}
                    </span>
                    <div
                      className="flex items-center gap-1.5 text-xs font-semibold"
                      style={{ color: "#768dad" }}
                    >
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold mb-4 leading-snug transition-colors duration-300 group-hover:text-teal-700"
                    style={{ color: "#000f22", fontFamily: "Manrope, sans-serif" }}
                  >
                    {post.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-8 flex-grow" style={{ color: "#43474d" }}>
                    {post.excerpt}
                  </p>

                  <div
                    className="flex items-center gap-2 font-bold text-sm tracking-wide transition-all group-hover:gap-3"
                    style={{ color: "#006a6a" }}
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <MotionWrapper className="mt-10 text-center md:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl transition-all text-sm uppercase tracking-wider"
            style={{ background: "#f2f4f6", color: "#000f22" }}
          >
            View All Intelligence
            <ArrowRight className="h-4 w-4" />
          </Link>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default RecentBlogsSection;
