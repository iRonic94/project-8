const PROJECTS_URL =
    `${import.meta.env.BASE_URL}data/projects.json`;
export async function getAllProjects() {
    try {
        const response = await fetch(PROJECTS_URL);

        if (!response.ok) {
            throw new Error('Failed to load projects');
        }

        return await response.json();
    } catch (error) {
        console.error('Error loading projects:', error);
        throw error;
    }
}