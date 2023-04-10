const grid = document.querySelector(".grid");

// get value of element
// input eventlistener via DOM manip for user input of slider change
// square value insert into variable
// adjust for-loop to account for change to grid size and spit out appropriate grid
// code below will execute as desired, but will never adjust down; only up
document.addEventListener("mouseup", function () {
  const sliderId = document.getElementById("gridsize").value;
<<<<<<< HEAD
  console.log(sliderId);
  const sliderSq = Math.pow(sliderId, 2);
  for (let i = 0; i < sliderSq; i++) {
    let multiply = document.createElement("div");
    multiply.classList.add("class");
    multiply.setAttribute("id", `box${i + 1}`);
    grid.appendChild(multiply);
=======
  for (let i = 0; i < sliderId; i++) {
    let row = document.createElement("div");
    grid.appendChild(row);

    for (let j = 0; j < sliderId; j++) {
      let column = document.createElement("div");
      column.classList.add("box");
      column.setAttribute("id", "innerBox");
      column.style.width = `${960 / sliderId}px`;
      column.style.height = `${500 / sliderId}px`;
      row.appendChild(column);
    }
>>>>>>> e1e65fa (Change initial creation of divs into nested loop for columns and rows. Modify HTML to create containers for children. Modify CSS to adjust grid accordingly within given space)
  }
});

// this method will create event listeners for every div
// document.querySelectorAll(".items").forEach((item) => {
//   item.addEventListener("mouseover", (event) => {
//     item.style.backgroundColor = "black";
//   });
// });

// this method ultimately creates an event listener for whatever div is hovered over
<<<<<<< HEAD
document.getElementById("box").addEventListener("mouseover", (event) => {
  const selectedId = event.target.id;
  // console.log(selectedId);
  const selectedDiv = document.getElementById(selectedId);
  // console.log(selectedDiv);
  selectedDiv.style.backgroundColor = "black";
});
=======
// document.getElementById("innerBox").addEventListener("mouseover", (event) => {
//   const selectedId = event.target.id;
//   console.log(selectedId);
//   const selectedDiv = document.getElementById(selectedId);
//   console.log(selectedDiv);
//   selectedDiv.style.backgroundColor = "black";
// });

grid.addEventListener("mouseover", fill);
function fill(event) {
  let box = event.target;
  return (box.style.backgroundColor = "black");
}
>>>>>>> e1e65fa (Change initial creation of divs into nested loop for columns and rows. Modify HTML to create containers for children. Modify CSS to adjust grid accordingly within given space)

// creating slider bar to enact the following function: change grid size relative to the slider value within the dimensions of the original bo in 16x16

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }
