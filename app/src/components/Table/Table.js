import React from 'react';
import './Table.css';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import {setLevel} from '../../actions';


function Table({list, colNames,width = 'auto', height ='auto'}) {
  const level = useSelector (state => state.level);
  const dispatch = useDispatch();
 
    const paint = (risk) => {
    var element = document.getElementById(risk+"tr");
    console.log(element);
    var allTr = document.getElementsByClassName("active");
    if(allTr != null){
        for(var i = 0; i < allTr.length; i++){
            allTr[i].className = ""; 
          }
    }
    element.className = "active";
    
    dispatch(setLevel(risk));
    }

  return (
    <div>
        {
            list.length > 0 &&(
                <table cellSpacing="0" style={{width: width,height: height,padding: '5px 10px'}}>
                    <thead>
                        <tr>
                            {colNames.map((headerItem, index)=>(
                                <th key={index}>
                                    {headerItem.toUpperCase()}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(list).map((obj, index) => (
                            
                            <tr key={index} id={obj.risk+"tr"}  onClick = {() => {paint(obj.risk)}}>
                                {Object.values(obj).map((value,index2) => (
                                    <td key={index2} id={value} >{value}</td>
                                ) ) }
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        }
      
    </div>
  )
}

export default Table
