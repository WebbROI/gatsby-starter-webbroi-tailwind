import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const TwoColumnTextImageLayout = ({ textTitle, textContent, imageData, rowReverse, withButton, buttonLink }) => (
  <StaticQuery 
    query={query}
    render={
      data => {
        const imageDataDefault = data.imageDefault.childImageSharp.fluid

        return (
          <div className={`flex sm:flex-col sm:flex-col-reverse ${rowReverse ? 'lg:flex-row-reverse' : null} mb-16`}>
            <div className='sm:w-full lg:w-1/2 flex flex-col justify-center'>
              <h2 className='font-display text-4xl'>{textTitle}</h2>
              <p>{textContent}</p>

              {withButton
                ?
                  <Link to={buttonLink ? buttonLink : '/'}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4">
                      Button
                    </button>
                  </Link>
                :
                  null
              }
            </div>

            <div className={`sm:w-full sm:mt-4 lg:w-1/2 ${rowReverse ? 'lg:ml-0 lg:mr-8' : 'lg:ml-8 lg:mr-0'}`}>
              <Img className='z-0' fluid={imageData ? imageData : imageDataDefault} alt='image' />
            </div>
          </div>
        )
      }
    }
  />    
)

TwoColumnTextImageLayout.propTypes = {
  textTitle: PropTypes.string,
  textContent: PropTypes.string,
  imageData: PropTypes.object,
  rowReverse: PropTypes.bool,
  withButton: PropTypes.bool,
  buttonLink: PropTypes.string,
}

export default TwoColumnTextImageLayout

const query = graphql`
  query TwoColumnTextImageLayoutQuery {
    imageDefault: file(relativePath: { eq: "sample/sample-image-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`