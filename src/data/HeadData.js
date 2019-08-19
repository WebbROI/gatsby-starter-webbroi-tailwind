import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const HeadData = ({ title, description, image, pathname, article, isHome }) => (
  <StaticQuery
    query={query}
    render={
      ({
        site: {
          siteMetadata: {
            defaultTitle,
            titleTemplate,
            defaultDescription,
            siteUrl,
            defaultImage,
          }
        }
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: `${siteUrl}${image || defaultImage}`,
          url: `${siteUrl}${pathname || '/'}`,
        }
  
        return (
          <Helmet title={seo.title} titleTemplate={isHome ? null : titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}

            <script type="application/ld+json">
              {`
                {
                  "@context" : "http://schema.org",
                  "@type" : "LocalBusiness",
                  "name" : "Project Name",
                  "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
                  "telephone" : "123-456-7890",
                  "email" : "jon@snow.com",
                  "address" : {
                    "@type" : "PostalAddress",
                    "streetAddress" : "1234 Acme Ave., Suite 101",
                    "addressLocality" : "Irvine",
                    "addressRegion" : "CA",
                    "postalCode" : "92606"
                  },
                  "image" : "${seo.image}",
                  "priceRange" : "$$$"
                }
              `}
            </script>
          </Helmet>
        )
      }
    }
  />
)

export default HeadData

HeadData.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

HeadData.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query HeadDataQuery {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
      }
    }
  }
`