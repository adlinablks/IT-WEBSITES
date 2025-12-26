import React, { useRef } from 'react'
import './media.css'
import video from '../../assets/video.mp4'

const Media = ({ playState, setPlayState }) => {

  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div className={`media ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer} >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default Media;
