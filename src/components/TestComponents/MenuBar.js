import React, { Component } from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    color: white;

}
`


class MenuBar extends Component {


    render() {
        return (
            <SideNav componentClass='NavBar'>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <StyledLink to='/'>Back to Homepage </StyledLink>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="help" >
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Call for Help
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            )
    }
    

}

export default MenuBar