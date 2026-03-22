import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const StickyWhatsApp = () => {
  const whatsappLink = "https://wa.me/917808335684?text=Hi,%20I%20want%20a%20free%20SEO%20consultation";

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 font-bold text-sm px-5 py-3.5 rounded-xl"
      style={{
        background: '#006a6a',
        color: '#ffffff',
        boxShadow: '0 8px 32px rgba(0,106,106,0.4)',
      }}
      aria-label="Contact on WhatsApp for free SEO audit"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden md:inline">Free Audit</span>
    </motion.a>
  );
};

export default StickyWhatsApp;
