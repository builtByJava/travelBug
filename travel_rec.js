const apiURL = "travel_rec_api.json";
const mysearchBtn = document.getElementById("searchBtn");
const myclearBtn = document.getElementById("clearBtn");
const searchInput = document.getElementById("search-interface");
const resultsPSec = document.getElementById("resultsPanel");

function searchResults() {
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const myArr = [data];
      const searchVAL = document.getElementById("search-interface").value;
      const resultsArea = document.getElementById("resultsPanel");

      switch (searchVAL) {
        case "countries":
        case "country":
        case "COUNTRY":
          myArr.forEach((x) => {
            const myResults = [];
            const myCities = [];
            x.countries.forEach((country) =>
              myResults.push([
                `<div style="padding: 0rem 7rem"><h2>${country.name}</h2><br><br> <h3>Cities</h3><li>${country.cities[0]["name"]}</li> &nbsp; <li>${country.cities[1]["name"]}</li><br><br></div>`,
              ])
            );
            resultsPSec.style.display = "visible";
            resultsArea.innerHTML = `<div>${myResults}</div>`;
          });
          break;
        case "temples":
        case "TEMPLES":
        case "temple":
          myArr.forEach((x) => {
            const myTemples = [];
            x.temples.forEach((tempName) =>
              myTemples.push([
                `<div><h2>${tempName.name}</h2><br><br> ${tempName.description} <br><br></div>`,
              ])
            );
            resultsPSec.style.display = "visible";
            resultsArea.innerHTML = `<div>${myTemples}</div>`;
          });
          break;
        case "beaches":
        case "BEACHES":
        case "BEACH":
        case "beach":
          myArr.forEach((x) => {
            const myBeaches = [];
            x.beaches.forEach((beachName) =>
              myBeaches.push([
                `<h2>${beachName.name} </h2><br><br><div>${beachName.imageUrl}<br><br>${beachName.description} <br><br></div>`,
              ])
            );
            resultsPSec.style.display = "visible";
            resultsArea.innerHTML = `<div>${myBeaches}</div>`;
          });
        default:
          break;
      }
    })
    .catch((error) => console.log("You have an error:" + error));
}

function clearInput() {
  searchInput.value = "";
  resultsPSec.style.display = "none";
}

mysearchBtn.addEventListener("click", searchResults);
myclearBtn.addEventListener("click", clearInput);
