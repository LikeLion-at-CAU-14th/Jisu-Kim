import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderConatainer>
        <Avatar>
            <span>🦁</span>
        </Avatar>
        <Name>지수</Name>
    </HeaderConatainer>
  )
}

export default Header;

const HeaderConatainer = styled.div`
    text-align : center;
`

// Header.jsx
const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 36px 28px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.14);
  }
`

const Avatar = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #fff7ed;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    font-size: 2.5rem;
  }
`

const Name = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
  color: #1f2937;
  margin: 0 0 8px;
`

