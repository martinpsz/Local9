import React from "react"
import '../style.css'
import Seo from "../components/seo"
import Banner from "../components/Banner/banner"
import Navbar from "../components/Navbar/navbar"
import Header from "../components/Header/header"
import About from "../components/About/about"
import Upcoming from "../components/Upcoming/upcoming"
import Join from "../components/Join/join"
import Footer from "../components/Footer/footer"

export default function Home() {
  return (
    <>
      <Seo/>
      <Banner/>
      <Navbar/>
      <Header/>
      <About />
      <Upcoming />
      <Join />
      <Footer/>
    </>
  )
}
