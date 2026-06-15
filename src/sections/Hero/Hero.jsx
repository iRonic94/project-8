import './Hero.scss';

function Hero() {

    return (
        <section id="hero" className="hero">
            <div className="hero-logo">
                <img src="https://ironic94.github.io/project-8/assets/logowhite.png" alt="Logo" />
            </div>
            <div className="hero-content">
                <h1 className="hero-name">
                    C.Mario-Daniel
                </h1>
                <h2 className="hero-title">
                    {'>'} FULL-STACK DEVELOPER<span className="hero-cursor">_</span>
                </h2>
                <div className="hero-tech-stack">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">HTML5</span>
                    <span className="tech-tag">CSS3</span>
                    <span className="tech-tag">Vite</span>

                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Express</span>

                </div>
            </div>
        </section >
    );
}

export default Hero;
