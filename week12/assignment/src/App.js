import React from 'react'
import './App.css';
import { Routes } from 'react-router-dom';


const App = () => {
  return (
    <AppDom>
      <Routes></Routes>
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