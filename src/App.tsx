import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Brain, 
  Layout, 
  Instagram, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Menu, 
  X,
  ChevronDown,
  ExternalLink,
  Code,
  Sparkles
} from 'lucide-react';
import { BIO, PROJECTS, SERVICES, SKILLS, TAGLINES } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#f5f5f0]/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold tracking-tighter text-[#5A5A40]">KHUSHI.</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-[#FF6321] transition-colors uppercase tracking-widest">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-[#5A5A40]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#f5f5f0] border-t border-neutral-200 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-serif italic hover:text-[#FF6321]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <span className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4 block">BCA Student & Artist</span>
        <h1 className="text-7xl md:text-9xl font-serif font-light leading-tight mb-6">
          Khushi <span className="italic">Shilla</span>
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-serif italic text-neutral-600 mb-8">
            "{TAGLINES[0]}"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="bg-[#5A5A40] text-white px-8 py-3 rounded-full hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group">
              View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="border border-[#5A5A40] text-[#5A5A40] px-8 py-3 rounded-full hover:bg-[#5A5A40] hover:text-white transition-all">
              Let's Connect
            </a>
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#FF6321]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#5A5A40]/10 rounded-full blur-3xl" />
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/khushi-portrait/800/1000" 
              alt="Khushi" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#FF6321] p-8 rounded-full flex items-center justify-center text-white text-center leading-tight font-serif italic shadow-xl">
            "Creativity is intelligence having fun."
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8">About Me</h2>
          <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
            {BIO}
          </p>
          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
            My transition from medical studies to BCA has equipped me with a unique perspective—combining the precision and discipline of science with the logic and innovation of AI. When I'm not coding, you'll find me working with broken mirrors and glass, transforming fragments into cohesive art.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[#FF6321] font-bold text-3xl mb-1">BCA</h4>
              <p className="text-sm uppercase tracking-widest text-neutral-500">Specialization in AI & DS</p>
            </div>
            <div>
              <h4 className="text-[#FF6321] font-bold text-3xl mb-1">12th</h4>
              <p className="text-sm uppercase tracking-widest text-neutral-500">Medical Background</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = ['Technical', 'Creative', 'Soft'];
  
  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">My Expertise</h2>
          <p className="text-neutral-500 uppercase tracking-widest text-sm">Bridging the gap between logic and imagination</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((cat) => (
            <motion.div 
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#f5f5f0] rounded-full flex items-center justify-center text-[#5A5A40]">
                  {cat === 'Technical' ? <Code size={20} /> : cat === 'Creative' ? <Palette size={20} /> : <Sparkles size={20} />}
                </div>
                <h3 className="text-2xl font-serif">{cat}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS.filter(s => s.category === cat).map(skill => (
                  <span key={skill.name} className="px-4 py-2 bg-[#f5f5f0] text-[#5A5A40] rounded-full text-sm font-medium">
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState<'All' | 'Tech' | 'Art'>('All');
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Selected Works</h2>
            <p className="text-neutral-500">A showcase of my technical and creative journey</p>
          </div>
          <div className="flex gap-4 p-1 bg-[#f5f5f0] rounded-full">
            {['All', 'Tech', 'Art'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === f ? 'bg-[#5A5A40] text-white shadow-md' : 'text-neutral-500 hover:text-[#5A5A40]'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-3xl bg-[#f5f5f0] aspect-video"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="flex gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <a href="#" className="text-white flex items-center gap-2 text-sm font-bold hover:text-[#FF6321] transition-colors">
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Palette': return <Palette size={32} />;
      case 'Brain': return <Brain size={32} />;
      case 'Layout': return <Layout size={32} />;
      default: return <Sparkles size={32} />;
    }
  };

  return (
    <section id="services" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">How I Can Help</h2>
          <p className="text-neutral-500 uppercase tracking-widest text-sm">Freelance services & collaborations</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] text-center shadow-sm border border-neutral-100"
            >
              <div className="w-20 h-20 bg-[#f5f5f0] rounded-full flex items-center justify-center text-[#5A5A40] mx-auto mb-8">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
              <p className="text-neutral-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-[#5A5A40] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl md:text-6xl font-serif mb-8">Let's create something <span className="italic">extraordinary</span>.</h2>
          <p className="text-white/70 text-lg mb-12 max-w-md">
            Whether you have a data science project in mind or want a custom piece of art for your home, I'm always open to new opportunities and conversations.
          </p>
          
          <div className="space-y-6">
            <a href="mailto:khushishilla5@gmail.com" className="flex items-center gap-4 text-xl hover:text-[#FF6321] transition-colors">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <Mail size={20} />
              </div>
              khushishilla5@gmail.com
            </a>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF6321] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF6321] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 text-neutral-900">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-neutral-400">Name</label>
                <input type="text" className="w-full border-b border-neutral-200 py-2 focus:border-[#FF6321] outline-none transition-colors" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-neutral-400">Email</label>
                <input type="email" className="w-full border-b border-neutral-200 py-2 focus:border-[#FF6321] outline-none transition-colors" placeholder="your@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-neutral-400">Subject</label>
              <input type="text" className="w-full border-b border-neutral-200 py-2 focus:border-[#FF6321] outline-none transition-colors" placeholder="Project Inquiry" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-neutral-400">Message</label>
              <textarea rows={4} className="w-full border-b border-neutral-200 py-2 focus:border-[#FF6321] outline-none transition-colors resize-none" placeholder="Tell me about your vision..." />
            </div>
            <button className="w-full bg-[#FF6321] text-white py-4 rounded-full font-bold hover:bg-neutral-900 transition-all shadow-lg shadow-[#FF6321]/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-neutral-200 text-center bg-[#f5f5f0]">
      <p className="text-2xl font-serif font-bold tracking-tighter text-[#5A5A40] mb-4">KHUSHI.</p>
      <p className="text-neutral-500 text-sm uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Khushi Shilla. All rights reserved.
      </p>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-[#f5f5f0] min-h-screen selection:bg-[#FF6321] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

