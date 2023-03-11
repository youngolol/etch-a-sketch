const grid = document.querySelector(".grid");

for (let i = 0; i < 256; i++) {
  let multiply = document.createElement("div");
  multiply.classList.add("class");
  multiply.setAttribute("id", `box${i + 1}`);
  grid.appendChild(multiply);
}

// this method will create event listeners for every div
// document.querySelectorAll(".items").forEach((item) => {
//   item.addEventListener("mouseover", (event) => {
//     item.style.backgroundColor = "black";
//   });
// });

// this method ultimately creates an event listener for whatever div is hovered over
document.getElementById("box").addEventListener("mouseover", (event) => {
  const selectedId = event.target.id;
  console.log(selectedId);
  const selectedDiv = document.getElementById(selectedId);
  console.log(selectedDiv);
  selectedDiv.style.backgroundColor = "black";
});

// creating slider bar to enact the following function: change grid size relative to the slider value within the dimensions of the original bo in 16x16

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

// get value of element
// input eventlistener via DOM manip for user input of slider change
// square value insert into variable
// adjust for-loop to account for change to grid size and spit out appropriate grid
