let id; // for debouncing

// Fetch Data from API
async function getData() {
    let query = document.getElementById("query").value;

    if (query.trim() === "") {
        return [];   // empty input => return empty array
    }

    let url = `https://swapi.dev/api/people/?search=${query}`;

    let res = await fetch(url);
    let data = await res.json();

    console.log(data);

    return data.results; // API returns "results"
}


// Append results to UI
function append(data) {
    let container = document.getElementById("results");
    container.innerHTML = ""; // clear old results

    data.forEach(el => {
        let p = document.createElement("p");
        p.innerText = el.name;
        container.append(p);
    });
}


// MAIN function to handle search + append
async function main() {
    let data = await getData();
    append(data);
}


// Debouncing function
function debouncing(func, delay) {
    if (id) {
        clearTimeout(id);
    }

    id = setTimeout(() => {
        func();
    }, delay);
}
