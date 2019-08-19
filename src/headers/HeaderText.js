import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'

const HeaderText = ({ title, subTitle, withButton, buttonText, linkTo }) => (
  <div className='container flex flex-col items-center'>
    <h1 className='font-display font-extrabold text-5xl text-white text-shadow-lg text-center'>
      {title ? title : null}
    </h1>

    <h2 className='font-body text-3xl text-white mb-4 text-shadow text-center'>
      {subTitle ? subTitle : null}
    </h2>

    {withButton
      ?
        <Link to={linkTo ? linkTo : '/'}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
            {buttonText ? buttonText : 'Button'}
          </button>
        </Link>
      :
        null
    }
  </div>
)

HeaderText.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  withButton: PropTypes.bool,
  buttonText: PropTypes.string,
  linkTo: PropTypes.string,
}

export default HeaderText