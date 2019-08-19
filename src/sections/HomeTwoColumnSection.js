import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import TwoColumnTextImageLayout from '../layouts/TwoColumnTextImageLayout'

const HomeTwoColumnsSection = () => (
  <StaticQuery 
    query={query}
    render={
      data => {
        const imageDataOne = data.imageOne.childImageSharp.fluid
        const imageDataTwo = data.imageTwo.childImageSharp.fluid
        const imageDataThree = data.imageThree.childImageSharp.fluid

        return (
          <div className='sm:w-11/12 sm:my-4 lg:w-10/12 lg:my-16 mx-auto'>
            <TwoColumnTextImageLayout 
              textTitle='Lorem Ipsum'
              textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut ultricies dolor. Proin interdum lorem ipsum, vel volutpat velit ultricies et.'
              imageData={imageDataOne}
              withButton
            />

            <TwoColumnTextImageLayout 
              textTitle='Lorem Ipsum'
              textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut ultricies dolor. Proin interdum lorem ipsum, vel volutpat velit ultricies et.'
              imageData={imageDataTwo}
              rowReverse
              withButton
            />

            <TwoColumnTextImageLayout 
              textTitle='Lorem Ipsum'
              textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut ultricies dolor. Proin interdum lorem ipsum, vel volutpat velit ultricies et.'
              imageData={imageDataThree}
              withButton
            />
          </div>
        )
      }
    }
  />    
)

export default HomeTwoColumnsSection

const query = graphql`
  query HomeTwoColumnsSectionQuery {
    imageOne: file(relativePath: { eq: "sample/sample-image-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageTwo: file(relativePath: { eq: "sample/sample-image-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imageThree: file(relativePath: { eq: "sample/sample-image-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`