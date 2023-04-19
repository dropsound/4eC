import * as React from "react"
import { Link } from "gatsby"
import samplePageLinks from "../links/pages-links"

const Header = ({ siteTitle }) => (
  <header>
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <img
      alt="Logo"
      height={20}
      style={{ margin: 0 }}
    />
    {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
  </header>
)

export default Header
