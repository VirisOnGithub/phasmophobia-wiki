function displayTarot(){
    let data;
    fetch('https://api.npoint.io/94a48b1136ad6117e649')
        .then(response => response.json())
        .then(fetchedData => {
            data = fetchedData;
            displayCards(data);
        })
}

function displayCards(d){
    d.forEach(element => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('onclick', 'this.classList.toggle("activecard");');
        
    });
}