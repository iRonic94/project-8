import './App.css'
import Hero from './sections/Hero/Hero'
import Expertise from './sections/Expertise/Expertise'
import Projects from './sections/Projects/Projects'
import Navigation from './components/Navigation';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {

  return (
    <>
      <Navigation />
      <Hero />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
