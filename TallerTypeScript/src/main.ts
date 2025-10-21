import { series } from './data.js';
import type { Serie } from './serie.js';


const seriesTbody: HTMLElement = document.getElementById('series-tbody')!;
const seasonsAverageEl: HTMLElement = document.getElementById('seasons-average')!;


function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series...');
  series.forEach(serie => {
   
    let trElement = document.createElement("tr");

    trElement.innerHTML = `<td><b>${serie.id}</b></td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    
    
    seriesTbody.appendChild(trElement);
  });
}


function getSeasonsAverage(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    return totalSeasons / series.length;
}


renderSeriesInTable(series);
seasonsAverageEl.innerHTML = `Seasons average: <b>${getSeasonsAverage(series)}</b>`;