let data;

fetch('https://api.npoint.io/2df98c6193f8f44fadd4')
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
        e.usage.forEach(u => {
            usage.innerHTML += u+'<br>';
        });
        contentWrapper.appendChild(usage);

        let levels = document.createElement('div');
        levels.classList.add('levels');

        for(let i = 0; i < 3; i++){
            let level = document.createElement('div');
            level.classList.add('level');
            let levelTitle = document.createElement('h5');
            levelTitle.innerHTML = 'Niveau '+(i+1)+' : ';
            level.appendChild(levelTitle);

            let levelDescription = document.createElement('div');
            levelDescription.classList.add('level-description');
            let tabcarac = e.levels[i].split(';');
            tabcarac.forEach(carac => {
                let caracElement = document.createElement('span');
                caracElement.classList.add('carac');
                caracElement.innerHTML = carac.trim();
                levelDescription.appendChild(caracElement);
            });
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
    const filteredData2 = data.filter(element => element.filename.toLowerCase().includes(query.toLowerCase()));
    
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    displayEquipment(filteredData.concat(filteredData2));
}