let data;

fetch('https://api.npoint.io/121e9b3dad8ec20ffd57')
    .then(response => response.json())
    .then(fetchedData => {
        data = fetchedData;
        displayChoices();
    })
    .catch(err => console.log(err));

const displayChoices = () => {
    let inputChoices = document.getElementById('maps');
    data.forEach(d => {
        inputChoices.innerHTML += `<option value="${d.ap}" id="option">${d.map}</option>`;
    });
}

const displayMap = () => {
    let mapContainer = document.getElementById('map-container');
    let map = document.getElementById('maps').options[document.getElementById('maps').selectedIndex].text;
    console.log(map)
    let mapData = data.find(d => d.map === map);
    for (let i = 0; i < mapData.nbfiles; i++) {
        mapContainer.innerHTML += `
            <div class="map-item">
                <h3 class="map-item-title">${mapData.floors[i]}</h3>
                <img src="./assets/maps/${mapData.namefiles}-${i+1}.png" alt="map" style="height: 100%" />
            </div>
        `;
    }
}

document.getElementById('maps').addEventListener('change', () => {
    document.getElementById('map-container').innerHTML = '';
    displayMap();
});