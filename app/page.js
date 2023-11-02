"use client"
import Introduction from "./components/Introduction"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar isHomepage={true}/>
      <Introduction />
    </div>
  )
}
