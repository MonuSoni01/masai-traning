// // write code here, dont change anything in HTML and css files
// // refer to id's mentioned in html files carefully
// // Follow the exact column order for tables,for eg: name should be filled under "name" column
// // we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

// document.querySelector("form").addEventListener("submit", myfunction);

// function myfunction() {
//   event.preventDefault();

//   var image = document.getElementById("image").value;
//   var name = document.getElementById("name").value;
//   var batch = document.getElementById("batch").value;
//   var dsa = document.getElementById("dsa").value;
//   var cs = document.getElementById("cs").value;
//   var coding = document.getElementById("coding").value;


//   console.log(image,name,dsa,cs,batch,coding)

//    var tr = document.createElement("tr") 
//    var img = document.createElement('img')
//    img.setAttribute("src",image)
//    img.setAttribute("class","person_avatar")
//    tr.append(img)

//    var t1 = document.createElement('td')
//    t1.innerText = name
//    var t2 = document.createElement('td')
//    t2.innerText = dsa
//    var t3 = document.createElement('td')
//    t3.innerText = batch
//    var t4 = document.createElement('td')
//    t4.innerText = cs
//    var t5 = document.createElement('td')
//    t5.innerText = coding
//    var t6 = document.createElement('td')
//    var totalMarks = Number(dsa)+Number(cs)+Number(coding)
//    var score =(totalMarks/30)*100
//    t6.innerText = score
//    var t7 = document.createElement('td')
//    if(score > 15)
//    {
//    t7.innerText= "Regular"; 
//    t7.style.backgroundColor='green';
//     t7.style.color='white';
//    }
//    else{
//     t7.innerText= "Asnyc"; 
//     t7.style.backgroundColor='red';
//     t7.style.color='white';
//    }

//    var t8 = document.createElement('td')
//    t8.innerText= 'Delete'
 
//    tr.append(t1,t2,t3,t4,t5,t6,t7,t8)
//     t8.addEventListener("click",deleterow)

//    document.querySelector("tbody").append(tr)
// }

//    function deleterow ()
//    {
//      event.target.parentNode.remove();
//    }