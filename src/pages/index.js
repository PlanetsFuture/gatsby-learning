// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p> "Im following Gatsby tutorial</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>
export const AboutPage = () => <title>About</title>
export default IndexPage

