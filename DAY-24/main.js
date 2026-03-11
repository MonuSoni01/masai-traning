const api_key = "5881c4a70f1f474bc5289105d70aa1b5";

async function getData(event) {
  event.preventDefault();

  let cityData = document.getElementById("city").value;
  //   console.log(cityData);

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=${api_key}`;
  //   console.log(url)

  let res = await fetch(url);
  let data = await res.json();
  append(data)
  console.log(data.name);

  function append(data) {
    let container = document.getElementById("container");
    container.innerHTML= null;
    let h3 = document.createElement("h3");
    h3.innerText = data.name;

    let p = document.createElement("p");
    p.innerText = data.main.temp_min;

    let p2 = document.createElement("p");
    p2.innerText = data.main.temp_max;


    container.append(h3,p,p2)
  }
}
