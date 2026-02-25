import { motion } from "framer-motion";
import { Utensils, Heart, Pill, Brain } from "lucide-react";
import projectFood from "@/assets/project-food.jpg";
import projectOrgan from "@/assets/project-organ.jpg";
import projectPill from "@/assets/project-pill.jpg";
import projectEmotion from "@/assets/project-emotion.jpg";

const projects = [
  {
    title: "Zero-Waste Food Sharing App",
    icon: Utensils,
    image: projectFood,
    desc: "Connects food donors and recipients in real-time to reduce waste and fight hunger.",
    tags: ["Food Tech", "Real-time Matching", "Social Impact"],
  },
  {
    title: "Quick Relief: AI Organ Matching",
    icon: Heart,
    image: projectOrgan,
    desc: "AI-powered donor–recipient matching with real-time compatibility analysis.",
    tags: ["AI/ML", "Healthcare", "Real-time System"],
  },
  {
    title: "Automated Pill Dispenser",
    icon: Pill,
    image: projectPill,
    desc: "Smart IoT device that auto-dispenses medicines on schedule with AI-driven alerts and monitoring.",
    tags: ["AI/ML", "IoT", "Healthcare", "Embedded Systems"],
  },
  {
    title: "Emotion Recognition & Analysis",
    icon: Brain,
    image: projectEmotion,
    desc: "Detects human emotions from facial expressions, voice, and text using deep learning.",
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
            className="beige-card group cursor-pointer overflow-hidden p-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="w-10 h-10 rounded-xl bg-lavender/60 flex items-center justify-center mb-4 -mt-10 relative z-10 border-2 border-background">
                <p.icon size={18} className="text-accent-foreground" />
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
