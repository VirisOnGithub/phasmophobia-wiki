let data;

fetch('https://api.npoint.io/4ea1e41eb1a343e65e0d')
    .then(response => response.json())
    .then(d => {
        data = d;
        displayEquipment(data);
    });

function displayEquipment(d){
    let grid = document.getElementById('grid-container');

    d.forEach(e => {
        let card = document.createElement('div');
        card.classList.add('card');

        let image = document.createElement('img');
        image.classList.add('image');
        image.src = './assets/equipment/'+e.filename;
        image.alt = e.name;
        card.appendChild(image);

        let contentWrapper = document.createElement('div');
        contentWrapper.classList.add('content-wrapper');
        card.appendChild(contentWrapper);

        let name = document.createElement('h3');
        name.classList.add('name');
        name.innerHTML = e.name;
        contentWrapper.appendChild(name);
        let usage = document.createElement('h4');
        usage.classList.add('usage');
        usage.innerHTML = 'Usage : '+e.usage;
        contentWrapper.appendChild(usage);

        let levels = document.createElement('div');
        levels.classList.add('levels');
        

        let levelsTitle = document.createElement('h4');
        levelsTitle.classList.add('levels-title');
        levelsTitle.textContent = 'Niveaux';
        levels.appendChild(levelsTitle);
        for(let i = 0; i < 3; i++){
            let level = document.createElement('div');
            level.classList.add('level');
            let levelDescription = document.createElement('p');
            levelDescription.innerHTML = 'Niveau '+(i+1)+' : '+e.levels[i];
            level.appendChild(levelDescription);
            levels.appendChild(level);
        }
        contentWrapper.appendChild(levels);

        grid.appendChild(card);
    });
}

document.getElementById('input1').addEventListener('input', function(e) {
    search(e.target.value);
});

function search(query) {
    const filteredData = data.filter(element => element.name.toLowerCase().includes(query.toLowerCase()));
    
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    displayEquipment(filteredData);
}
