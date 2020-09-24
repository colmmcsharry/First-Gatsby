import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"


export default function About() {
  return (
    <div style={{ color: `teal` }}>
    <Link to="/contact/">Contact</Link>
      <Header headerText="About Colm's Site" />
      <Header headerText="It's pretty cool" />
      <p>Such wow. Very React.</p>
    </div>
  )
}