import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Donald J. Trump"
        src="https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/608x608/products/191289/874382/222673-1024__28296.1694179037.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage