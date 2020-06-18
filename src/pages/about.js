import React from "react"
import Layout from "../components/layout"
import Triangle from "../components/triangle"
import tw from "twin.macro"
import rlogo from "../images/react.png"
import {Link} from "gatsby"
import SEO from "../components/seo"

const Background = () => (
  <div>
    <Triangle
      color="primary"
      height={["15vh", "10vh"]}
      width={["100vw", "100vw"]}
      invertX
    />

    <Triangle
      color="secondary"
      height={["50vh", "40vh"]}
      width={["70vw", "40vw"]}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={["40vh", "15vh"]}
      width={["100vw", "100vw"]}
      invertX
      invertY
    />
  </div>
)

const Text = tw.div`
    font-bold text-primaryDark
`

const Lnk = tw.a`
    font-semibold hover:underline hover:text-secondary font-semibold 
`

const About = () => {
  return (
    <Layout Background={Background}>
      <SEO title="About" />
      <h2 class="text-4xl font-semibold text-white bg-primary pl-2">
        About Me
      </h2>
      <div class="container mx-auto mb-20 p-8 leading-loose antialiased bg-white md:max-w-3xl">
      <img src={rlogo} alt="react" class="w-32 float-right" />
        <p>
        I graduated with a Bachelor's Degree in Computer Science from the <Text> University of Massachusetts Lowell.</Text>
        </p>
        <p>
        During my last semester at UMass, I started Harvard’s CS50 React course. <Text>I instantly fell in love with React.</Text> 
        </p>
        <p>
        Soon after finishing the course, I started working on my first web app <Lnk href="https://onthegears.com/">OnTheGears</Lnk>. I learned to manage global state and how to abstract my UI components.
        </p>
        <p>I continue my pursuit of React knowledge by exploring its new features (Hooks) and the frameworks in the React ecosystem.</p>

        <div class="flex items-center justify-end">
            <Lnk>
                <Link to="/projects">View My Work</Link>
            </Lnk>
        </div>
      </div>
    </Layout>
  )
}

export default About
