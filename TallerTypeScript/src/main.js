import { series } from './data.js';
var seriesTbody = document.getElementById('series-tbody');
var seasonsAverageEl = document.getElementById('seasons-average');
function renderSeriesInTable(series) {
    console.log('Desplegando series...');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td><b>".concat(serie.id, "</b></td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonsAverage(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return totalSeasons / series.length;
}
renderSeriesInTable(series);
seasonsAverageEl.innerHTML = "Seasons average: <b>".concat(getSeasonsAverage(series), "</b>");
//# sourceMappingURL=main.js.map