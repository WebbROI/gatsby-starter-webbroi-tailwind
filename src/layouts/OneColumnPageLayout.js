import React from 'react'
import PropTypes from 'prop-types'

const OneColumnPageLayout = ({ children }) => (
  <div className='container sm:w-full sm:p-4 lg:w-11/12 lg:py-8 mx-auto'>
    {children}
  </div>
)

OneColumnPageLayout.propTypes = {
  children: PropTypes.node,
}

export default OneColumnPageLayout