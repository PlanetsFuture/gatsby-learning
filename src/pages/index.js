// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p> "Im following Gatsby tutorial</p>
      <StaticImage
        alt="Clifford, a reddish-brown potbull"
        src="../images/coffee1.jpg"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
export const AboutPage = () => <title>About</title>
export default IndexPage

