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
                
                let cardinner = document.createElement('div');
                cardinner.classList.add('card-inner');
                card.appendChild(cardinner);
                
                let cardfront = document.createElement('div');
                cardfront.classList.add('card-front');
                cardinner.appendChild(cardfront);

                let image = document.createElement('img');
                image.classList.add('cartes');
                image.src = './assets/cartes/'+element.filename;
                image.alt = element.name;
                cardfront.appendChild(image);

                let cardback = document.createElement('div');
                cardback.classList.add('card-back');
                cardinner.appendChild(cardback);

                let effect = document.createElement('div');
                effect.classList.add('effect');
                effect.innerHTML = element.effect;
                cardback.appendChild(effect);

                let proba = document.createElement('div');
                proba.classList.add('proba');
                proba.innerHTML = "Probabilité : "+element.probability+"%";
                cardback.appendChild(proba);

                contentWrapper.appendChild(card);
            });
            grid.appendChild(card);
        })
}

function probabilityProgressBar(id, percent, legend=""){
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