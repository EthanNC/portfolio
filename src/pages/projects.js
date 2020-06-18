import React from "react"
import Layout from "../components/layout"
import Triangle from "../components/triangle"
import tw, { styled } from "twin.macro"
import wayland from "../images/wayland.png"
import otg from "../images/otg.png"
import jdsutivan from "../images/jdsutivan.png"
import SEO from "../components/seo"

const Card = styled.div`
  position: relative;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  height: 100%;
  border-radius: 8px;
  ${tw`border-b-8 border-primary`}
`

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={["80vh", "80vh"]}
      width={["100vw", "100vw"]}
      invertX
    />

    <Triangle
      color="background"
      height={["50vh", "20vh"]}
      width={["50vw", "50vw"]}
      invertX
    />

    <Triangle
      color="primary"
      height={["25vh", "40vh"]}
      width={["75vw", "60vw"]}
      invertX
      invertY
    />
  </div>
)

const Subheading = tw.p`
mt-2 italic 
`
function Projects() {
  return (
    <Layout Background={Background}>
      <SEO title="Projects" />
      <section class="py-20">
        <div class="max-w-5xl px-6 mx-auto text-center">
          <h2 class="text-4xl font-semibold text-white">Projects</h2>

          <div class="flex items-center justify-center mt-10">
            <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <div class="flex items-center justify-center h-56 bg-white overflow-hidden">
                  <img
                    class="object-cover h-auto"
                    src={wayland}
                    alt="waylandbio"
                  />
                </div>

                <a
                href="https://www.waylandbio.com/"
                target="_blank"
                rel="noopener noreferrer"
                class=" bg-white block border-t-4 border-primary overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  <div class="py-2 px-3 text-center text-sm">
                    <p>
                        Novel Therapeutics for Covid-19 and Cancer 
                    </p>
                    <Subheading>
                        Gatsby + Tailwind
                    </Subheading>

                    <span class="block text-gray-600 mt-2">
                        waylandbio.com
                    </span>
                  </div>
                </a>
              </Card>

              <Card>
                <div class="flex items-center justify-center h-56 bg-white overflow-hidden">
                  <img
                    class="object-cover w-1/3"
                    src={otg}
                    alt=""
                  />
                </div>

                <a
                href="https://onthegears.com/"
                target="_blank"
                rel="noopener noreferrer"
                class=" bg-white block border-t-4 border-primary  overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  <div class="py-2 px-3 text-center text-sm">
                    <p>
                      A platform to share images of gaming gear.
                    </p>
                    <p class="mt-2 italic">
                      React + Redux + Firebase
                    </p>

                    <span class="block text-gray-600 mt-2">
                        onthegears.com
                    </span>
                  </div>
                </a>
              </Card>

              <Card>
                <div class="flex items-center justify-center h-56 bg-white overflow-hidden">
                  <img
                    class="object-cover w-1/2"
                    src={jdsutivan}
                    alt=""
                  />
                </div>

                <a
                href="https://sharp-sinoussi-a2c08f.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class=" bg-white block border-t-4 border-primary  overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
                >
                  <div class="py-2 px-3 text-center text-sm">
                    <p>
                    A construction company specialized in framing
                    </p>
                    <Subheading>
                        Gatsby + Tailwind 
                    </Subheading>

                    <span class="block text-gray-600 mt-2">
                        jdsutivan.com
                    </span>
                  </div>
                </a>
              </Card>
              <div class="flex items-center justify-center mt-12">
                <a
                  class="flex items-center text-black hover:underline hover:text-secondary font-semibold bg-white px-2"
                  href="https://github.com/EthanNC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View More On Github</span>

                  <svg
                    class="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Projects
