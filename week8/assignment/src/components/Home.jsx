import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeContainer>
        <HomeImage>
            <img src ="/assets/kitty.jpg"/>
        </HomeImage>
        <Title>
            <h1>Welcome To Jisu's First Web Page!</h1>
            <p>안녕하세요 멋쟁이사자처럼 프론트엔드 14기 아기사자 김지수입니다💗🦁!!</p>
        </Title>
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 90px;
`

const HomeImage = styled.div`
    img{
        width: 400px;
        height: 400px;
        border: 8px solid white;
        border-radius: 10%;
    }
`

const Title = styled.div`
    text-align: center;

    h1{
        margin-top: 50px;
        font-size: 40px;
        color: #483d29;
    }
    
    p{
        margin-top: 35px;
        font-size: 22px;
        color: #666;
    }
`