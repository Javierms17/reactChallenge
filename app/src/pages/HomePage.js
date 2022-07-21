import React from 'react';
import Table from '../components/Table/Table';
import Chart from '../components/Chart/Chart';
import Recommendation from '../components/Recommendation/Recommendation';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {useSelector} from 'react-redux';

 function HomePage({list,colNames}) {
    const level = useSelector (state => state.level);
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/recomend');
      }
  return (
  
    <div className="App">
    
    <h1> Risk Level selected: { level!= 0? level:""}</h1>
    <h2>Press a row to select a level </h2>
  <div className='dashboard'>
  <div className="divTable">
  <Table list={list} colNames={colNames}/>
  
  </div>
  {level!= 0? 
  <div>
    <Chart list={list} />
  </div>
   :"" }
  </div>
  
  {level != 0 ? <button className='button1' onClick={handleClick}> Go to recomendations</button>: 
  <button className='buttonDisabled' disabled onClick={handleClick}> Go to recomendations</button>}
  
  </div>

  
  )
}
export default HomePage;