import React from "react"
import Popup from "reactjs-popup"
import styled from 'styled-components'
import MobileMenuList from './MobileMenuList'

const BurgerMenu = styled.div`
  display: inline-block;
  cursor: pointer;
  position: fixed;
  right: 0.9em;
  top: 0.8em;
  z-index: 9999;
  background: #fff;
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  .bar1, .bar2, .bar3 {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 4px 0;
    transition: 0.4s;
  }
`

const BurgerMenuOpen = styled.div`
  display: inline-block;
  cursor: pointer;
  position: fixed;
  right: 1em;
  top: 1em;
  z-index: 9999;
  background: #fff;
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  .bar1, .bar2, .bar3 {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 4px 0;
    transition: 0.4s;
  }

  .bar1 {
  -webkit-transform: rotate(-45deg) translate(-4px, 4px);
  transform: rotate(-45deg) translate(-4px, 4px);
  }

  .bar2 {
    opacity: 0;
  }

  .bar3 {
    -webkit-transform: rotate(45deg) translate(-6px, -6px);
    transform: rotate(45deg) translate(-6px, -6px);
  }
`

const BurgerIcon = ({ open, ...props }) => (
  <div>
    {open
      ?
        <BurgerMenuOpen {...props}>
          <div className="bar1" key="b1" />
          <div className="bar2" key="b2" />
          <div className="bar3" key="b3" />
        </BurgerMenuOpen>
      :
        <BurgerMenu {...props}>
          <div className="bar1" key="b1" />
          <div className="bar2" key="b2" />
          <div className="bar3" key="b3" />
        </BurgerMenu>
    }
  </div>
)

const MobileMenu = () => (
  <div className='md:hidden lg:hidden'>
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98)" }}
      contentStyle={{ background: "rgba(255,255,255,0)", width: '80%', border: "none", margin: '4em auto 0' }}
      closeOnDocumentClick={false}
      trigger={open => <BurgerIcon open={open} />}
    >
      {close => <MobileMenuList close={close} />}
    </Popup>
  </div>
)

export default MobileMenu