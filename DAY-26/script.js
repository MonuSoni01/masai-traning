// SPERED
// let arr = [1,2,3,4]
// let arr1 = [ 5,6,7,8]

// let NewArr = [...arr,...arr1]

// console.log(NewArr)

// REST
// function fun (a,...b)
// {
//     console.log(a)
//     console.log(b);
// }
// // fun('box1','box2','box3','box4')
//   fun(1,2,3,4,5,6)

let api_url = "AIzaSyBOwC_LKlL9D45dh31KPHB8vlgjr7R-SmI";

async function getSearch() {
  try {
    let query = document.getElementById("query").value;

    let web_url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&type=video&key=${api_url}`;
    let res = await fetch(web_url);
    let data = await res.json();
    console.log(data);
    append(data.items)
  } catch {
    console.log("SORRY NOT FOUND");
  }
}

let append = (data) => {
  let container = document.getElementById("result");

  data.forEach(({ id: { videoId }, snippet: { title } }) => {
    let div = document.createElement("div");
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    let h3 = document.createElement('h3')
    h3.innerText = title;

    div.append(iframe,h3)

    container.append(div)
  });
};
