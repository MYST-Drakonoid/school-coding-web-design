const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const Image = document.createElement("img");
Image.setAttribute("src", "https://picsum.photos/200");
Image.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(Image);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const mysection = document.createElement("section");
mysection.innerHTML = "<h2>DOM Basics</h2><p>this was added through javascript</p>";
document.body.appendChild(mysection);