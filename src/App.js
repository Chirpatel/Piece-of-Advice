import React,{useState} from 'react';
import './App.css';
import {Advice} from './api/advice';
import {Image} from './api/image';
const App=()=> {
  const [image,setimage] = useState('');
  const [advice,setadvice] = useState('');
  const advicefunc = async () => {
    //console.log(data.slip.advice)
    var data = await Advice();
    while(advice.id===data.slip.id){
      data = await Advice();
    }
    setadvice(data.slip);
    const imgdata =await Image();
    //console.log(imgdata.urls.full);
    setimage(imgdata.urls.full)
  }
  if(advice==='')
  advicefunc()
  return (
    <div className="App">
      <div className="Background">
      <img src ={image} alt="images"/>  
      </div>
      <div className="Content">
        <h1>{advice.advice}</h1>
        <button onClick={()=>{advicefunc()}}>Another Advice</button>
      </div>
    </div>
  );
}

export default App;
