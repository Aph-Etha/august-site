import { motion } from 'framer-motion';
import './Portfolio.css';
import aigaGIF from '../assets/images/aiga.gif';
import cypherGIF from '../assets/images/pokemon-cypher-2024.gif';
import twistGIF from '../assets/images/twist-turn.gif';

const projects = [
  { title: '01 - AIGA KC', description: 'A bold event specific motion identity designed for AIGA’s event “SHOW US YOUR BOOK” with Lauren Ranke.', image: aigaGIF },
  { title: '02 - POKEMON CYPHER 2024', description: 'A large pillar of the online Pokemon and Nerdcore fandoms, the Pokemon Cypher’s have been entertaining fans for over a decade.', image: cypherGIF },
  { title: '03 - TWIST & TURN', description: 'My twist on a pretzel restaurant & bar.\n\nThe product of a school project in which were were tasked to create a restaurant concept and brand it.', image: twistGIF },
];

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <section className="hero-section">
        <motion.h2 
          className="hero-title"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
        >
          Creating Brands, Motion, Typography & Experiences
        </motion.h2>
        <motion.p 
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Midwest Designer Based in Lawerence, Kansas
        </motion.p>
      </section>

      <section id="projects" className="projects-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <motion.h3 
                className="project-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {project.title}
              </motion.h3>
              <p className="project-description">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
