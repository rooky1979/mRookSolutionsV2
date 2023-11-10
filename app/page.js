"use client"
import Introduction from "./components/Introduction"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

export default function Home() {
  return (
    <div>
      <Navbar isHomepage={false}/>
      <Introduction />
      <About />
      <Projects />
    </div>
  )
}
