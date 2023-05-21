import * as React from "react"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <footer>
    © {new Date().getFullYear()} &middot; Built by
    {` `}
    <Link to="/" className="footer-link">dropSound</Link>
  </footer>
)

export default Footer
