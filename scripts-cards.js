export function displayTarot(){
    fetch('https://api.npoint.io/94a48b1136ad6117e649')
        .then(response => response.json())
        .then(d => {
            let grid = document.getElementById('grid');
            let card = document.createElement('div');
            card.classList.add('card');

            let image = document.createElement('img');
            image.classList.add('image');
            image.src = './assets/tarot.png';
            image.alt = 'Tarot';
            card.appendChild(image);

            let contentWrapper = document.createElement('div');
            contentWrapper.classList.add('content-wrapper');
            contentWrapper.classList.add('content-wrapper-cards');
            card.appendChild(contentWrapper);

            d.forEach(element => {
                let card = document.createElement('div');
                card.classList.add('tarot');
                card.setAttribute('onclick', 'this.classList.toggle("activecard");');
        
                let image = document.createElement('img');
                image.classList.add('cartes');
                image.src = './assets/cartes/'+element.filename;
                image.alt = element.name;
                card.appendChild(image);

                contentWrapper.appendChild(card);
            });
            grid.appendChild(card);
        })
}