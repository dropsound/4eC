import { slide as Menu } from 'react-burger-menu'
import * as React from "react"

var styles = {
    bmBurgerButton: {
      position: 'absolute',
      width: '32px',
      height: '24px',
      right: '32px',
      top: '24px'
    },
    bmBurgerBars: {
      background: '#7a431d',
      height: '4px'
    },
    bmBurgerBarsHover: {
      background: '#ffffff'
    },
    bmCrossButton: {
        top: '24px',
        right: '32px',
        height: '248px',
        width: '24px'
    },
    bmCross: {
        height: '24px',
        background: '#fff'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: '0'
    },
    bmMenu: {
      background: '#372c2e',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'flex',
      flexDirection: 'columns',
      color: '#fff'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

class MobileNav extends React.Component {


  render () {
    return (
      <Menu class="mobileNav" right styles={ styles }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about/">About</a>
        <a id="contact" className="menu-item" href="/contact/">Contact</a>
      </Menu>
    );
  }
}

export default MobileNav