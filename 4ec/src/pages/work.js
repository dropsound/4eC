import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import inPagesLinks from "../links/in-pages-links"

const WorkPage = () => (
  <Layout>
    <h1>Work</h1>

    {inPagesLinks.map((linked, i) => (
          <React.Fragment key={linked.url}>
            <Link to={linked.url}>{linked.text}</Link>
            {i !== inPagesLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}

    <p>Raised by the 90's&nbsp;/Nirvana, Radiohead, Soundgarden/</p>
    <p>More than 20 years of experience in various digital media fields</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Work page" />

export default WorkPage
