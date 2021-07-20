import React, {useState, useEffect} from 'react'
import '../../css/pianoBoard.css'
import BlackKey from './BlackKey'
import useSound from 'use-sound';




function WhiteKey(props) {
const [isBlack, setIsBlack] = useState(props.isBlack)


  function importAll(r) {
    let sounds = {};
    r.keys().map((item, index) => { sounds[item.replace('./', '')] = r(item); });
    return sounds;
  }
  const sounds = importAll(require.context('../../sounds/pianoSounds', false, /\.(mp3)$/));

  const [play, {pause}] = useSound(sounds[`${props.id}.mp3`].default);



    return (
      <span className="key-span">
        <div id={props.id} className="white-key" onMouseDown ={() =>{play()}}  onMouseLeave={() => {play();pause()}}>
        </div>
        {(isBlack? (<BlackKey id={props.id}></BlackKey>): (""))}
      </span>
    );
  }
  
  export default WhiteKey;