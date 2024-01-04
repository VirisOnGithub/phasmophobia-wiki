let data;

fetch('./src/entities.json')
    .then(response => response.json())
    .then(fetchedData => {
        data = fetchedData;
        displayData(data);
    })
    .catch(error => console.error('Erreur:', error));

function displayData(dataToDisplay) {
    const grid = document.getElementById('grid-container');
    dataToDisplay.forEach((element, index) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('onclick', 'this.classList.toggle("active");');

        const titleContainer = document.createElement('div');
        titleContainer.setAttribute('class', 'title-container');
        card.appendChild(titleContainer);

        const title = document.createElement('h2');
        title.innerHTML = element.nom;

        titleContainer.appendChild(title);

        element.preuves.forEach(preuve => {
            const preuveElement = document.createElement('img');
            preuveElement.setAttribute('src', './assets/'+preuve+'.png');
            preuveElement.setAttribute('class', 'preuveTitle');
            titleContainer.appendChild(preuveElement);
        });

        const cardContent = document.createElement('div');
        cardContent.setAttribute('class', 'card-content');

        const subtitle = document.createElement('h3');
        subtitle.innerHTML = "Preuves";
        cardContent.appendChild(subtitle);

        const preuves = document.createElement('div');
        preuves.setAttribute('class', 'preuves');
        element.preuves.forEach(preuve => {
            const preuveElement = document.createElement('div');
            preuveElement.setAttribute('class', 'preuve');
            preuveElement.innerHTML = "<img src=./assets/"+preuve+".png />"
            const name = document.createElement('p');
            name.innerHTML = preuve[0].toUpperCase() + preuve.slice(1).replace('-', ' ');
            preuveElement.appendChild(name);
            preuves.appendChild(preuveElement);
        });
        cardContent.appendChild(preuves);

        const subtitle1 = document.createElement('h3');
        subtitle1.innerHTML = "Vitesse";
        cardContent.appendChild(subtitle1);

        const vitesse = document.createElement('div');
        vitesse.setAttribute('id', 'progressBar'+index);
        vitesse.classList.add('progressBar');
        const legend = element.vitesse === 0 ? "Variable" : "";
        progressbar('progressBar'+index, element.vitesse, legend);
        cardContent.appendChild(vitesse);

        const subtitle2 = document.createElement('h3');
        subtitle2.innerHTML = "Particularités";
        cardContent.appendChild(subtitle2);

        const particularites = document.createElement('div');
        particularites.setAttribute('class', 'particularites');
        element.particularites.forEach(particularite => {
            const particulariteElement = document.createElement('div');
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
    const filteredData = data.filter(element => element.nom.toLowerCase().includes(query.toLowerCase()));
    
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    displayData(filteredData);
}

function searchProofs(query) {
    const filteredData1 = data.filter(element => element.preuves[0].includes(query));
    const filteredData2 = data.filter(element => element.preuves[1].includes(query));
    const filteredData3 = data.filter(element => element.preuves[2].includes(query));
    
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    displayData(filteredData1.concat(filteredData2).concat(filteredData3));
}


function progressbar(id, percent, legend){
    $(document).ready(function () {
        var progressBar = $('#'+id).lineProgressBar({
            numOfLines: 10,
            showPercent: false,
            lineColor: "#82f7ff",
            compconsteColor: "#0094cc",
            showLegend: legend==="" ? false : true,
            legend: legend,
        });
        
        progressBar.update(percent);
    });
}