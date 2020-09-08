
let titre_h1 = document = document.getElementById("grosTitre");
let parent = document.body;
//parent.removeChild(titre_h1);
let newTitre = document.createElement("h2");
newTitre.id = "titreMoyen";
newTitre.textContent = "Les Experts en javaScript";
newTitre.style.color = "orange";
parent.replaceChild(newTitre, titre_h1)()