import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <header>
        <motion.h1 
          className="about-header"
          initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          HEY, I'M AUGUST OPPEAU!
        </motion.h1>
      </header>
      <section>
        <motion.p
          className="about-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
            I’m a mid-western graphic designer who loves to create fun brands full of energy and personality! My passions lie in dynamic typography, bold branding, & motion graphics; I’d love to join you on your mission!
        </motion.p>
        <motion.p
          className="about-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          I’ve obsessed over design for around seven years now, as I started my journey in eighth grade! I’m currently working towards my BFA in Visual Communication Design at the University of Kansas ROCK CHALK
        </motion.p>
      </section>
    </div>
  );
}
