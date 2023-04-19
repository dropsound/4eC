import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import links from "../links/links"
import moreLinks from "../links/more-links"


const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className="textCenter">
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
      />
      <h4>I am</h4>
      <Link to="./page-2.js">
        <h1 className="main-activity">multiMediaCreator</h1>
      </Link>
      <h2 className="name">markoStojković</h2>
    </div>
    <ul className="list">
      {links.map(link => (
        <li key={link.url} className="listItem">
          <a
            className="listItemLink" 
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className="listItemDescription">{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
