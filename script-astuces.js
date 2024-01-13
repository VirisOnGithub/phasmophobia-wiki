let data;

fetch('https://api.npoint.io/0d298dac1263556005a9')
    .then(response => response.json())
    .then(fetchedData => {
        data = fetchedData;
        displayTricks(data);
    })
    .catch(error => console.error('Erreur:', error));

    const displayTricks = (d) => {
        const liste = document.querySelector('.liste');
        d.forEach(e => {
            liste.innerHTML += `<li class="list">${e}</li>`;
        });
    }

