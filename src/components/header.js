import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import tw from "twin.macro"

const NavItem = tw.li`
  mr-3 flex-1 block pt-4 font-semibold text-center text-black hover:text-secondary

`

const Header = ({ siteTitle }) => (
  <div class="w-full shadow-lg shadow-inner lg:shadow-xl lg:w-1/12 bg-white lg:bg-white px-4 text-center fixed bottom-0 lg:pt-8 lg:top-0 lg:left-0 h-16 lg:h-screen z-50">
  <div class="lg:h-auto px-6">
     <ul class="flex flex-row lg:flex-col text-center lg:text-left">
        <NavItem>
           <Link to="/" activeClassName="text-primary border-b-4 border-primary">
           Home
           </Link>
        </NavItem>
        <NavItem>
           <Link to="/about" activeClassName="text-primary border-b-4 border-primary" >
           About
           </Link>
        </NavItem>
        <NavItem >
           <Link to="/projects" activeClassName="text-primary border-b-4 border-primary">
           Projects
           </Link>
        </NavItem>
     </ul>
  </div>
</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
