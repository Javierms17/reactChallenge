import React from 'react';
import './Table.css';
import {useSelector} from 'react-redux';

function Table({list, colNames,width = 'auto', height ='auto'}) {
  const level = useSelector (state => state.level);
  console.log("level = "+level);
    const paint = () => {
    var element = document.getElementById(level);
    }

  return (
    <table>
    <caption>Ejemplo de tabla</caption>
 <thead>
 <tr>
        <th>Risk</th>
        <th>Bonds</th>
        <th>Large</th>
        <th>Mid</th>
        <th>Foreign</th>
        <th>foreign</th>
      </tr>
 </thead>

    <tbody>
    
      <tr>
        <th>1</th>
        <td>A1</td>
        <td>B1</td>
      </tr>
      <tr>
        <th>2</th>
        <td>A2</td>
        <td>B2</td>
      </tr>
    </tbody>
  </table>
    // <div>
    //     {
    //         list.length > 0 &&(
    //             <table cellSpacing="0" style={{width: width,height: height,padding: '5px 10px'}}>
    //                 <thead>
    //                     <tr>
    //                         {colNames.map((headerItem, index)=>(
    //                             <th key={index}>
    //                                 {headerItem.toUpperCase()}
    //                             </th>
    //                         ))}
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {Object.values(list).map((obj, index) => (
                            
    //                         <tr key={index}  onClick = {paint()}>
    //                             {Object.values(obj).map((value,index2) => (
    //                                 <td key={index2} id={value} >{value}</td>
    //                             ) ) }
    //                         </tr>
    //                     ))}
    //                 </tbody>
    //             </table>
    //         )
    //     }
      
    // </div>
  )
}

export default Table
