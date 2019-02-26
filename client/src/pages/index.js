import React from 'react'

import Layout from '../components/shared/Layout'
import SEO from '../components/shared/seo'

import Nav from '../components/App/Nav'
import Home from '../components/App/Home'
import About from '../components/App/About'
import Events from '../components/App/Events'
import Footer from '../components/App/Footer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Nav />

    <Home />
    <About />
    <Events />

    <Footer />
  </Layout>
)

export default IndexPage
