const header = document.querySelector('header');
const title = document.createElement('h1');
title.setAttribute('class', 'title');
title.textContent = 'Phasmophobia Wiki';
title.onclick = () => {window.location.href = './index.html';};
title.style.cursor = 'pointer';
header.appendChild(title);

const links = document.createElement('div');
links.setAttribute('class', 'links');
header.appendChild(links);

const link1 = document.createElement('a');
link1.setAttribute('href', './index.html');
link1.textContent = 'Entités';
links.appendChild(link1);

const link2 = document.createElement('a');
link2.setAttribute('href', './cursedobjects.html');
link2.textContent = 'Objets maudits';
links.appendChild(link2);

const link3 = document.createElement('a');
link3.setAttribute('href', './tricks.html');
link3.textContent = 'Astuces';
links.appendChild(link3);

const link4 = document.createElement('a');
link4.setAttribute('href', './equipment.html');
link4.textContent = 'Equipement';
links.appendChild(link4);
