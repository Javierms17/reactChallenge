import logo from './logo.svg';
import './App.css';
import Table from './components/Table/Table';

function App() {
  const handleClick = (num) => {
    var boton = document.getElementById("boton"+num);
    var allButtons = document.getElementsByClassName("button");
    for(var i = 0; i < allButtons.length; i++){
      allButtons[i].className = "button"; 
    }
    boton.className += " active";

  }

  const list = [
    {risk: 1, bonds: 80, large:20, mid: 0, foreign: 0, small: 0 },
    {risk: 2, bonds: 70, large:15, mid: 15, foreign: 0, small: 0 },
    {risk: 3, bonds: 60, large:15, mid: 15, foreign: 10, small: 0 },
  ]
  const colNames = ['Risk','Bonds %','Large Cap%','Mid Cap','Foreign %', 'Small Cap %' ]
  
  return (
    <div className="App">
      
     <button id="boton1" class="button" type="button" onClick={()=> {handleClick(1)}}>1</button>
 
     <button id="boton2" class="button" type="button" onClick={()=> {handleClick(2)}} >2</button>

     <button id="boton3" class="button" type="button" onClick={()=> {handleClick(3)}} >3</button>
    
    <div class="divTable">
    <Table list={list} colNames={colNames}/>
    </div>

    </div>

    
  );
}


export default App;
