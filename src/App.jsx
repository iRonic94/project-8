import './App.css'
import Hero from './sections/Hero/Hero'
import Expertise from './sections/Expertise/Expertise'
import Projects from './sections/Projects/Projects'
import Navigation from './components/Navigation';

function App() {

  return (
    <>
      <Navigation />
      <Hero />
      <Expertise />
      <Projects />

    </>
  )
}

export default App
