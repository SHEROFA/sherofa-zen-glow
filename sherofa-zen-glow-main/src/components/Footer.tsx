import { Github, Linkedin, Code } from "lucide-react";

const Footer = () => (
  <footer className="py-10 px-6 bg-cream/60 border-t border-border">
    <div className="max-w-6xl mx-auto text-center">
      <h3 className="font-serif text-xl font-semibold warm-text mb-4">Sherofa S Shenu</h3>
      <div className="flex justify-center gap-5 mb-4">
        {[
          { icon: Github, url: "https://github.com/SHEROFA" },
          { icon: Linkedin, url: "https://www.linkedin.com/in/sherofa-s-shenu-b4305a31a/" },
          { icon: Code, url: "https://leetcode.com/u/SherofaShenu/" },
        ].map((s, i) => (
          <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <s.icon size={18} />
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">© 2025 Sherofa S Shenu. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
