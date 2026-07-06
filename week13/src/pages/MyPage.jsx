import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserInfoContext } from '../context/UserInfoContext'

const MyPage = () => {
  const { state } = useContext(UserInfoContext)

  return (
    <PageBox>
      <Card>
        <Title>마이페이지</Title>
        <InfoRow>
          <Label>이름</Label>
          <Value>{state.name}</Value>
        </InfoRow>

        <InfoRow>
          <Label>이메일</Label>
          <Value>{state.email}</Value>
        </InfoRow>

        <InfoRow>
          <Label>생년월일</Label>
          <Value>{state.birth}</Value>
        </InfoRow>

        <InfoRow>
          <Label>성별</Label>
          <Value>{state.gender}</Value>
        </InfoRow>
      </Card>
    </PageBox>
  )
}

export default MyPage

const PageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Card = styled.div`
  width: 360px;
  background: white;
  border: 1px solid #e4e4e7;
  border-radius: 18px;
  padding: 30px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #bdb9b9;
`

const Label = styled.span`
  font-weight: 700;
  color: #52525b;
`

const Value = styled.span`
  color: #18181b;
`