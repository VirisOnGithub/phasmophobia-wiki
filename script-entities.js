let data;

fetch('https://api.npoint.io/35ab17d4caffedcae98f')
    .then(response => response.json())
    .then(fetchedData => {
        data = fetchedData;
        displayEntities(data);
    })
    .catch(error => console.error('Erreur:', error));

function displayEntities(dataToDisplay) {
    const grid = document.getElementById('grid-container');
    const nbEntities = document.querySelector('.nbEntities');
    nbEntities.innerHTML = "Nombre d'entités : " + dataToDisplay.length;
    dataToDisplay.forEach((element, index) => {
        const card = document.createElement('div');
        card.setAttribute('data-aos', "zoom-in-down");
        card.setAttribute('data-aos-duration', "200");
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
            preuveElement.setAttribute('src', './assets/proofs/'+preuve+'.png');
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
            preuveElement.innerHTML = "<img src=./assets/proofs/"+preuve+".png />"
            const name = document.createElement('p');
            name.innerHTML = preuve[0].toUpperCase() + preuve.slice(1).replace('-', ' ');
            preuveElement.appendChild(name);
            preuves.appendChild(preuveElement);
        });
        cardContent.appendChild(preuves);

        let graphs = document.createElement('div');
        graphs.classList.add('graphs');
        cardContent.appendChild(graphs);

            let speedContainer = document.createElement('div');
            speedContainer.classList.add('graph');
            graphs.appendChild(speedContainer);

                const subtitle1 = document.createElement('h3');
                subtitle1.innerHTML = "Vitesse";
                speedContainer.appendChild(subtitle1);

                const vitesse = document.createElement('div');
                vitesse.setAttribute('id', 'speedProgressBar'+index);
                vitesse.classList.add('progressBar');
                const legend = element.vitesse === 0 ? "Variable" : "";
                speedProgressBar('speedProgressBar'+index, element.vitesse, legend);
                speedContainer.appendChild(vitesse);

                const separator = document.createElement('div');
                separator.setAttribute('class', 'separator');
                speedContainer.appendChild(separator);
            
            let huntContainer = document.createElement('div');
            huntContainer.classList.add('graph');
            graphs.appendChild(huntContainer);
        
                const subtitle11 = document.createElement('h3');
                subtitle11.innerHTML = "Chasse";
                huntContainer.appendChild(subtitle11);

                const hunt = document.createElement('div');
                hunt.setAttribute('id', 'huntProgressBar'+index);
                hunt.classList.add('progressBar');
                const legend2 = element.hunt === 0 ? "Variable" : "";
                huntProgressBar('huntProgressBar'+index, element.hunt, legend2, element.hunt === 0 ? false : true);
                huntContainer.appendChild(hunt);

                const separator2 = document.createElement('div');
                separator2.setAttribute('class', 'separator');
                huntContainer.appendChild(separator2);

        const subtitle2 = document.createElement('h3');
        subtitle2.classList.add('particularitesTitle');
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

document.getElementById('reset').addEventListener('click', function(e) {
    document.getElementById('search').value = '';
    document.getElementById('searchProofs').value = '';
    displayEntities(data);
    document.querySelectorAll('.card').forEach(element => {
        element.classList.remove('active');
    });
});

function search(query) {
    const filteredData = data.filter(element => element.nom.toLowerCase().includes(query.toLowerCase()));
    
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    displayEntities(filteredData);
    
    if (filteredData.length === 1) {
        const element = document.querySelector('.card');
        element.classList.add('active');
    }
}

function searchProofs(query) {
    query = query.toLowerCase();
    const filteredData1 = data.filter(element => element.preuves[0].includes(query));
    const filteredData2 = data.filter(element => element.preuves[1].includes(query));
    const filteredData3 = data.filter(element => element.preuves[2].includes(query));
    
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    displayEntities(filteredData1.concat(filteredData2).concat(filteredData3));
}


function speedProgressBar(id, percent, legend){
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

function huntProgressBar(id, percent, legend, showPercent=true){
    $(document).ready(function () {
        var progressBar = $('#'+id).lineProgressBar({
            numOfLines: 10,
            showPercent: showPercent,
            lineColor: "#fcc630",
            completeColor: "#ff0000",
            showLegend: legend==="" ? false : true,
            legend: legend,
        });
        
        progressBar.update(percent);
    });
}