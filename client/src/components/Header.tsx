import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-bold text-lg text-white">
            KR
          </div>
          <span className="hidden sm:block font-display text-lg font-bold text-foreground">
            Reenasri
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="hidden md:block px-6 py-2 rounded-lg bg-primary text-primary-foreground font-accent text-sm font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden border-t border-border bg-background"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-accent text-sm font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
