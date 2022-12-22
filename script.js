let searchField = document.getElementById("search");
let btn = document.getElementById("btn");
let body = document.querySelector("body");
let section = document.getElementById("planetsContainer");
section.className = "planetsContainers";
body.appendChild(section);
let article = document.createElement("article");
article.className = "namePlanetEl";
body.appendChild(article);

searchField.addEventListener("keyup", async function (e) {
  // aktiverar sökrutan så att man kan söka på planetens namn
  if (e.key === "Enter") {
    let data = await getPlanets();
    let planets = data.bodies;
    section.innerHTML = "";
    let value = searchField.value;
    searchField.value = "";
    for (let i = 0; i < planets.length; i++) {
      if (planets[i].name.toLowerCase() === value.toLowerCase()) {
        section.style.display = "block";

        getImage(value);

        let header = document.createElement("h1");
        header.innerText = planets[i].name;
        section.appendChild(header);

        let moreInfo = document.createElement("p");
        moreInfo.innerText = "Mer info >";
        moreInfo.className = "moreinfo";
        section.appendChild(moreInfo);
        // local storage till info sidan
        moreInfo.addEventListener("click", function () {
          window.localStorage.setItem("planet", JSON.stringify(planets[i]));
          location.href = "moreInfoPage.html";
        });
      }
    }
  }
});

function getImage(value) {
  // bilderna på planeterna ska komma upp vid sökning
  let svg = document.getElementById("svg");
  svg.style.display = "none";

  if (value.toLowerCase() === "mars") {
    let img = document.getElementById("mars");
    section.appendChild(img);
  }

  if (value.toLowerCase() === "solen") {
    let img = document.getElementById("sol");
    section.appendChild(img);
  }

  if (value.toLowerCase() === "venus") {
    let img = document.getElementById("ven");
    section.appendChild(img);
  }

  if (value.toLowerCase() === "neptunus") {
    let img = document.getElementById("nep");
    section.appendChild(img);
  }

  if (value.toLowerCase() === "jupiter") {
    let img = document.getElementById("jup");
    section.appendChild(img);
  }

  if (value.toLowerCase() === "merkurius") {
    let img = document.getElementById("merk");
    section.appendChild(img);
  }

  if (value.toLowerCase() === "jorden") {
    let img = document.getElementById("jord");
    section.appendChild(img);
  }

  if (value.toLowerCase() === "uranus") {
    let img = document.getElementById("ura");
    section.appendChild(img);
  }

  if (value.toLowerCase() === "saturnus") {
    let img = document.getElementById("sat");
    section.appendChild(img);
  }
}

//namnen och planeterna ska synas
btn.addEventListener("click", async function () {
  let data = await getPlanets();
  let planets = data.bodies;
  for (let i = 0; i < planets.length; i++) {
    let imageConatainerEl = document.getElementById("image-container");
    imageConatainerEl.style.display = "block";

    section.style.display = "none";

    let svg = document.getElementById("svg");
    svg.style.display = "none";

    let para = document.createElement("p");
    para.innerText = planets[i].name;
    para.className = "namePlanet";
    article.appendChild(para);

    getAllPlanets();
    //hänvisar till samma infosida
    para.addEventListener("click", function () {
      window.localStorage.setItem("planet", JSON.stringify(planets[i]));
      window.location.href = "moreInfoPage.html";
    });
  }
});
// bilderna när du trycker på planeter knappen
function getAllPlanets() {
  if ("solen") {
    let img = document.getElementById("sol");
    article.appendChild(img);
  }

  if ("merkurius") {
    let img = document.getElementById("merk");
    article.appendChild(img);
  }

  if ("venus") {
    let img = document.getElementById("ven");
    article.appendChild(img);
  }

  if ("jorden") {
    let img = document.getElementById("jord");
    article.appendChild(img);
  }

  if ("mars") {
    let img = document.getElementById("mars");
    article.appendChild(img);
  }

  if ("jupiter") {
    let img = document.getElementById("jup");
    article.appendChild(img);
  }

  if ("saturnus") {
    let img = document.getElementById("sat");
    article.appendChild(img);
  }

  if ("uranus") {
    let img = document.getElementById("ura");
    article.appendChild(img);
  }

  if ("neptunus") {
    let img = document.getElementById("nep");
    article.appendChild(img);
  }
}

async function getPlanets() {
  try {
    let resp = await fetch(
      "https://fathomless-shelf-54969.herokuapp.com/bodies",
      {
        method: "GET",
        headers: {
          "x-zocom": "solaris-7BTxHCyHhzIME5TI",
        },
      }
    );
    let data = await resp.json();
    return await data;
  } catch (err) {
    console.error(err);
  }
}
