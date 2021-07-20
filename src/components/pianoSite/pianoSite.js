import React, {useState, useEffect} from 'react'
import '../../css/pianoBoard.css'
import './BlackKey'
import BlackKey from './BlackKey'
import WhiteKey from './WhiteKey'


function PianoBoard() {
  //const [pedal, setPedal] = useState(false)


  //38 white keys
  let keys =[]
  let idOfKey = 5
  let scale = 1
  let isBlack = 1
  const notes= ["C", "D", "E", "F", "G", "A", "B"]
  for(let i=0; i< 38; i++){
        
      if(idOfKey==3 || idOfKey == 7){
        isBlack = 0
      }
      else{
        isBlack = 1
      }

      if (idOfKey==7){
        idOfKey = 0
        scale++
      }


      keys.push(<WhiteKey id={[notes[idOfKey], scale].join("")} isBlack={isBlack}></WhiteKey>)
      idOfKey ++;
  }

  //window.addEventListener('keyup', function(event) {
  //  switch (event.keyCode) {
  //    case 32:{
  //      setPedal(!pedal)
  //      console.log(pedal)
  //    }
  //    break;
  //  }
  //}, false);

  return (
    <div className="piano-wrapper">
      <div className="red-line">
      </div> 
      {keys}
    </div>
  );
}

export default PianoBoard;


