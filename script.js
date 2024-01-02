fetch('./entities.json')
    .then(response => response.json())
    .then(data => {
        let grid = document.getElementById('grid-container');
        data.forEach(element => {
            let card = document.createElement('div');
            card.setAttribute('class', 'card');
            card.setAttribute('onclick', 'this.classList.toggle("active");');
            let title = document.createElement('h2');
            title.innerHTML = element.nom;

            card.appendChild(title);

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
    })
    .catch(error => console.error('Erreur:', error));