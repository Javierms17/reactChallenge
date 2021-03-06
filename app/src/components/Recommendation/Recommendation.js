import React, { useState } from 'react';
import './Recommendation.css';
import {useSelector} from 'react-redux';


function Recommendation({list}){
    const level = useSelector (state => state.level);
    const dataSet = [];
    
    if(level != 0){

        dataSet[0]=list[level-1].bonds; //bonds
        dataSet[1]=list[level-1].large; //large
        dataSet[2]=list[level-1].mid;   //mid
        dataSet[3]=list[level-1].foreign; //foreign
        dataSet[4]=list[level-1].small;   //small
    }
   const [bonds,setBonds] = useState(0);
   const [large,setLarge] = useState(0);
   const [mid,setMid] = useState(0);
   const [foreign,setForeign] = useState(0);
   const [small,setSmall] = useState(0);
   const [dbonds,setDBonds] = useState(0); // diference bonds
   const [newBonds,setNewBonds] = useState(0); 
   const [dlarge,setDLarge] = useState(0); 
   const [newLarge,setNewLarge] = useState(0); 
   const [dmid,setDMid] = useState(0); 
   const [newMid,setNewMid] = useState(0);
   const [dforeign,setDForeign] = useState(0); 
   const [newForeign,setNewForeign] = useState(0);
   const [dsmall,setDSmall] = useState(0); 
   const [newSmall,setNewSmall] = useState(0);
   const [transfers,setTransfers] = useState([]);

   const largeChange = (e) => {
        const value = e.target.value;
        setLarge(value);
    }
    const bondsChange = (e) => {
        const value = e.target.value;
        setBonds(value);
    }
    const midChange = (e) => {
        const value = e.target.value;
        setMid(value);
    }
    const foreignChange = (e) => {
        const value = e.target.value;
        setForeign(value);
    }
    const smallChange = (e) => {
        const value = e.target.value;
        
        setSmall(value);
    }
    const calculate = () => {
        
        const bondsV = bonds === "" ? 0 : parseFloat(bonds); //parses the value  as a number or if it's empty treats it as 0 (V for value)
        const largeV = large === "" ? 0 : parseFloat(large); 
        const midV = mid === "" ? 0 : parseFloat(mid); 
        const foreignV = foreign === "" ? 0 : parseFloat(foreign); 
        const smallV = small === "" ? 0 : parseFloat(small); 
        const sum = bondsV + largeV + midV + foreignV + smallV ; //get the total
        
        var bondValues =  getValues(bondsV,sum,dataSet[0]);
        setDBonds(bondValues.dif);
        setNewBonds(bondValues.new);
        
        const largeValues = getValues(largeV,sum,dataSet[1]);
        setDLarge(largeValues.dif);
        setNewLarge(largeValues.new);

        const midValues = getValues(midV,sum,dataSet[2]);
        setDMid(midValues.dif);
        setNewMid(midValues.new);

        const foreignValues = getValues(foreignV,sum,dataSet[3]);
        setDForeign(foreignValues.dif);
        setNewForeign(foreignValues.new);

        const smallValues = getValues(smallV,sum,dataSet[4]);
        setDSmall(smallValues.dif);
        setNewSmall(smallValues.new);

        const clonedValues = [];

        clonedValues [0] = Object.assign({}, bondValues);
        clonedValues[0].name = "Bonds";
        clonedValues [1] = Object.assign({}, largeValues);
        clonedValues[1].name = "Large Cap";
        clonedValues [2] = Object.assign({}, midValues);
        clonedValues[2].name = "Mid Cap";
        clonedValues [3] = Object.assign({}, foreignValues);
        clonedValues[3].name = "Foreign";
        clonedValues [4] = Object.assign({}, smallValues);
        clonedValues[4].name = "Small Cap";


        const recomendation = [];
        
        for(var i = 0; i<clonedValues.length ;i++ ){
            if(clonedValues[i].dif <0){
                
                for(var j=0 ;j<clonedValues.length;j++ ){
                    if(clonedValues[j].dif>0 && j!=i){
                        var transfer =0 ;
                        if(clonedValues[i].dif*-1 >= clonedValues[j].dif) {
                             transfer = clonedValues[j].dif;
                        } else{
                            transfer = clonedValues[i].dif*-1;
                        }
                        clonedValues[i].dif += transfer;
                        clonedValues[j].dif -= transfer;
                        if(transfer != 0){
                            transfer = Math.round(transfer * 10) / 10; // round
                    //    console.log("transfer "+transfer+" from "+clonedValues[i].name+" to "+clonedValues[j].name);
                        var reco = "Transfer "+transfer+" from "+clonedValues[i].name+" to "+clonedValues[j].name +".";
               
                        recomendation.push(reco);
                        }
                    }
                }

            }
        }
        console.log(recomendation);
        setTransfers(recomendation);

    }
    const getValues= (num, sum,per) => { // per = percentage of the risk level
        const percentage = getPercentage(num,sum); // % 
        const diffInPer = per - percentage; //difference in %
        const diffInCash = getNumfromPercentage(diffInPer,sum); // diference in Cash
        var rounded = Math.round(diffInCash * 100) / 100; // round
        var newAmount = num+ rounded;
        newAmount = Math.round(newAmount * 100) / 100;
        return {"dif":rounded, "new":newAmount};
    }

    const getPercentage  = (num, total) => {
        
        var percentage= (num / total)*100;
        return percentage;
    }
    const getNumfromPercentage  = (per, total) => {
      
     const num = per*total/100;

        return num;
    }

    return(
        <div className='recommendations'>
            <form onSubmit={ev =>{
                    ev.preventDefault();
                    calculate();

            }}>       
                    <h1>Recommendation</h1>
                    <h2>Level selected : {level}</h2>
                    <div className='allLevelPercentajes' >   
                        <p className='levelpercentages'>bonds : {dataSet[0]}%</p>
                        <p className='levelpercentages'>large: {dataSet[1]}% </p>
                        <p className='levelpercentages'> mid: {dataSet[2]}%</p>
                        <p className='levelpercentages'>foreign: {dataSet[3]}%</p>
                        <p className='levelpercentages'>small: {dataSet[4]}%</p>
                    </div>
                    <br/>
                    <div className='titleandlist'>
                        <div className='titles' > <div className='current'>Current Amount</div><div className='currentResponsive'>Current</div><div className='diference'> Diference</div> <div className='difResponsive'> Dif</div><div className='newAmount'>New Amount</div><div className='newResponsive'>New</div></div>
                        <div className='labelAndInputs'>
                            <label>Bonds $: </label>
                            <input type='number' name='bonds' value={bonds} autoComplete='off' onChange={bondsChange}/>
                            <input type='number' name='dbonds' readOnly  value={dbonds} /> 
                            <input type='number' name='newbonds' readOnly  value={newBonds} /> 
                            <br/>
                            <br/>
                            <label>Large $: </label>
                            <input type='number' name='large' value={large} autoComplete='off' onChange={largeChange}/>
                            <input type='number' name='dlarge' readOnly  value={dlarge} /> 
                            <input type='number' name='newlarge' readOnly  value={newLarge} /> 
                            <br/>
                            <br/>
                            <label>Mid $: </label>
                            <input type='number' name='mid' value={mid} autoComplete='off' onChange={midChange}/>
                            <input type='number' name='dmid' readOnly  value={dmid} /> 
                            <input type='number' name='newmid' readOnly  value={newMid} /> 
                            <br/>
                            <br/>
                            <label>Foreign $: </label>
                            <input type='number' name='foreign' value={foreign} autoComplete='off' onChange={foreignChange}/>
                            <input type='number' name='dforeign' readOnly  value={dforeign} /> 
                            <input type='number' name='newforeign' readOnly  value={newForeign} /> 
                            <br/>
                            <br/>
                            <label>Small $: </label>
                            <input type='number' name='small' value={small} autoComplete='off' onChange={smallChange}/>
                            <input type='number' name='dsmall' readOnly  value={dsmall} /> 
                            <input type='number' name='newsmall' readOnly  value={newSmall} /> 
                            {/* end of label and inputs */}
                        </div> 
                        <br/>
                        <br/>
                        <button type='submit' className='button2' >Rebalance </button>
                </div>
                    <p> Recomended transfers: </p>
                    { transfers.length > 0 ?  <ul>
                    {transfers.map((transf, index)=>(
                        <li key={index}>
                            {transf}
                        </li>
                    ))}
                </ul> : ""}
            </form>
        </div>
    )
}
export  default Recommendation