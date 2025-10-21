import { series } from './data.js';
document.addEventListener('DOMContentLoaded', () => {
    const seriesTbody = document.getElementById('series-tbody');
    const seasonsAverageEl = document.getElementById('seasons-average');
    const cardContainer = document.getElementById('serie-card-container');
    // Verificación
    if (!seriesTbody || !seasonsAverageEl || !cardContainer) {
        console.error("Error: No se pudo encontrar uno o más elementos del DOM (tbody, average, card-container)");
        return;
    }
    renderSeriesInTable(series);
    seasonsAverageEl.innerHTML = `Seasons average: <b>${getSeasonsAverage(series)}</b>`;
    function renderSeriesInTable(series) {
        console.log('Desplegando series...');
        seriesTbody.innerHTML = '';
        series.forEach(serie => {
            const trElement = document.createElement("tr");
            const tdId = document.createElement("td");
            tdId.innerHTML = `<b>${serie.id}</b>`;
            const tdName = document.createElement("td");
            const linkName = document.createElement("a");
            linkName.href = "#";
            linkName.className = "serie-link";
            linkName.textContent = serie.name;
            linkName.addEventListener('click', (event) => {
                event.preventDefault();
                console.log(`Clic en: ${serie.name}`);
                renderCard(serie);
            });
            tdName.appendChild(linkName);
            const tdChannel = document.createElement("td");
            tdChannel.textContent = serie.channel;
            const tdSeasons = document.createElement("td");
            tdSeasons.textContent = serie.seasons.toString();
            trElement.appendChild(tdId);
            trElement.appendChild(tdName);
            trElement.appendChild(tdChannel);
            trElement.appendChild(tdSeasons);
            seriesTbody.appendChild(trElement);
        });
    }
    function getSeasonsAverage(series) {
        let totalSeasons = 0;
        series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
        return totalSeasons / series.length;
    }
    function renderCard(serie) {
        console.log(`Renderizando tarjeta para: ${serie.name}`);
        const cardHtml = `
    <div class="card" style="width: 20rem;">
      <img src="${serie.cover}" class="card-img-top" alt="Cover de ${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.webpage}" class="btn btn-primary" target="_blank">Visitar sitio</a>
      </div>
    </div>
  `;
        cardContainer.innerHTML = cardHtml;
    }
});
