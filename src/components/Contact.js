import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <header>
        <motion.h1
          className="contact-header"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Contact
        </motion.h1>
      </header>
      <section>
        <motion.p
          className="contact-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          If you’re interested in working, please don’t hesitate to reach out through Email or Instagram!
        </motion.p>
        <motion.p
          className="contact-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Email: august@example.com
        </motion.p>
        <motion.p
          className="contact-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          Phone: (123) 456-7890
        </motion.p>
        <motion.p
          className="contact-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Instagram: I'll come back to this stuff later lol
        </motion.p>
        <motion.button
          className="contact-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get in Touch
        </motion.button>
      </section>
    </div>
  );
}
