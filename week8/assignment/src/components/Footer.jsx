import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <a href ="https://instagram.com/jisoo_su_">Instagram</a>
      <span>|</span>
      <a href ="mailto:joyzone2@gmail.com">Email</a>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 30px 0;
  text-align: center;

  a{
    color: #444;
    font-size: 20px;
    margin: 0 10px;
    font-family: 'InkLiquid';
  }

  a:hover {
    color: hotpink;
  }
`