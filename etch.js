const grid = document.querySelector(".grid");

for (let i = 0; i < 256; i++) {
  let multiply = document.createElement("div");
  multiply.classList.add("class");
  multiply.setAttribute("id", `box${i + 1}`);
  grid.appendChild(multiply);
}

// document.querySelectorAll(".items").forEach((item) => {
//   item.addEventListener("mouseover", (event) => {
//     item.style.backgroundColor = "black";
//   });
// });

document.getElementById("box").addEventListener("mouseover", (event) => {
  const selectedId = event.target.id;
  console.log(selectedId);
  const selectedDiv = document.getElementById(selectedId);
  console.log(selectedDiv);
  selectedDiv.style.backgroundColor = "black";
});
