import './Expertise.scss'

function Expertise() {
    return (
        <section id="expertise" className="expertise">
            <h1 className="expertise-title">
                My Expertise
            </h1>
            <div className="expertise-grid">
                <div className="expertise-card">
                    <div className="expertise-subtitle">
                        <img className="icons" src="https://cdn.simpleicons.org/react/FFFFFF" alt="React" />
                        <h2>
                            <span className="highlight-pink">
                                Frontend
                            </span>
                        </h2>
                    </div>
                    <h3>
                        I have used JavaScript, TypeScript and ES6 in the past, and now I am working with React.
                        I'm trying to improve day by day, constantly finding new ways to become a better developer with the help of modern frameworks.
                    </h3>
                </div>
                <div className="expertise-card">
                    <div className="expertise-subtitle">
                        <img className="icons"
                            src="https://cdn.simpleicons.org/nodedotjs/FFFFFF" alt="nodedotjs" />
                        <h2>
                            <span className="highlight-blue">
                                Backend
                            </span>
                        </h2>
                    </div>
                    <h3>
                        I have been working with Servoy for several years, building business applications and working with PostgreSQL databases using SQL and Servoy's built-in tools.
                        Recently, I started learning Node.js and the Express framework. It has been interesting to explore new technologies and different ways of building applications.</h3>
                </div>
                <div className="expertise-card">
                    <div className="expertise-subtitle">
                        <img className="icons" src="https://cdn.simpleicons.org/css/FFFFFF" alt="nodedotjs" />
                        <h2>
                            <span className="highlight-orange">
                                Web design
                            </span>
                        </h2>
                    </div>
                    <h3>
                        I enjoy building user interfaces that are both functional and easy to use. Design is an area where I push myself to improve, using tools such as CSS, SCSS, LESS and more recently Figma.
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default Expertise;