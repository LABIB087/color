const colors = [
  "#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71",
  "#f1c40f", "#27ae60", "#e84393", "#f39c12", "#d35400",
  "#c0392b", "#9b59b6", "#1abc9c", "#2c3e50", "#f7dc6f",
  "#8f7a66", "#16a085", "#d35400", "#c0392b", "#95a5a6",
  "#bdc3c7", "#e74c3c", "#2980b9", "#d35400", "#f1c40f",
  "#7f8c8d", "#d35400", "#2c3e50", "#1abc9c", "#e74c3c",
  "#f39c12", "#d35400", "#8e44ad", "#2c3e50", "#f7dc6f",
  "#16a085", "#7f8c8d", "#f1c40f", "#95a5a6", "#8e44ad",
  "#bdc3c7", "#f7dc6f", "#95a5a6", "#e74c3c", "#3498db",
  "#f1c40f", "#27ae60", "#9b59b6", "#16a085", "#2c3e50",
  "#f7dc6f", "#2980b9", "#95a5a6", "#8e44ad", "#f39c12",
  "#7f8c8d", "#d35400", "#2c3e50", "#e67e22", "#3498db",
  "#e74c3c", "#8e44ad", "#1abc9c", "#f1c40f", "#bdc3c7",
  "#16a085", "#d35400", "#f7dc6f", "#2c3e50", "#95a5a6",
  "#3498db", "#e67e22", "#7f8c8d", "#bdc3c7", "#f39c12",
  "#2ecc71", "#2980b9", "#16a085", "#8f7a66", "#d35400",
  "#c0392b", "#f7dc6f", "#95a5a6", "#1abc9c", "#f1c40f",
  "#8e44ad", "#2ecc71", "#d35400", "#3498db", "#e74c3c",
  "#f39c12", "#16a085", "#7f8c8d", "#bdc3c7", "#2c3e50",
  "#e67e22", "#d35400", "#f7dc6f", "#2980b9", "#c0392b", "#b7c0c7", "#fdd7b5", "#4e4b4a", "#8b7d82", "#bf94e4",
  "#edbfb7", "#e0c2fc", "#b3e6f7", "#f3d3c7", "#b1f1ec",
  "#c9f9ff", "#efbbff", "#f7d8d4", "#b5e5c5", "#f5d5cb",
  "#dcf5e1", "#c7d8f5", "#f0e3e3", "#d3c8f3", "#f7c5c5",
  "#f8e0d2", "#e6c3fc", "#d8f3eb", "#c1b6f1", "#f7d8d8",
  "#e6e2ff", "#e5d5f5", "#e5f5f5", "#f8d5d5", "#f5c5c5",
  "#f5d5e5", "#f5e5c7", "#d5f5c7", "#f5d5c7", "#f5f5c7",
  "#e5f5d5", "#c7d5f5", "#f5c7d5", "#d5f5e5", "#f5f5e5",
  "#e5c7f5", "#f5c7e5", "#d5f5f5", "#f5e5f5", "#e5c7d5",
  "#d5c7f5", "#f5c7f5", "#c7f5e5", "#c7f5d5", "#f5f5d5",
  "#c7d5e5", "#f5f5c7", "#f5d5d5", "#d5c7e5", "#f5e5c7",
  "#c7f5f5", "#f5c7c7", "#d5e5f5", "#c7f5c7", "#f5c7c7",
  "#f5d5f5", "#f5f5e5", "#d5c7d5", "#f5c7e5", "#f5e5d5",
  "#d5f5d5", "#c7e5f5", "#e5f5c7", "#f5d5c7", "#f5f5c7",
  "#e5c7c7", "#d5f5c7", "#f5e5e5", "#c7d5d5", "#f5c7f5",
  "#d5c7c7", "#f5c7d5", "#e5f5d5", "#f5c7e5", "#f5e5d5",
  "#f5f5d5", "#c7e5d5", "#c7f5d5", "#f5d5e5", "#d5e5c7",
  "#c7d5c7", "#f5f5e5", "#f5d5c7", "#d5c7d5", "#f5c7f5", "#c7f5e5", "#f5c7d5", "#d5f5f5", "#c7e5c7", "#f5d5e5",
  "#f5f5c7", "#c7d5e5", "#f5c7c7", "#d5f5c7", "#f5e5e5",
  "#f5c7d5", "#e5f5c7", "#d5c7d5", "#f5f5d5", "#c7f5d5",
  "#e5c7f5", "#f5c7c7", "#d5e5f5", "#c7f5e5", "#f5d5d5",
  "#c7c7f5", "#f5c7e5", "#f5e5c7", "#d5f5c7", "#f5d5c7",
  "#f5f5e5", "#c7e5d5", "#d5c7f5", "#f5e5d5", "#f5f5d5",
  "#c7f5c7", "#d5e5d5", "#f5c7f5", "#c7c7d5", "#e5d5f5",
  "#f5d5e5", "#c7d5f5", "#f5e5c7", "#f5f5c7", "#d5c7c7",
  "#f5c7d5", "#e5f5d5", "#c7f5e5", "#f5d5c7", "#d5f5f5",
  "#c7e5c7", "#f5e5e5", "#f5f5c7", "#d5c7d5", "#f5c7f5",
  "#e5f5c7", "#d5f5e5", "#f5d5c7", "#c7d5e5", "#f5f5d5",
  "#c7f5d5", "#e5c7f5", "#f5c7c7"

];

var button = document.getElementById('btn');


var body = document.getElementById('body');


var inputBox = document.getElementById('color');

button.addEventListener('click', getchenge);

function getchenge() {
  var randomIndex = Math.floor(Math.random() * colors.length);

  var randomColor = colors[randomIndex];

  body.style.backgroundColor = randomColor;

  inputBox.innerText = randomColor;

}