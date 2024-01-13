const header = document.querySelector('.header');

header.innerHTML = `
    <h1 class="title" style="cursor: pointer" onclick="window.location.href = './index.html'">Phasmophobia Wiki</h1>
    <div class="links">
        <a href="./index.html">Entités</a>
        <a href="./cursedobjects.html">Objets maudits</a>
        <a href="./tricks.html">Astuces</a>
        <a href="./equipment.html">Equipement</a>
        <a href="./maps.html">Cartes</a>
    </div>
`;