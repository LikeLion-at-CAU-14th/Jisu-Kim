import React from 'react'
import styled from 'styled-components'

const Playlist = () => {
  return (
    <PlaylistContainer>
        <PlaylistBox>
            <Title>검정치마</Title>
            <ArtistImage src="/assets/pl1.webp" />
            <SongList>
                <li>Everything</li>
                <li>한시 오분(1:05)</li>
                <li>Love is all</li>
            </SongList>
        </PlaylistBox>

        <PlaylistBox>
            <Title>백예린</Title>
            <ArtistImage src="/assets/pl4.jpg" />
            <SongList>
                <li>0310</li>
                <li>Antifreeze</li>
                <li>산책</li>
            </SongList>
        </PlaylistBox>

        <PlaylistBox>
            <Title>wave to earth</Title>
            <ArtistImage src="/assets/pl3.png" />
            <SongList>
                <li>seasons</li>
                <li>sunny days</li>
                <li>peach eyes</li>
            </SongList>
        </PlaylistBox>

        <PlaylistBox>
            <Title>BTS</Title>
            <ArtistImage src="/assets/pl2.jpg" />
            <SongList>
                <li>소우주</li>
                <li>00:00</li>
                <li>Save ME</li>
            </SongList>
        </PlaylistBox>
    </PlaylistContainer>
  )
}

export default Playlist

const PlaylistContainer = styled.div`
    display:flex;
    justify-content : center;
    flex-wrap : wrap;
    gap : 20px;
    margin-top : 90px;
`

const PlaylistBox = styled.div`
    background-color: rgb(255, 246, 246);
    width: 300px;
    height: 420px;
    padding: 30px;
    text-align: left;
    border-radius: 30px;
`

const ArtistImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
    border: 5px solid white;
    display: block;
    margin: 20px auto;
`

const Title = styled.div`
    font-size: 28px;
    text-align: center;
    color: #483d29;
    font-family: 'InkLiquid';
`

const SongList = styled.ul`
    padding-left: 20px;

    li {
        font-size: 18px;
        margin: 6px;
        font-family: 'RoundedFixedsys';
    }
`