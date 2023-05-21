import * as React from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import links from "../links/links"
import moreLinks from "../links/more-links"

import mainImage from "../images/MarkoS-croped.jpg"
import signature from "../images/signature.svg"

//import workNames from "../scripting/scripting"


const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`


const IndexPage = () => (
  <Layout>
    <div className="main-headers">
    {/* <StaticImage
        src="../images/MarkoS-croped.jpg"
        loading="eager"
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="Mouth full open"
      /> */}

        <img src={mainImage} alt="multiMediaCreator" className="main-header-image"></img>

      <div className="main-header-text">
        <div className="variable-text">addfasd</div>
        <div className="signature">
          <img src={signature} alt="signature" className="signature"></img>
        </div>
        <div className="fixed-text">
          <h4>I am</h4>
          <Link to="./page-2.js">
            <h1 className="main-activity">multiMediaCreator</h1>
          </Link>
        </div>
      </div>
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
