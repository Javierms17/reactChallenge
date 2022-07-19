import React, { useState } from 'react';



function Recommendation(){
   const [bonds,setBonds] = useState('');
   const [large,setLarge] = useState('');
   const largeChange = (e) => {
    const value = e.target.value;
    setLarge(value);
    }
    const bondsChange = (e) => {
        const value = e.target.value;
        setBonds(value);
    }
    return(
        <div>
            <form onSubmit={ev =>{
                ev.preventDefault();
                setBonds(ev.target.bonds.value);

            }}>

           
            <h1>Recommendation</h1>
            <label>Bonds: </label>
            <input type='text' name='bonds' value={bonds} autoComplete='off' onChange={bondsChange}/>
           <br/>
           <label>Large: </label>
            <input type='text' name='large' value={large} autoComplete='off' onChange={largeChange}/>
           <br/>
            <button type='submit' >Recomend </button>
            <p> bonds =  {bonds}</p>
            <p> large =  {large}</p>
            </form>
        </div>
    )

}
export  default Recommendation