import React, { useState } from 'react'
import Header from './components/Header'
import styled from 'styled-components'
import Home from './components/Home'
import Footer from './components/Footer'
import Me from './components/Me'
import Playlist from './components/Playlist'
import Contact from './components/Contact'

const App = () => {
  const [page,setPage] = useState('home')

  return (
    <Container>
      <Header setPage={setPage}/>
      {page ==='home'&& <Home/>}
      {page ==='me'&& <Me/>}
      {page ==='playlist'&&<Playlist/>}
      {page ==='contact'&&<Contact/>}
      <Footer/>
    </Container>
  )
}

export default App

const Container = styled.div`
  background-color: #ffe4ec;
  min-height: 100vh;
`