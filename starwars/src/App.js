import React,{useEffect,useState} from 'react';
import './App.scss';
import axios from "axios";
import CharCard from "./components/CharCard.js"

const App = () => {

  const [charData,setCharData] = useState([]);

  useEffect(() => {

    axios
      .get(`https://swapi.co/api/people/`, {
        params: {}
      })
      .then(res => {
        setCharData(res.data);
        // console.log(res.data);
      })
      .catch((err)=>{
        console.log("err",err);
      });
      
    }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="content">
      <CharCard charInfo={charData.results} />
    </div>
    </div>
  );
}

export default App;