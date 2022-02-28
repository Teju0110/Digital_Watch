import "./App.css";
import { useState } from "react";

function App() {
  

  const [time, setTime] = useState();

  const getTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours=checkTime(hours);
    minutes=checkTime(minutes)
    seconds=checkTime(seconds)

    setTime(hours + ":" + minutes + ":" + seconds);
  };

  const checkTime=(i)=>{
    if(i<10){
      i="0"+i;
      return i
    }
    else{
      return i;
    }
  }

  setInterval(getTime, 1000);

  return (
    <div className="app">
      <div className="box">
      <h1>{time}</h1>
      </div>
    </div>
  );
}

export default App;
