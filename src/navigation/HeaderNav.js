// This HeaderNav component uses a design on homepage with the top navigation as transparent and on top of the header background. And on inner pages, the top navigation is found on top with white background.

import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery, Link } from 'gatsby'
import Logo from '../common/Logo'

const HeaderNav = ({ isHome }) => (
  <StaticQuery 
    query={query}
    render={
      data => {
        const mainMenuLinksData = data.site.siteMetadata.mainMenuLinks

        return (
          <nav className={
            isHome 
              ?
                "absolute top-0 left-auto right-auto sm:w-full md:w-full lg:w-11/12 flex items-center justify-between flex-wrap bg-transparent px-4 py-5"
              :
                "mx-auto sm:w-full md:w-full lg:w-11/12 flex items-center justify-between flex-wrap bg-white px-4 py-5"
            }
          >

            <div className='w-40 mr-6'>
              <Link to='/'>
                <Logo />
              </Link>
            </div>

            <div className="sm:hidden block flex-grow flex items-center w-auto">
              <div className="text-sm flex-grow">

                {mainMenuLinksData.map((item) => {              
                  return <Link to={item.link} key={item.id} className="block inline-block mt-0 text-gray-800 hover:text-black hover:underline mr-4">{item.name}</Link>
                })}

              </div>
              
              <div>
                <Link to='/contact'>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                    Contact
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        )
      }
    }
  />  
)


HeaderNav.propTypes = {
  isHome: PropTypes.bool,
}

export default HeaderNav

const query = graphql`
  query HeaderNavQuery {
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