import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'

const MobileMenuList = ({ close }) => (
  <StaticQuery 
    query={query}
    render={
      data => {
        const mainMenuLinksData = data.site.siteMetadata.mainMenuLinks

        return (
          <div className='w-full flex flex-col p-0'>
            {mainMenuLinksData.map((item) => {
              return <Link to={item.link} onClick={close} key={item.id} className='text-3xl'>{item.name}</Link>
            })}

            <Link to='/contact'>
              <button className="bg-blue-500 hover:bg-blue-700 w-full text-white text-3xl mt-6 py-2 px-4">
                Contact
              </button>
            </Link>  
          </div>
        )
      }
    }
  />
)

export default MobileMenuList

const query = graphql`
  query MobileMenuListQuery {
    site {
      siteMetadata {
        mainMenuLinks {
          id
          name
          link
        }
      }
    }
  }
`