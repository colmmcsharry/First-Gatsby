import React from "react"
import Layout from "../components/layout"
import julian from './julian.jpg'

export default function Home() {
  console.log(julian)
  return (
  	<React.Fragment>
    <Layout>

      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <img src={julian}  alt="julianpic"></img>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </Layout>


</React.Fragment>
  );
}