import { useEffect, useState } from 'react';
import { getAllProjects } from '../../api/api';
import '../Projects/Projects.scss';
import Gallery from '../../components/Gallery';
import Filter from '../../components/Filter';
import Modal from '../Modal/Modal';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    useEffect(() => {
        async function loadProjects() {
            const data = await getAllProjects();
            setProjects(data);
        }

        loadProjects();
    }, []);

    const filteredProjects =
        selectedCategory === 'all'
            ? projects
            : projects.filter(
                project => project.category === selectedCategory
            );

    return (
        <section id="projects" className="projects">
            <h1 className="section-title">
                Projects
            </h1>
            <Filter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
            <Gallery projects={filteredProjects} onProjectClick={setSelectedProject} />
            {selectedProject && (
                <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </section>
    )

}

export default Projects;