import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Creative Developer', 'UI/UX Enthusiast', 'Frontend Engineer'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let charIndex = 0;
    let timeout: NodeJS.Timeout;

    const type = () => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(type, 50);
      } else {
        timeout = setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setDisplayText('');
        }, 2000);
      }
    };

    timeout = setTimeout(type, 100);
    return () => clearTimeout(timeout);
  }, [roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      } as any,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 } as any,
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/manus-storage/hero-gradient-mesh_33e7473a.png"
          alt="hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-20" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-20 animation-delay-2000" />
      </div>

      {/* Content */}
      <motion.div
        className="container relative z-10 max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-4">
            Hello, I'm{' '}
            <span className="gradient-text">Reenasri.</span>
          </h1>
        </motion.div>

        {/* Typing Effect */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-body text-muted-foreground">
              I'm a
            </span>
            <span className="text-xl md:text-2xl font-accent text-primary min-w-64">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl font-body text-muted-foreground max-w-2xl mb-12 leading-relaxed"
        >
          I don't just build websites. I create digital experiences that combine
          creativity with technology. Specializing in responsive, user-friendly,
          and visually stunning web applications.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-accent font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 magnetic-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
            <ArrowRight size={20} />
          </motion.a>

          <motion.a
            href="#"
            className="px-8 py-4 rounded-lg border border-primary text-foreground font-accent font-semibold flex items-center justify-center gap-2 hover:bg-primary/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 pt-12 border-t border-border"
        >
          {[
            { label: 'Projects', value: '5+' },
            { label: 'Technologies', value: '15+' },
            { label: 'Years Learning', value: '3+' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-body text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
