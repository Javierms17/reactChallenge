import logo from './logo.svg';
import './App.css';
import Table from './components/Table/Table';
import {useSelector} from 'react-redux';
import {setLevel} from './actions';
import { useDispatch } from 'react-redux'
import Chart from './components/Chart/Chart';
import Recommendation from './components/Recommendation/Recommendation';

function App() {
  const level = useSelector (state => state.level);
  
 

  const list = [
    {risk: 1, bonds: 80, large:20, mid: 0, foreign: 0, small: 0 },
    {risk: 2, bonds: 70, large:15, mid: 15, foreign: 0, small: 0 },
    {risk: 3, bonds: 60, large:15, mid: 15, foreign: 10, small: 0 },
    {risk: 4, bonds: 50, large:20, mid: 20, foreign: 10, small: 0 },
    {risk: 5, bonds: 40, large:20, mid: 20, foreign: 20, small: 0 },
    {risk: 6, bonds: 35, large:25, mid: 5, foreign: 30, small: 5 },
    {risk: 7, bonds: 20, large:25, mid: 25, foreign: 25, small: 5 },
    {risk: 8, bonds: 10, large:20, mid: 40, foreign: 20, small: 10 },
    {risk: 9, bonds: 5, large:15, mid: 40, foreign: 25, small: 15 },
    {risk: 10, bonds: 0, large: 5, mid: 25, foreign: 30, small: 40 },


  ]
  const colNames = ['Risk','Bonds %','Large Cap%','Mid Cap','Foreign %', 'Small Cap %' ]
  
  return (
   
    <div className="App">
      <h1> Level selected :{ level!= 0? level:""}</h1>
      <h2>press a row to select a level </h2>
    
    <div className="divTable">
    <Table list={list} colNames={colNames}/>
    
    </div>
    {level!= 0? 
    <div>
      <Chart list={list} />
    </div>
     :"" }
     <Recommendation list={list}/>
    </div>
   

    
  );
}


export default App;
