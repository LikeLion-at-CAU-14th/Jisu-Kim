import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [number, setNumber] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await axios.get(`https://week12-api-rcwo.onrender.com/api/questions`);
            
            setQuestions(response.data);
        }
        fetchQuestions();
    }, [])

    const checkAnswer = async(answer) => {
        const newAnswers = answers;
        newAnswers[number] = {id: questions[number].id, answer: answer};

        setAnswers(newAnswers);

        if (number + 1 === questions.length) {
            const response = await axios.post(`https://week12-api-rcwo.onrender.com/api/answers`, {answers: newAnswers});
            let score = 0;

            response.data.results.forEach((result) => {
                if (result.correct) {
                    score = score + 1;
                }
            });

            navigate(`/result/${score}`);
        } 

        else {
            setNumber(number + 1);
        }
    }

    if (!questions[number]) {
        return <div>문제를 불러오는 중입니다.</div>
    }

    return (
        <MenuDom>
            <QuizDom>
                <Title>Quiz</Title>
                <Question>{number + 1}. {questions[number].question}</Question>
                {questions[number].answers.map((answer) => (
                    <Button key={answer} onClick={() => checkAnswer(answer)}>
                        {answer}
                    </Button>
                ))}
            </QuizDom>
        </MenuDom>
    )
}

export default Quiz

const MenuDom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const QuizDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: white;
  padding: 50px;
  width: 600px;
  border-radius: 30px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  font-size: 40px;
  color: #656565;
  font-weight: 800;
  margin-bottom: 20px;
`;

const Question = styled.h2`
  color: #535353;
  font-size: 25px;
`;

const Button = styled.button`
  background-color: #75b5f5;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  padding: 20px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px 0;
`;