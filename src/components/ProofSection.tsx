import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MotionWrapper from "./animations/MotionWrapper";
import { StaggerContainer, StaggerItem } from "./animations/StaggerContainer";

const caseStudies = [
  {
    tag: "SEO Campaign",
    title: "AI Wave — Smart AI-Powered App",
    result: "Increased organic traffic by 340% through comprehensive SEO strategy",
    image: "bg-gradient-to-br from-primary/30 to-primary/5",
  },
  {
    tag: "Local SEO",
    title: "App Lancer — Platform for Entrepreneurs",
    result: "Ranked #1 for 15 high-volume keywords in 6 months",
    image: "bg-gradient-to-br from-[hsl(0_0%_90%)] to-primary/15",
  },
  {
    tag: "E-commerce SEO",
    title: "E-Wallet — Digital Payment Design",
    result: "Generated 5,000+ monthly organic leads through SEO optimization",
    image: "bg-gradient-to-br from-primary/20 to-[hsl(0_0%_92%)]",
  },
];

const filterTags = [
  { label: "All Projects", count: 20 },
  { label: "SEO Campaigns", count: 5 },
  { label: "UI/UX Design", count: 10 },
  { label: "Brand Strategy", count: 5 },
];

const ProofSection = () => {
  return (
    <section id="results" className="section-padding relative overflow-hidden" style={{ background: 'hsl(0 0% 98%)' }}>
      <div className="container-narrow relative z-10">
        <MotionWrapper className="mb-12">
          <p className="text-sm font-bold tracking-[0.15em] text-primary uppercase mb-4">Our Work</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 max-w-4xl leading-[1.1]" style={{ color: 'hsl(0 0% 4%)' }}>
            Real-world examples of how we have helped companies achieve their{" "}
            <span className="green-underline">marketing objectives</span>
          </h2>
        </MotionWrapper>

        {/* Filter Tags */}
        <MotionWrapper delay={0.1} className="flex flex-wrap gap-3 mb-10">
          {filterTags.map((tag, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                index === 0
                  ? "bg-primary text-primary-foreground"
                  : "text-[hsl(0_0%_40%)] hover:bg-primary hover:text-primary-foreground"
              }`}
              style={index !== 0 ? { background: 'hsl(0 0% 92%)' } : {}}
            >
              {tag.label} ({tag.count})
            </button>
          ))}
        </MotionWrapper>

        {/* Case Study Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {caseStudies.map((study, index) => (
            <StaggerItem key={index}>
              <Card className="group overflow-hidden border-[hsl(0_0%_90%)] hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 rounded-3xl cursor-pointer" style={{ background: 'hsl(0 0% 100%)' }}>
                <div className={`h-64 ${study.image} relative overflow-hidden`}>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold">
                      <span className="w-2 h-2 rounded-full bg-primary-foreground" />
                      {study.tag}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors" style={{ color: 'hsl(0 0% 4%)' }}>
                    {study.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'hsl(0 0% 45%)' }}>{study.result}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <MotionWrapper delay={0.4} className="mt-10">
          <Button variant="outline" className="rounded-full px-8 py-6 text-base font-semibold transition-all border-[hsl(0_0%_4%)] hover:bg-[hsl(0_0%_4%)] hover:text-[hsl(0_0%_100%)]" style={{ color: 'hsl(0 0% 4%)' }} asChild>
            <a href="#results">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default ProofSection;
