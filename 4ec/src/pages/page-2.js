import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <p>Raised by the 90's&nbsp;/Nirvana, Radiohead, Soundgarden/</p>
    <p>More than 20 years of experience in various digital media fields</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="About page" />

export default AboutPage
