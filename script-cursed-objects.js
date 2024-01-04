let data;

fetch('./src/cursed-objects.json')
    .then(response => response.json())
    .then(fetchedData => {
        data = fetchedData;
        displayData(data);
    })
    .catch(error => console.error('Erreur:', error));

function displayData(d) {
    let grid = document.getElementById('grid');

    d.forEach(e => {
        let card = document.createElement('div');
        card.classList.add('card');
        grid.appendChild(card);

        let image = document.createElement('img');
        image.classList.add('image');
        image.src = './assets/'+e.filename;
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
        let description = document.createElement('p');
        description.classList.add('description');
        e.desc.forEach(d => {
            description.innerHTML += d + '<br>';
        });
        contentWrapper.appendChild(description);
    });
}