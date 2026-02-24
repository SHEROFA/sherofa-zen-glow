import { motion } from "framer-motion";
import { Utensils, Heart, Pill, Brain } from "lucide-react";

const projects = [
  {
    title: "Zero-Waste Food Sharing App",
    icon: Utensils,
    desc: "A surplus food sharing platform that connects donors and recipients in real-time, reducing waste and fighting hunger through live matching.",
    tags: ["Food Tech", "Real-time Matching", "Social Impact"],
  },
  {
    title: "Quick Relief: AI Organ Matching",
    icon: Heart,
    desc: "An AI-powered organ donor–recipient matching platform with real-time compatibility analysis, streamlining the life-saving process.",
    tags: ["AI/ML", "Healthcare", "Real-time System"],
  },
  {
    title: "Automated Pill Dispenser",
    icon: Pill,
    desc: "An AI-based smart healthcare device that automatically dispenses medicines at scheduled times with alerts. Uses microcontrollers, sensors, and AI to monitor usage patterns, ensure accurate dosage, and improve medication adherence for elderly patients.",
    tags: ["AI/ML", "IoT", "Healthcare", "Embedded Systems"],
  },
  {
    title: "Emotion Recognition & Analysis",
    icon: Brain,
    desc: "An AI-powered system that detects and interprets human emotions from facial expressions, voice tone, text, and body language using ML and deep learning. Applied in customer service, healthcare, education, and human-computer interaction.",
    tags: ["AI/ML", "Deep Learning", "Computer Vision", "NLP"],
  },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2 text-center">Projects</p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold warm-text text-center mb-12">What I've Built</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="beige-card group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <div className="w-12 h-12 rounded-2xl bg-lavender/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <p.icon size={22} className="text-accent-foreground" />
            </div>
            <h3 className="font-serif text-xl font-semibold warm-text mb-3">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-lavender/40 text-accent-foreground font-medium">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
