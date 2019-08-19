// This starter uses TailwindCSS for styling. However, this component is using custom css style which you can find under site.css

import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const PageHeaderImageBg = ({ children, imageData, className }) => (
  <StaticQuery 
    query={query}
    render={
      data => {
        const imageDataDefault = data.imageBg.childImageSharp.fluid

        return (
          <BackgroundImage
            className={className}
            fluid={ imageData ? imageData : imageDataDefault }
            backgroundColor={`#040e18`}
          >
            {children}
          </BackgroundImage>
        )
      }
    }
  />
)

PageHeaderImageBg.propTypes = {
  children: PropTypes.node,
  imageData: PropTypes.object,
  className: PropTypes.string,
}

const StyledPageHeaderImageBg = styled(PageHeaderImageBg)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
`

export default StyledPageHeaderImageBg

const query = graphql`
  query PageHeaderImageBg {
    imageBg: file(relativePath: { eq: "header/home-header-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`