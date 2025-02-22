
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Faq from './components/Faq'
import Section from './components/Section'
import Roadmap from './components/Roadmap'
import Enroll from './components/Enroll'
import Reward from './components/Reward'
import Partner from './components/Partner'
function App() {


  return (
    <div className='w-full h-auto flex flex-col overflow-scroll no-scrollbar items-center'> 
      <Hero />
      <Partner />
      <Roadmap />
      <Enroll />
      <Section />
      <Reward />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
