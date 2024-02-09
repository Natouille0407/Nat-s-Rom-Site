const articleData = {
    title: "Super Mario 64",
    imageSrc: "assets/image/sm64.jpg",
    console: "Nintendo 64",
    year: "1996",
    downloadLink: "assets/Roms/n64/Super Mario 64 (USA).zip"
};

function afficherArticle(articleData) {
    const articleElement = document.createElement("article");

    const titleElement = document.createElement("h3");
    titleElement.textContent = articleData.title;
    articleElement.appendChild(titleElement);

    const imageElement = document.createElement("img");
    imageElement.src = articleData.imageSrc;
    imageElement.alt = "Image de " + articleData.title;
    articleElement.appendChild(imageElement);

    const infoElement = document.createElement("p");
    infoElement.classList.add("info");
    infoElement.textContent = `${articleData.console}, ${articleData.year}`;
    articleElement.appendChild(infoElement);

    const downloadLinkElement = document.createElement("a");
    downloadLinkElement.href = articleData.downloadLink;

    const linkDivElement = document.createElement("div");
    linkDivElement.classList.add("link");

    const downloadTextElement = document.createElement("p");
    downloadTextElement.textContent = "Download";
    linkDivElement.appendChild(downloadTextElement);

    downloadLinkElement.appendChild(linkDivElement);
    articleElement.appendChild(downloadLinkElement);

    const innerMainDiv = document.querySelector(".innermain");
    innerMainDiv.appendChild(articleElement);
}

afficherArticle(articleData);