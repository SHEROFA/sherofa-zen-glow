import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Skills", "Projects", "Profiles", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scroll = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card rounded-none border-x-0 border-t-0">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scroll("home")} className="font-serif text-xl font-semibold warm-text">
          Sherofa
        </button>

        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scroll(l.toLowerCase())}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </button>
          ))}
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scroll(l.toLowerCase())}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
