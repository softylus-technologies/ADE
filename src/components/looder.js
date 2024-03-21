import React from 'react'
import "./style/looder.css"
import Loader from "../Json/Loader.json"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const looder = () => {
  return (
    <div className="loader">
     <img src="/Frame 2.svg"/>
     <Player
        autoplay
        loop
        src={Loader} 
        style={{ height: '166px', width: '166px' }} 
      >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>    
     
  </div>
  )
}

export default looder