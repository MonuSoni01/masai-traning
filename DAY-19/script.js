function students(n, c, i, b) {
  this.name = n;
  this.course = c;
  this.image = i;
  this.batch = b;
}

function dataStore(e) {
  e.preventDefault();

  let formData = document.getElementById("dataform");
  let name = formData.name.value;
  let course = formData.course.value;
  let image = formData.image.value;
  let batch = formData.batch.value;
  // console.log(name,course,image,batch)

  let s1 = new students(name, course, image, batch);

  let data = JSON.parse(localStorage.getItem("students")) || [];

  data.push(s1);

  localStorage.setItem("students", JSON.stringify(data));

  console.log(s1);
}
