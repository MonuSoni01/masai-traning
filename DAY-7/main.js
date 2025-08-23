document.querySelector("form").addEventListener("submit", myfunction);

function myfunction() {
  event.preventDefault();

    var image = document.getElementById('image').value;
    var name = document.getElementById('name').value;
    var batch = document.getElementById('batch').value;
    var dsa = document.getElementById('dsa').value;
    var cs = document.getElementById('cs').value;
    var coding = document.getElementById('coding').value;

    console.log(image,name,batch,dsa,cs,coding);

   var tr = document.createElement("tr")
   var img = document.createElement('img')
   img.setAttribute('src',image)
   img.setAttribute('class','person_avatar')
   tr.append(img)

   document.querySelector('tbody').append(tr);

   var t1 = document.createElement("td")
   t1.innerText= name
   var t2 = document.createElement("td")
   t2.innerText= batch
   var t3 = document.createElement("td")
   t3.innerText= dsa
   var t4 = document.createElement("td")
   t4.innerText= cs
   var t5 = document.createElement("td")
   t5.innerText= coding
   var t6 = document.createElement("td")
    var totalMarks = Number(dsa)+Number(cs)+Number(coding)
   var score =(totalMarks/30)*100
   t6.innerText= score
    

   tr.append(t1,t2,t3,t4,t5,t6 )


}