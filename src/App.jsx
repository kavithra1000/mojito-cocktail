import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'

gsap.registerPlugin(ScrollTrigger, SplitText)
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails/>
      <About/>
      <Menu/>
      <Contact/>
    </main>
  )
}

export default App