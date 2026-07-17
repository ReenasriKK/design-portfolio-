import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

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

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ReenasriKK',
      color: 'hover:text-foreground',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/reenasri-kumar-72a523321/',
      color: 'hover:text-primary',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:reenavenikumar@gmail.com',
      color: 'hover:text-accent',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
            <p className="text-lg font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Location */}
              <motion.div
                className="flex gap-4 p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">
                    Location
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Tamil Nadu, India
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.a
                href="mailto:reenavenikumar@gmail.com"
                className="flex gap-4 p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">
                    Email
                  </h3>
                  <p className="font-body text-muted-foreground hover:text-primary transition-colors">
                    reenavenikumar@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h3 className="font-display font-bold text-foreground mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className={`w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        title={social.label}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-xl bg-secondary/50 border border-border space-y-6"
              >
                {/* Name Field */}
                <div>
                  <label className="block font-body font-semibold text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block font-body font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block font-body font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-accent font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 magnetic-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitted}
                >
                  {submitted ? (
                    <>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
