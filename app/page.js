"use client"
import Introduction from "./components/Introduction"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Education from "./components/Education"
import { techList } from "@/techList"

export default function Home() {
  return (
    <div>
      <Navbar isHomepage={false}/>
      <Introduction />
      <About />
      <Projects />
      <Technologies techList={techList}/>
      <Experience />
      <Education />
    </div>
  )
}
