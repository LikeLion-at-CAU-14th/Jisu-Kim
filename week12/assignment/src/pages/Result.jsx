import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Result = () => {
    const params = useParams();
    const score = params.score;

    const [result, setResult] = useState({});

    useEffect(() => {
        const fetchResult = async() => {
            const response = await axios.get(`https://week12-api-rcwo.onrender.com/api/result?score=${score}`);
            setResult(response.data);
        }
        fetchResult();
    },[])

    if (!result.message) {
        return <div>결과를 불러오는 중입니다!</div>
    }

    return (
        <ResultDom>
            <ResultBox>
                <Title>🏆퀴즈 결과🏆</Title>
                <Score>{result.score}점</Score>
                <Message>{result.message}</Message>
                <StyledLink to = "/">처음으로</StyledLink>
            </ResultBox>
        </ResultDom>
    )
    
}

export default Result

const ResultDom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
  background-color: white;
  padding: 45px 55px;
  width: 460px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  font-size: 38px;
  color: #535353;
  font-weight: 700;
`;

const Score = styled.div`
  font-size: 42px;
  color: #dd6969;
  font-weight: 700;
`;

const Message = styled.div`
  font-size: 23px;
  color: #535353;
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 75px;
  font-size: 23px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;