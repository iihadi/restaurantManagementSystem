import React, { Component } from 'react'
import { stack as Menu } from 'react-burger-menu'
import './BurgerMenuBar.css'
import styled from 'styled-components'

const StyledA = styled.a`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    color: white;

}
`

class BurgerMenuBar extends Component {
    /*Code adapted from the github page for BurgerMenuBar */
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }
    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu() {
        this.setState({ menuOpen: false })
    }

    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    toggleMenu() {
        this.setState(state => ({ menuOpen: !state.menuOpen }))
    }

    showSettings(event) {
        event.preventDefault()
    }

    render() {
        return (
            < div id="outer-container" >
                <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
                <main id="page-wrap">
                    <Menu isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)} >
                        <StyledA onClick={() => this.closeMenu()} id='home' className='menu-item' href='/'>Back to Home</StyledA>
                    </Menu >


                </main>
            </div >
            )
    }
}

export default BurgerMenuBar

    