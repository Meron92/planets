let planet = window.localStorage.getItem("planet");
planet = JSON.parse(planet);

let body = document.querySelector("body");
let moons = planet.moons;
let nextPageButton = document.getElementById("nextPageBtn");
let prevPageButton = document.getElementById("prevPageBtn");
let listItem = document.createElement("li");
body.appendChild(listItem);
listItem.className = "listPlanets";
let nextPage = 0;
let prevPage = 0;
let moonList = document.getElementById("match");
let smallerLi;
let moonListItem = document.createElement("li");
moonList.appendChild(moonListItem);

smallerLi = smallerList(moons);
moonListItem.innerText = smallerLi;
moonList.innerText = smallerLi[0];

nextPageButton.addEventListener("click", function () {
  if (nextPage < smallerLi.length - 1) {
    nextPage++;
    console.log(nextPage);
    // Går igenom alla planeter genom switch case
    switch (nextPage) {
      case 1:
        moonList.innerText = smallerLi[1];
        break;
      case 2:
        moonList.innerText = smallerLi[2];
        break;
      case 3:
        moonList.innerText = smallerLi[3];
        break;
      case 4:
        moonList.innerText = smallerLi[4];
        break;
      case 5:
        moonList.innerText = smallerLi[5];
        break;
      case 6:
        moonList.innerText = smallerLi[6];
        break;
      case 7:
        moonList.innerText = smallerLi[7];
        break;
    }
  } else {
    alert("Den här planetetn har inte fler månar");
  }
});
// tillbaka knappen till månarna
prevPageButton.addEventListener("click", function () {
  prevPage = nextPage--;
  console.log(prevPage);

  switch (prevPage) {
    case 1:
      moonList.innerText = smallerLi[0];
      break;
    case 2:
      moonList.innerText = smallerLi[1];
      break;
    case 3:
      moonList.innerText = smallerLi[2];
      break;
    case 4:
      moonList.innerText = smallerLi[3];
      break;
    case 5:
      moonList.innerText = smallerLi[4];
      break;
    case 6:
      moonList.innerText = smallerLi[5];
      break;
    case 7:
      moonList.innerText = smallerLi[6];
      break;
    case 8:
      moonList.innerText = smallerLi[7];
      break;
  }
});

// delar upp månarna
function smallerList(moons) {
  listItem = [];
  for (let i = 0; i < moons.length; i += 4) {
    let small = moons.slice(i, i + 4);
    listItem.push(small);
  }
  return listItem;
}

let header = document.getElementById("headerName");
header.innerText = planet.name;

let miniHeader = document.getElementById("latinName");
miniHeader.innerText = planet.latinName;

let types = document.getElementById("type");
types.innerText = `Typ: ${planet.type}`;

let tempurateDay = document.getElementById("tempDay");
tempurateDay.innerText = `Tempratur under dagen: ${planet.temp.day}°C`;

let tempurateNight = document.getElementById("tempNight");
tempurateNight.innerText = `Tempratur under natten: ${planet.temp.night}°C`;

let description = document.getElementById("desc");
description.innerText = planet.desc;

let distance = document.getElementById("dist");
distance.innerText = `Distans från solen: ${planet.distance}km`;

// tar bort måne info om planeten inte har några månar
if (moons == 0) {
  moonList.style.display = "none";
  nextPageButton.style.display = "none";
  prevPageButton.style.display = "none";
  let dispMoon = document.getElementById("moon");
  dispMoon.style.display = "none";
}
