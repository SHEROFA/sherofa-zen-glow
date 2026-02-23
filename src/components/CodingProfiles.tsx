import { motion } from "framer-motion";
import { Github, Linkedin, Code } from "lucide-react";

const profiles = [
  { name: "GitHub", icon: Github, url: "https://github.com/SHEROFA" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/sherofa-s-shenu-b4305a31a/" },
  { name: "LeetCode", icon: Code, url: "https://leetcode.com/u/SherofaShenu/" },
];

const CodingProfiles = () => (
  <section id="profiles" className="section-padding bg-cream/50">
    <div className="max-w-6xl mx-auto text-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">Coding Profiles</p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold warm-text mb-12">Find Me Online</h2>
      </motion.div>

      <div className="flex justify-center gap-8 flex-wrap">
        {profiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="beige-card flex flex-col items-center gap-3 p-8 w-40 group"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div className="w-14 h-14 rounded-full border-2 border-cream-dark flex items-center justify-center group-hover:border-lavender-deep group-hover:shadow-lg transition-all duration-300">
              <p.icon size={24} className="warm-text group-hover:text-lavender-deep transition-colors" />
            </div>
            <span className="text-sm font-medium text-foreground">{p.name}</span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default CodingProfiles;
