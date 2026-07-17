import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                I'm a passionate Frontend Developer and UI/UX enthusiast from Tamil Nadu, India. My journey in web development began with a curiosity about how things work on the internet, and it has evolved into a deep commitment to creating beautiful, functional digital experiences.
              </p>

              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                I believe that great design and solid code go hand in hand. I love combining creativity with technology to build responsive, user-friendly, and visually stunning web applications. Every project is an opportunity to solve real-world problems and create something meaningful.
              </p>

              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                Currently pursuing my Bachelor of Engineering in Computer and Communication Engineering from V.S.B Engineering College, Karur. I continuously learn new technologies and improve my problem-solving skills through coding practice and personal projects.
              </p>

              {/* Education Badge */}
              <motion.div
                className="inline-block p-4 rounded-lg bg-secondary border border-border neon-border"
                whileHover={{ scale: 1.05 }}
              >
                <div className="font-accent text-sm text-primary font-semibold mb-1">
                  EDUCATION
                </div>
                <div className="font-body text-foreground">
                  B.E. Computer and Communication Engineering
                </div>
                <div className="font-body text-sm text-muted-foreground">
                  V.S.B Engineering College, Karur • Expected 2027
                </div>
                <div className="font-body text-sm text-primary mt-2">
                  CGPA: 8+
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats & Goals */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Goal Card */}
              <motion.div
                className="p-8 rounded-xl bg-secondary border border-border card-shine hover:border-primary transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Career Goal
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Become a Creative Frontend Developer who builds visually stunning, highly interactive web applications and eventually work in international companies.
                </p>
              </motion.div>

              {/* Expertise Areas */}
              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Core Expertise
                </h3>
                {[
                  'Responsive Web Design',
                  'Interactive UI Components',
                  'Modern Frontend Frameworks',
                  'User Experience Design',
                ].map((expertise, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 } as any}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-body text-foreground">{expertise}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
