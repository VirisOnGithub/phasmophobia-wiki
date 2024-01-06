let data;

fetch('https://api.npoint.io/0d298dac1263556005a9')
    .then(response => response.json())
    .then(fetchedData => {
        data = fetchedData;
        displayTricks(data);
    })
    .catch(error => console.error('Erreur:', error));

    const displayTricks = (d) => {
        const grid = document.getElementById('grid-container');
        const liste = document.createElement('ul');
        liste.setAttribute('class', 'liste');
        grid.appendChild(liste);
        d.forEach(e => {
            const list = document.createElement('li');
            list.setAttribute('class', 'list');
            list.innerHTML = e;
            liste.appendChild(list);
        });
    }

