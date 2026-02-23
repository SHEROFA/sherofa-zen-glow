import { motion } from "framer-motion";
import { Code, Terminal, Database, GitBranch, Monitor, MessageSquare, Users, Lightbulb, Clock } from "lucide-react";

const technical = [
  { name: "C / Java / Python", icon: Code },
  { name: "HTML / CSS / JS", icon: Terminal },
  { name: "MySQL", icon: Database },
  { name: "Git & VS Code", icon: GitBranch },
  { name: "MS Excel", icon: Monitor },
  { name: "Windows & Linux", icon: Monitor },
];

const soft = [
  { name: "Communication", icon: MessageSquare },
  { name: "Teamwork", icon: Users },
  { name: "Problem-Solving", icon: Lightbulb },
  { name: "Time Management", icon: Clock },
];

const SkillCard = ({ name, icon: Icon, i }: { name: string; icon: typeof Code; i: number }) => (
  <motion.div
    className="beige-card flex items-center gap-3 p-4"
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.08, duration: 0.4 }}
  >
    <div className="w-9 h-9 rounded-xl bg-lavender/60 flex items-center justify-center flex-shrink-0">
      <Icon size={16} className="text-accent-foreground" />
    </div>
    <span className="text-sm font-medium text-foreground">{name}</span>
  </motion.div>
);

const Skills = () => (
  <section id="skills" className="section-padding bg-cream/50">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2 text-center">Skills</p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold warm-text text-center mb-12">What I Know</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div>
          <h3 className="font-serif text-xl font-semibold warm-text mb-5">Technical Skills</h3>
          <div className="grid grid-cols-2 gap-3">
            {technical.map((s, i) => <SkillCard key={s.name} {...s} i={i} />)}
          </div>
        </div>
        <div>
          <h3 className="font-serif text-xl font-semibold warm-text mb-5">Soft Skills</h3>
          <div className="grid grid-cols-2 gap-3">
            {soft.map((s, i) => <SkillCard key={s.name} {...s} i={i} />)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
