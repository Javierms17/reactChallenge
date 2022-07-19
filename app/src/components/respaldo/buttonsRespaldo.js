import logo from './logo.svg';
import './App.css';
import Table from './components/Table/Table';
import {useSelector} from 'react-redux';
import {setLevel} from './actions';
import { useDispatch } from 'react-redux'


function App() {
  const level = useSelector (state => state.level);
  const dispatch = useDispatch();
  const handleClick = (num) => {
    
    var boton = document.getElementById("boton"+num);
    var allButtons = document.getElementsByClassName("button");
    for(var i = 0; i < allButtons.length; i++){
      allButtons[i].className = "button"; 
    }
    boton.className += " active";
    dispatch(setLevel(num));
   
  }

  const list = [
    {risk: 1, bonds: 80, large:20, mid: 0, foreign: 0, small: 0 },
    {risk: 2, bonds: 70, large:15, mid: 15, foreign: 0, small: 0 },
    {risk: 3, bonds: 60, large:15, mid: 15, foreign: 10, small: 0 },
  ]
  const colNames = ['Risk','Bonds %','Large Cap%','Mid Cap','Foreign %', 'Small Cap %' ]
  
  return (
   
    <div className="App">
       <h1> level selected :{level}</h1>
     <button id="boton1" className="button" type="button" onClick={()=> {handleClick(1)}}>1</button>
 
     <button id="boton2" className="button" type="button" onClick={()=> {handleClick(2)}} >2</button>

     <button id="boton3" className="button" type="button" onClick={()=> {handleClick(3)}} >3</button>
    
    <div className="divTable">
    <Table list={list} colNames={colNames}/>
    </div>

    </div>

    
  );
}


export default App;