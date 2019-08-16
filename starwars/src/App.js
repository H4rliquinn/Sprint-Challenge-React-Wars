import React,{useEffect,useState} from 'react';
import './App.scss';
import axios from "axios";
import CharCard from "./components/CharCard.js"

const App = () => {

  function setPageHandle(dir){
    if (dir=="p"&&page>1){
      setPage(page-1);
    } else if (dir=="n"){
      setPage(page+1);
    }
  }
  const [charData,setCharData] = useState([]);
  const [page,setPage] = useState(1);
  useEffect(() => {

    axios
      .get(`https://swapi.co/api/people/?page=${page}`)
      .then(res => {
        setCharData(res.data);
        // console.log(res.data);
      })
      .catch((err)=>{
        console.log("err",err);
      });
      
    }, [page]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <h2>Page: {page}</h2>
      <button onClick={()=>setPage(1)}>Start Page</button>
      <button onClick={()=>setPageHandle("p")}>Previous Page</button>
      <button onClick={()=>setPageHandle("n")}>Next Page</button>
      <div className="content">
        <CharCard charInfo={charData.results} />
      </div>
    </div>
  );
}

export default App;