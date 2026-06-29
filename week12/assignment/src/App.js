import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import styled from 'styled-components';


const App = () => {
  return (
    <AppDom>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/quiz" element = {<Quiz/>}/>
        <Route path = "/result/:score" element = {<Result/>}/>
      </Routes>
    </AppDom>
  )
}

export default App;

const AppDom = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;