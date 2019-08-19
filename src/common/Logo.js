import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Logo = () => (
  <StaticQuery 
    query={query}
    render={
      data => {
        const imageData = data.logo.childImageSharp.fluid
        return (
          <Img fluid={imageData} alt='logo' />
        )
      }
    }
  />
)

export default Logo

const query = graphql`
  query LogoQuery {
    logo: file(relativePath: { eq: "header/webbroi-dev-logo-full-new.png" }) {
      childImageSharp {
        fluid(maxWidth: 1460) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`