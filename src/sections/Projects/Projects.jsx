import { useEffect, useState } from 'react';
import { getProjects } from '../../api/AllProjects';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function loadProjects() {
            const data = await getProjects();
            setProjects(data);
        }
        loadProjects();


    }, []);
    return (
        < div className="projects-grid" >
            {
                projects.map(project => (
                    <div className="project-card" key={project.id}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />

                        <div className="project-content">
                            <h3 className="project-title">
                                {project.title}
                            </h3>

                            <p className="project-technologies">
                                {project.technologies.join(' / ')}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div >
    )

}

export default Projects;