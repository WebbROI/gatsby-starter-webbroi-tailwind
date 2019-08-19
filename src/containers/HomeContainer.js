// Custom Homepage container without header navigation. Header navigation is probably imported within the homepage component.

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import FooterNav from '../navigation/FooterNav'
import MobileNav from '../navigation/MobileNav'

class HomeContainer extends Component {

  render() {
    const { children } = this.props

    return (
      <div>
        <MobileNav />

        {children}

        <FooterNav />
      </div>
    )
  }
}

HomeContainer.propTypes = {
  children: PropTypes.node,
}

export default HomeContainer