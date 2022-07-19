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
     <Recommendation/>
    </div>
   

    
  );
}


export default App;
