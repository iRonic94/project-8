import './styles/gallery.scss';

function Gallery({ projects, onProjectClick }) {
    return (
        <div className="projects-grid">
            {projects.map(project => (
                <div
                    key={project.id}
                    className="project-card"
                    onClick={() => onProjectClick(project)}
                >
                    <img
                        src={project.gallery[0]}
                        alt={project.title}
                        className="project-preview"
                    />

                    <div className="project-info">

                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-logo"
                        />

                        <p className="project-technologies">
                            {project.technologies.join(', ')}
                        </p>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default Gallery;