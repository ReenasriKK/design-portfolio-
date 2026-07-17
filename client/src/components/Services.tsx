import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    description:
      'Building responsive, performant web applications using modern frameworks like React and Next.js with clean, maintainable code.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Website Development',
    description:
      'Creating websites that work flawlessly across all devices and screen sizes, ensuring optimal user experience everywhere.',
  },
  {
    icon: Palette,
    title: 'Landing Page Design',
    description:
      'Designing and developing high-converting landing pages that capture attention and drive user engagement and conversions.',
  },
  {
    icon: Palette,
    title: 'Portfolio Website Design',
    description:
      'Creating stunning portfolio websites that showcase your work and leave a lasting impression on potential clients and employers.',
  },
  {
    icon: Zap,
    title: 'UI Design',
    description:
      'Designing intuitive, beautiful user interfaces that are both visually appealing and highly functional for end users.',
  },
  {
    icon: Code,
    title: 'Interactive Components',
    description:
      'Building custom, interactive UI components with smooth animations and micro-interactions that delight users.',
  },
];

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
      id="services"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Services I Offer
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
            <p className="text-lg font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              Comprehensive web development and design services tailored to bring your vision to life.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group p-8 rounded-xl bg-secondary/50 border border-border hover:border-primary transition-all duration-300 card-shine"
                  whileHover={{ y: -8 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
