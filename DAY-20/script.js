function storeData(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let course = document.getElementById("course").value;
  let unit = document.getElementById("unit").value;
  let image = document.getElementById("image").value;
  let batch = document.getElementById("batch").value;
  let AllStudents = { name, course, unit, image, batch };

  let data = JSON.parse(localStorage.getItem("AllStudents")) || [];
  data.push(AllStudents);

  localStorage.setItem("students", JSON.stringify(data));
  alert("Students Add");

  document.getElementById("students_data").reset();
}

function showBatchCount() {
  let students = JSON.parse(localStorage.getItem("AllStudents")) || [];
  let batchCount = {};

  students.forEach((s) => {
    batchCount[s.batch] = (batchCount[s.batch] || 0) + 1;
  });

  let nav = document.querySelector("#navbar");
  nav.innerHTML = "";

  for (let b in batchCount) {
    let span = document.createElement("span");
    span.textContent = `${b} - ${batchCount[b]} | `;
    nav.append(span);
  }
}
showBatchCount();
