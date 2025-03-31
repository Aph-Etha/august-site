// ProjectPage.js
import './ProjectPage.css';

export default function ProjectPage({ project }) {
  return (
    <div className="project-page-container">
      <header>
        <h1>{project}</h1>
      </header>
      <section>
        <p>Detailed information about {project}...</p>
        <img src={`/images/${project.toLowerCase().replace(' ', '')}.jpg`} alt={project} className="project-page-image" />
      </section>
    </div>
  );
}
