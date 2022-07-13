import logo from './logo.svg';
import './App.css';


function App() {
  const handleClick = (num) => {
    var boton = document.getElementById("boton"+num);
    var allButtons = document.getElementsByClassName("button");
    for(var i = 0; i < allButtons.length; i++){
      allButtons[i].className = "button"; 
    }
    boton.className += " active";

  }
  
  return (
    <div className="App">
      
     <button id="boton1" class="button" type="button" onClick={()=> {handleClick(1)}}>1</button>
 
     <button id="boton2" class="button" type="button" onClick={()=> {handleClick(2)}} >2</button>

     <button id="boton3" class="button" type="button" onClick={()=> {handleClick(3)}} >3</button>
    
    </div>
  );
}


export default App;
