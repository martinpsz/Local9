import React from "react"
import '../style.css'
import Seo from "../components/seo"
import NotificationBar from "../components/NotificationBar/NotificationBar"
import Navbar from "../components/NavBar/NavBar"


export default function Home() {
  return (
    <>
      <Seo />
      <NotificationBar><p>Welcome to the UPTE Local 9 website</p></NotificationBar>
      <Navbar/>
    </>
  )
}
