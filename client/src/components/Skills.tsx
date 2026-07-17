import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'React', 'Next.js'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
  {
    category: 'Other',
    skills: ['Responsive Design', 'UI Design', 'REST APIs', 'DSA', 'OOP', 'Problem Solving'],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="skills"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            <p className="text-lg font-body text-muted-foreground mt-4 max-w-2xl">
              A comprehensive toolkit of technologies and methodologies I use to build exceptional web experiences.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary transition-all duration-300 card-shine"
                whileHover={{ y: -4 }}
              >
                {/* Category Title */}
                <h3 className="font-display text-lg font-bold text-primary mb-6">
                  {category.category}
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.5,
                      } as any}
                      className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-accent text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              Achievements & Certifications
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'NPTEL Data Structures and Algorithms Certification',
                  icon: '🏆',
                },
                {
                  title: 'Consistent Coding Practice & Problem Solving',
                  icon: '💻',
                },
                {
                  title: 'Active GitHub Contributions',
                  icon: '🚀',
                },
                {
                  title: 'College Technical Activities & Volunteer Work',
                  icon: '🤝',
                },
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary transition-all duration-300 flex items-start gap-4"
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 } as any}
                >
                  <span className="text-3xl">{achievement.icon}</span>
                  <p className="font-body text-foreground">{achievement.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
