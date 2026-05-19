import React from 'react'
import styled from 'styled-components'

const Me = () => {
  return (
    <MeContainer>
        <ProfileBox>
            <img src="/assets/me.jpg"/>
            <h1>김지수(03)</h1>
            <Info>
                <ul>
                    <li>이름 : 김지수</li>
                    <li>생년월일 : 2003년 6월 5일</li>
                    <li>학과 : 중앙대학교 소프트웨어학부 24학번</li>
                    <li>취미 : 첼로연주, 영화보기, 음악듣기</li>
                    <li>TMI : 집순이, ISFP, 인디밴드 노래 좋아함</li>
                </ul>
            </Info>
        </ProfileBox>
    </MeContainer>
  )
}

export default Me

const MeContainer = styled.div`
    margin-top:90px;
`

const ProfileBox = styled.div`
    background-color: rgb(248, 216, 216);
    width: 580px;
    margin: 0 auto;
    padding: 60px;
    text-align: left;
    border-radius: 30px;
    
    img {
        width: 250px;
        height: 250px;
        border-radius: 10px;
        display: block;
        margin: 0 auto;
    }

    h1 {
        margin-top: 20px;
        font-size: 28px;
        text-align: center;
        color: #483d29;
        font-family: 'RoundedFixedsys';
    }
`

const Info = styled.ul`
    margin-top : 15px;
    text-align : left;

    li{
        margin: 15px;
        font-size: 18px;
        font-family: 'RoundedFixedsys';
    }
`