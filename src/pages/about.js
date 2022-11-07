import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>I'm learning Gatsby</p>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>
export default AboutPage