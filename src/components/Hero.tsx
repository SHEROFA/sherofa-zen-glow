import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      {/* Floating gradient shapes */}
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-lavender/40 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-sky/30 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-lavender-deep/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold warm-text leading-tight mb-2">
            SHEROFA
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold gradient-text leading-tight mb-4">
            S SHENU
          </h1>
          <p className="text-lg font-medium text-foreground/80 mb-3">Computer Science Engineering Student</p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
            Passionate about building impactful technology solutions. Final-year B.E. student driven by curiosity, problem-solving, and continuous growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="gradient-button">Contact Me</a>
            <a href="#projects" className="glass-card px-6 py-3 rounded-full font-medium text-foreground hover:scale-105 transition-transform">
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Right - Profile */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cream-dark shadow-lg">
              <img src={profileImg} alt="Sherofa S Shenu" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-lavender/50 blur-xl" />
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-sky/40 blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
