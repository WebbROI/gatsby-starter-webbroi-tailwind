import React from 'react'
import { graphql, StaticQuery } from "gatsby"

const FooterNav = () => (
  <StaticQuery 
    query={query}
    render={
      data => {
        const siteTitle = data.site.siteMetadata.title

        return (
          <footer className='bg-black text-white text-center px-4 py-16'>
            © {new Date().getFullYear()} {siteTitle}
          </footer>
        )
      }
    }
  />
)

export default FooterNav

const query = graphql`
  query FooterNavQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`