import React, {useState, useEffect} from 'react'
import '../../css/pianoBoard.css'
import useSound from 'use-sound';

function BlackKey(props) {

    let idOfBlackKey = props.id.slice(0,1) + "b" + props.id.slice(1,2);

    function importAll(r) {
      let sounds = {};
      r.keys().map((item, index) => { sounds[item.replace('./', '')] = r(item); });
      return sounds;
    }
    const sounds = importAll(require.context('../../sounds/pianoSounds', false, /\.(mp3)$/));
  
    const [play, {pause}] = useSound(sounds[`${idOfBlackKey}.mp3`].default);


  
    const style={
      width:"50%", 
      height:"45%", 
      background:"black", 
      position:"absolute", 
      left: "-25%",
      cursor:"default", 
      borderBottomLeftRadius: "2px", 
      borderBottomRightRadius: "2px",
      zIndex: "100"
    }

    return (
      <div id={idOfBlackKey} className="black-key" style={style} onMouseDown ={() => play()} onMouseLeave={() => {play();pause()}}>
      </div>
    );
  }
  
  export default BlackKey;