import React from 'react'
import background from '../images/background.jpg'
import styled from 'styled-components'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'


const Styles = styled.div`
    .order-now {
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 100px;
    letter-spacing: 4.2px;
    word-spacing: 6px;
    color: #54241C;
    font-weight: 700;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
    }
    .staff-login {
       font-family: 'Helvetica', Arial, sans-serif;
font-size: 25px;
letter-spacing: 2px;
word-spacing: 2px;
color: #54241C;
font-weight: normal;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: none;
}
       .app-div {

    min-height: 10h;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: #54241C;
    transform: scale(0.5);
    position: fluid;

}    

.bWFZvK {
    color: #54241C;
}
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    color: white;

`



export const Homepage = () => (
    
    <Styles>
        <div className="app-div">   
            <Image src={background} alt='background of mexican place' responsive rounded={true} />
            <hr />
            <h1 className='order-now'>
                <StyledLink to='/orderpage'>TAP TO ORDER</StyledLink>
            </h1>
            <hr />
            <p1 className='staff-login'>
                <StyledLink to='/stafflogin'>Staff login</StyledLink>
            </p1>
            </div>
    </Styles>
    
)