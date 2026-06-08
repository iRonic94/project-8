import './Expertise.scss'

function Expertise() {
    return (
        <section id="expertise" className="expertise">
            <h2 className="expertise-title">
                My Expertise
            </h2>

            <div className="expertise-grid">
                <div className="expertise-card">
                    <h3>
                        <span className="highlight-pink">
                            Frontend
                        </span>
                    </h3>

                    <h4>
                        React, JavaScript
                    </h4>

                    <p>
                        Description goes here...
                    </p>
                </div>

                <div className="expertise-card">
                    <h3>
                        <span className="highlight-purple">
                            Backend
                        </span>
                    </h3>

                    <h4>
                        Node.js, Express
                    </h4>

                    <p>
                        Description goes here...
                    </p>
                </div>

                <div className="expertise-card">
                    <h3>
                        <span className="highlight-orange">
                            Tools
                        </span>
                    </h3>

                    <h4>
                        Git, GitHub
                    </h4>

                    <p>
                        Description goes here...
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Expertise;