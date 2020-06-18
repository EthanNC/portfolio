/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {styled} from "twin.macro"
import Header from "./header"
import { ThemeProvider } from 'emotion-theming'
import colors from '../../colors';

const DefaultBackground = () => <div />;

const theme = {
  colors,
  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
};

const Layout = ({ children, Background=DefaultBackground }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Wrapper=styled.div`
    min-height: 100vh;
    min-width: 320px;
    max-width: 1366px;
    display: flex;
    margin: auto;
    flex: 0 1 auto;
    flex-direction: column;
    justify-content: center;
    padding: 5em 1em;
    scroll-behavior: smooth;
    @media (max-width: 400px) {
      padding: 2em 1em;
    }
`;



  return (
    <>
    <ThemeProvider theme={theme}>
            <Header siteTitle={data.site.siteMetadata.title} />
      <Background/>
      <Wrapper>
        {children}
      </Wrapper>
      {/* <footer>
          © {new Date().getFullYear()} Ethan Cumming -  Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
    </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
