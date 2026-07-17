import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 1,
    title: 'AI Resume Analyzer',
    description:
      'An AI-powered web application that analyzes resumes, calculates ATS score, identifies missing keywords, and provides suggestions for improvement.',
    tech: ['React', 'Python', 'Flask', 'spaCy'],
    link: '#',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Attendance Analysis Agent',
    description:
      'A smart attendance dashboard that predicts eligibility, analyzes attendance trends, and provides insights using AI.',
    tech: ['React', 'Node', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'IoT Smart Ambulance System',
    description:
      'An IoT-based smart ambulance traffic management system that reduces emergency response time using intelligent signal control.',
    tech: ['Arduino', 'IoT', 'Embedded Systems'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Personal Finance Tracker',
    description:
      'A responsive finance management web application that helps users monitor income, expenses, savings, and financial goals.',
    tech: ['React', 'Node', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'A premium animated portfolio built using React, Next.js, GSAP, Framer Motion, and Three.js with stunning visual effects.',
    tech: ['React', 'Next.js', 'GSAP', 'Framer Motion', 'Three.js'],
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

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
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            <p className="text-lg font-body text-muted-foreground mt-4 max-w-2xl">
              A selection of projects that showcase my skills in frontend development, UI design, and problem-solving.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`group relative rounded-xl overflow-hidden border border-border bg-secondary/50 hover:border-primary transition-all duration-300 card-shine ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                whileHover={{ y: -8 }}
              >
                {/* Card Content */}
                <div className="p-6 h-full flex flex-col">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary font-accent text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <motion.a
                      href={project.link}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-accent text-sm font-semibold transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      View
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-primary/30 text-foreground hover:border-primary hover:bg-primary/5 font-accent text-sm font-semibold transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
