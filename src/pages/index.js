import React from "react"
import tw from "twin.macro"
import github from "../images/github.svg"
import logo from "../images/logo.png"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Triangle from "../components/triangle"

const Wrapper = tw.div`
  flex items-center justify-center flex-col
`

const Heading = tw.h1`
  text-3xl text-black font-bold
`

const Text = tw.p`
  text-xl text-primaryDark font-semibold
`

const Footer = tw.footer`
  mt-6 text-center
`

const SmallIcon = tw.img`
  inline-block h-8
`
const Background = () => (
  <div>
    <Triangle
      color="#ea6227"
      height={['50vh', '30vh']}
      width={['75vw', '70vw']}
      invertY
    />

    <Triangle
      color="#3858d3"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      invertX
    />
  </div>
);

const IndexPage = () => (
  <Layout Background={Background}>
    <SEO title="Home" />
    <Wrapper>
      <img class="w-48" src={logo} alt="logo"/>
      <Heading>Ethan Cumming</Heading>
      <Text>Full Stack Web Developer </Text>
      <Footer>
        <a
          href="https://github.com/EthanNC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SmallIcon src={github} alt="Github Icon" />
        </a>
      </Footer>
    </Wrapper>

  </Layout>
)

export default IndexPage
