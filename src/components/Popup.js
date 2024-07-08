import React from 'react';
import '../components/style/Popup.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import successfully from "../../static/successfully.json";

const Popup = ({ message, onClose, img }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className='popup-close'>
          <button onClick={onClose}><img src='/close-circle.svg'/></button>
        </div>
        <div className='popup-animation'>
          <Player
            autoplay
            loop
            src={img}
            style={{ height: '200px', width: '200px' }}
          >
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
        </div>
        <div>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;