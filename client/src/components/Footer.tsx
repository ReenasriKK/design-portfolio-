import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 } as any}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-display font-bold text-lg text-white">
                KR
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                Reenasri
              </span>
            </div>
            <p className="font-body text-muted-foreground text-sm">
              Creative Frontend Developer & UI/UX Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'GitHub', href: 'https://github.com/ReenasriKK' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/reenasri-kumar-72a523321/' },
                { label: 'Email', href: 'mailto:reenavenikumar@gmail.com' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                'Frontend Development',
                'UI Design',
                'Landing Pages',
                'Portfolio Design',
              ].map((service) => (
                <li key={service}>
                  <span className="font-body text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 } as any}
          viewport={{ once: true }}
        >
          <p className="font-body text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} K.K. Reenasri. All rights reserved.
          </p>
          <p className="font-body text-muted-foreground text-sm">
            Designed & Built with <span className="text-primary">❤️</span> using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
