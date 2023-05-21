import * as React from "react"
import { Link } from "gatsby"
import samplePageLinks from "../links/pages-links"
import MobileNav from "./mobile-nav"

const Header = ({ siteTitle }) => (
  <header>
    <Link
      to="/" className="header-link">
      {siteTitle}
    </Link>
    {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 }
          </React.Fragment>
        ))}

    <MobileNav className="mobile-navigation"></MobileNav>
  </header>
)

export default Header
