import { useEffect, useState } from 'react';
import './styles/navigation.scss';

function Navigation() {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="section-nav">

            <a
                href="#hero"
                className={`nav-item ${activeSection === 'hero' ? 'active' : ''}`}
            >
                <span className="dot"></span>
            </a>

            <a
                href="#expertise"
                className={`nav-item ${activeSection === 'expertise' ? 'active' : ''}`}
            >
                <span className="dot"></span>
            </a>

            <a
                href="#projects"
                className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
            >
                <span className="dot"></span>
            </a>

        </nav>
    );
}

export default Navigation;