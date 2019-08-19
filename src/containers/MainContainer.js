import PropTypes from 'prop-types'
import React, { Component } from 'react'
import HeaderNav from '../navigation/HeaderNav'
import MobileNav from '../navigation/MobileNav'
import FooterNav from '../navigation/FooterNav'

class MainContainer extends Component {

  render() {
    const { children } = this.props

    return (
      <div>
        <HeaderNav />
        <MobileNav />

        {children}

        <FooterNav />
      </div>
    )
  }
}

MainContainer.propTypes = {
  children: PropTypes.node,
}

export default MainContainer