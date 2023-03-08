const grid = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
  let multiply = document.createElement("div");
  multiply.classList.add("item-" + (i + 1));
  multiply.setAttribute("id", "boxes");
  grid.appendChild(multiply);
}

document.getElementById("boxes").addEventListener("mouseover", function () {
  document.getElementById("boxes").style.backgroundColor = "green";
});

document.getElementById("boxes").addEventListener("mouseout", function () {
  document.getElementById("boxes").style.backgroundColor = "red";
});
