import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {useSelector} from 'react-redux';
import './Chart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({list}){
   const level = useSelector (state => state.level);
   const dataSet = [];
   
   if(level != 0){
        dataSet[0]=list[level-1].bonds;
        dataSet[1]=list[level-1].large;
        dataSet[2]=list[level-1].mid;
        dataSet[3]=list[level-1].foreign;
        dataSet[4]=list[level-1].small;
    }
  
   const data = {
        labels: ['Bonds', 'Large Cap', 'Mid Cap', 'Foreign', 'Small Cap'],
        datasets: [
          {
            label: '# of Votes',
            data: dataSet,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div className='chart'>
         <Doughnut data={data} />
        </div>
    )
}
export default Chart