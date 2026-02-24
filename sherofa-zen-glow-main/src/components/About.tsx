import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "B.E. Computer Science & Engineering", school: "Panimalar Engineering College", year: "2023 – 2027", score: "CGPA: 8.6" },
  { degree: "HSC (Higher Secondary)", school: "Good Shepherd Matric Hr. Sec School", year: "2023", score: "89%" },
  { degree: "SSLC", school: "St. Antony's Matric Hr. Sec School", year: "2020", score: "" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const About = () => (
  <section id="about" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2 text-center">About Me</p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold warm-text text-center mb-10">Who I Am</h2>
      </motion.div>

      <motion.p
        className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Final-year engineering student specializing in Computer Science and Engineering, with strong foundations in Python, Java, SQL, Android (Kotlin), HTML/CSS, MySQL, and Git. Passionate about applying technical knowledge, solving problems, and continuously learning while contributing to growth-oriented organizations.
      </motion.p>

      {/* Education Timeline */}
      <div className="max-w-2xl mx-auto space-y-6">
        {education.map((e, i) => (
          <motion.div
            key={i}
            className="beige-card flex gap-4 items-start"
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-10 h-10 rounded-full bg-lavender flex items-center justify-center flex-shrink-0 mt-1">
              <GraduationCap size={18} className="text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">{e.degree}</h3>
              <p className="text-sm text-muted-foreground">{e.school} • {e.year}</p>
              {e.score && <span className="text-xs font-medium text-lavender-deep mt-1 inline-block">{e.score}</span>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
