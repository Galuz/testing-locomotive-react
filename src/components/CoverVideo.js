import React from 'react'
import styled from 'styled-components';
import MainVideo from '../assets/loopVideo.mp4';

const VideoContainer = styled.section`
width: 100%;
height: 100vh;
position: relative;

video{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
`

const DarkOverlay = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 1;
background-color: #4b4b4b91;
`

const Title = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 5;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #FFF;
h1{
    font-size: 40px;
    text-shadow: 1px 1px 1px #000;
}
h2{
    font-size: 20px;
    text-shadow: 1px 1px 1px #000;
}
`

function CoverVideo() {
  return (
    <VideoContainer>
        <DarkOverlay />
        <Title>
            <div>
                <h1 data-scroll data-scroll-speed="4">Background...</h1>
            </div>
            <h2>Inspire. Create. Belive</h2>
        </Title>
         <video src={MainVideo} type="video/mp4" autoPlay loop/>
    </VideoContainer>
  )
}

export default CoverVideo
