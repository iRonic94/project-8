import './Hero.scss';
import logo from '../../../src/assets/logowhite.png'

function Hero() {

    return (
        <section id="hero" className="hero">
            <div className="hero-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="hero-content">
                <h1 className="hero-name">
                    Craciun Mario-Daniel
                </h1>

                <h2 className="hero-title">
                    {'>'} FULL-STACK DEVELOPER<span className="hero-cursor">_</span>
                </h2>
            </div>
        </section>
    );
}

export default Hero;
