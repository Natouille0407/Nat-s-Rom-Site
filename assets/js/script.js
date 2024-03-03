const game = [
    {
    title: "Super Mario 64",
    imageSrc: "assets/image/sm64.jpg",
    console: "Nintendo 64",
    year: "1996",
    downloadLink: "assets/Roms/n64/Super Mario 64 (USA).zip"
},
{
    title: "Pokemon Red",
    imageSrc: "assets/image/pokemonred.jpg",
    console: "GameBoy",
    year: "1996",
    downloadLink: "assets/Roms/GB/Pokemon - Red Version (USA, Europe) (SGB Enhanced).zip"
},
];

const innermain = document.querySelector(".innermain");

function parcourirGame(game) {
    for (let i = 0; i < game.length; i++) {
        const currentGame = game[i];

        const article = document.createElement("article");
        const title = document.createElement("h2");
        const img = document.createElement("img");
        const console = document.createElement("p");
        const year = document.createElement("p");
        const link = document.createElement("a");

        img.src = currentGame.imageSrc;
        img.classList.add("game-img")
        link.classList.add("link");

        innermain.appendChild(article);
        article.appendChild(title);
        article.appendChild(img);
        article.appendChild(console);
        article.appendChild(year);
        article.appendChild(link);

        title.textContent = currentGame.title;
        console.textContent = currentGame.console
    }
}

parcourirGame(game);