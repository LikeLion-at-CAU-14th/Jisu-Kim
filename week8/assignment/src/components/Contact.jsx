import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <ContactContainer>
        <h1>Contact📞</h1>
        <p>📷Instagram : @jisoo_su_</p>
        <p>💌Email : joyzone2@naver.com</p>
        <p>💻GitHub : joyzone2</p>
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.div`
    text-align: center;
    margin-top: 180px;

    h1 {
        font-size: 35px;
        color: #302b20;
        font-family: 'InkLiquid';
    }

    p {
        font-size: 20px;
        margin: 25px;
        color: #444;
    }
`