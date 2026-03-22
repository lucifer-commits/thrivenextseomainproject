import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MotionWrapper from "./animations/MotionWrapper";

const faqs = [
  { question: "What is GMB SEO and why do I need it?", answer: "Google My Business (GMB) SEO ensures your business appears prominently in local search results and the Google Map Pack. For local and multi-location businesses, this drives high-intent traffic that converts 3x more than average web traffic." },
  { question: "How long does it take to see GMB SEO results?", answer: "Typically, you'll start seeing improvements in 2-4 weeks for GMB profile signals, with significant map pack ranking improvements in 1-3 months depending on your market's competitiveness." },
  { question: "What makes you the best GMB SEO agency?", answer: "We've optimized 500+ GMB listings across 2,400+ active locations with an average 128% visibility lift. Our architectural approach treats every data point as a ranking signal — from NAP consistency to sentiment optimization." },
  { question: "Do you offer a free audit before starting?", answer: "Yes! We provide a comprehensive free GMB architectural audit covering listing hygiene, citation consistency, review sentiment analysis, and competitive landscape mapping." },
  { question: "What's included in your GMB services?", answer: "Profile optimization, local citation building, review management strategy, keyword mapping, geo-fenced monitoring, monthly heatmap reporting, and ongoing content strategy." },
  { question: "Can you help multiple business locations?", answer: "Absolutely — multi-location scaling is our specialty. We've simultaneously optimized up to 14 locations for single clients with consistent ranking improvements across all profiles." },
  { question: "How do you measure GMB SEO success?", answer: "We track map pack rankings across geo-coordinates using heatmaps, CTR improvements, call volume increases, direction requests, and website click-throughs from GMB." },
  { question: "Do you work with small businesses or only enterprises?", answer: "We serve businesses of all sizes. Our Essential Foundation plan at $499/month is designed for local businesses, while our Market Dominator plan handles enterprise multi-location needs." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding relative overflow-hidden" style={{ background: '#f2f4f6' }}>
      <div className="container-narrow relative z-10">
        <MotionWrapper className="text-center mb-14">
          <span
            className="text-sm font-bold uppercase tracking-widest mb-4 block"
            style={{ color: '#006a6a' }}
          >
            FAQ
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
            style={{ color: '#000f22', fontFamily: 'Manrope, sans-serif' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#43474d' }}>
            Everything you need to know about our GMB SEO services and how we help local businesses dominate the map pack.
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.2} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-xl px-6 border transition-all duration-300"
                style={{ borderColor: 'rgba(196,198,206,0.4)', background: '#ffffff' }}
              >
                <AccordionTrigger
                  className="text-left font-semibold hover:no-underline py-5 transition-colors"
                  style={{ color: '#000f22' }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="leading-relaxed pb-5 text-[15px]"
                  style={{ color: '#43474d' }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default FAQSection;
