let data;

fetch('./src/entities.json')
    .then(response => response.json())
    .then(fetchedData => {
        data = fetchedData;
        displayData(data);
    })
    .catch(error => console.error('Erreur:', error));

function displayData(dataToDisplay) {
    let grid = document.getElementById('grid-container');
    dataToDisplay.forEach((element, index) => {
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('onclick', 'this.classList.toggle("active");');

        let titleContainer = document.createElement('div');
        titleContainer.setAttribute('class', 'title-container');
        card.appendChild(titleContainer);

        let title = document.createElement('h2');
        title.innerHTML = element.nom;

        titleContainer.appendChild(title);

        element.preuves.forEach(preuve => {
            let preuveElement = document.createElement('img');
            preuveElement.setAttribute('src', './assets/'+preuve+'.png');
            preuveElement.setAttribute('class', 'preuveTitle');
            titleContainer.appendChild(preuveElement);
        });

        let cardContent = document.createElement('div');
        cardContent.setAttribute('class', 'card-content');

        let subtitle = document.createElement('h3');
        subtitle.innerHTML = "Preuves";
        cardContent.appendChild(subtitle);

        let preuves = document.createElement('div');
        preuves.setAttribute('class', 'preuves');
        element.preuves.forEach(preuve => {
            let preuveElement = document.createElement('div');
            preuveElement.setAttribute('class', 'preuve');
            preuveElement.innerHTML = "<img src=./assets/"+preuve+".png />"
            let name = document.createElement('p');
            name.innerHTML = preuve[0].toUpperCase() + preuve.slice(1).replace('-', ' ');
            preuveElement.appendChild(name);
            preuves.appendChild(preuveElement);
        });
        cardContent.appendChild(preuves);

        let subtitle1 = document.createElement('h3');
        subtitle1.innerHTML = "Vitesse";
        cardContent.appendChild(subtitle1);

        let vitesse = document.createElement('div');
        vitesse.setAttribute('id', 'progressBar'+index);
        vitesse.classList.add('progressBar');
        let legend = element.vitesse === 0 ? "Variable" : "";
        progressbar('progressBar'+index, element.vitesse, legend);
        cardContent.appendChild(vitesse);

        let subtitle2 = document.createElement('h3');
        subtitle2.innerHTML = "Particularités";
        cardContent.appendChild(subtitle2);

        let particularites = document.createElement('div');
        particularites.setAttribute('class', 'particularites');
        element.particularites.forEach(particularite => {
            let particulariteElement = document.createElement('div');
            particulariteElement.setAttribute('class', 'particularite');
            particulariteElement.innerHTML = particularite;
            particularites.appendChild(particulariteElement);
        });

        cardContent.appendChild(particularites);

        card.appendChild(cardContent);

        grid.appendChild(card);
    });
}

document.getElementById('search').addEventListener('input', function(e) {
    search(e.target.value);
});

document.getElementById('searchProofs').addEventListener('input', function(e) {
    searchProofs(e.target.value);
});

function search(query) {
    let filteredData = data.filter(element => element.nom.toLowerCase().includes(query.toLowerCase()));
    
    let grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    displayData(filteredData);
}

function searchProofs(query) {
    let filteredData1 = data.filter(element => element.preuves[0].includes(query));
    let filteredData2 = data.filter(element => element.preuves[1].includes(query));
    let filteredData3 = data.filter(element => element.preuves[2].includes(query));
    
    let grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    displayData(filteredData1.concat(filteredData2).concat(filteredData3));
}


function progressbar(id, percent, legend){
    $(document).ready(function () {
        var progressBar = $('#'+id).lineProgressBar({
            numOfLines: 10,
            showPercent: false,
            lineColor: "#82f7ff",
            completeColor: "#0094cc",
            showLegend: legend==="" ? false : true,
            legend: legend,
        });
        
        progressBar.update(percent);
    });
}