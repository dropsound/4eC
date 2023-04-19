import * as React from "react"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
    <footer
    style={{
      marginTop: `var(--space-5)`,
      fontSize: `var(--font-sm)`,
    }}
  >
    © {new Date().getFullYear()} &middot; Built by
    {` `}
    <Link to="/">MarkoS</Link>
  </footer>
)

export default Footer
