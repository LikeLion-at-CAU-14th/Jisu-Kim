import React from 'react'
import styled from 'styled-components'

const Header = ({setPage}) => {
  return (
    <HeaderContainer>
        <Menu>
            <button onClick={()=>setPage('home')}>🏠Home</button>
            <button onClick={()=>setPage('me')}>Me</button>
            <button onClick={()=>setPage('playlist')}>Playlist</button>
            <button onClick={()=>setPage('contact')}>Contact</button>
        </Menu>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer=styled.header`
    text-align: center;
`

const Menu = styled.nav`
    display: flex;
    justify-content: center;
    gap: 130px;
    font-family: 'InkLiquid';

    button {
        all: unset;
        color: #444;
        font-size: 30px;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
        margin-top: 60px;
    }

    button:hover {
        color: rgb(253, 135, 190);
    }
`