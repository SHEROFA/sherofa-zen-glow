import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2 text-center">Contact</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold warm-text text-center mb-12">Get In Touch</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground leading-relaxed">
              I'd love to connect! Whether it's a project collaboration, opportunity, or just a chat — feel free to reach out.
            </p>
            {[
              { icon: Mail, text: "sherofashenu@gmail.com", href: "mailto:sherofashenu@gmail.com" },
              { icon: Phone, text: "8610902822", href: "tel:8610902822" },
              { icon: MapPin, text: "Marthandam, Kanyakumari", href: "#" },
            ].map((c, i) => (
              <a key={i} href={c.href} className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors">
                <div className="w-10 h-10 rounded-full bg-lavender/50 flex items-center justify-center flex-shrink-0">
                  <c.icon size={16} className="text-accent-foreground" />
                </div>
                <span className="text-sm">{c.text}</span>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            className="beige-card space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-lavender-deep/30 transition-all"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-lavender-deep/30 transition-all"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-lavender-deep/30 transition-all resize-none"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button type="submit" className="gradient-button flex items-center gap-2 w-full justify-center">
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
