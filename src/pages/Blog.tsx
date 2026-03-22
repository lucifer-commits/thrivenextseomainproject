import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              SEO Blog & Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              SEO Tips, Strategies & Guides
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert search engine optimization insights, local SEO tips, and digital marketing 
              strategies to help you increase website traffic and grow your business.
            </p>
          </motion.div>

          {/* Blog Posts */}
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <Card className="group bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>

                      <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                        Read Full Article
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <StickyWhatsApp />
    </div>
  );
};

export default Blog;
