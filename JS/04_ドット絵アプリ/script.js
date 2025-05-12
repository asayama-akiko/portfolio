const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const gridSize = 20;
const gridCount = canvas.width / gridSize;
let currentColor = "black";

// グリッドの描画
function drawGrid() {
  ctx.strokeStyle = "lightgray";
  for (let x = 0; x < gridCount; x++) {
    for (let y = 0; y < gridCount; y++) {
      ctx.strokeRect(x * gridSize, y * gridSize, gridSize, gridSize);
    }
  }
}

// ドットの描画
function drawDot(x, y) {
  ctx.fillStyle = currentColor;
  ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
}

// マウスクリック時の処理
canvas.addEventListener("mousedown", (event) => {
  const x = Math.floor(event.offsetX / gridSize);
  const y = Math.floor(event.offsetY / gridSize);
  drawDot(x, y);
});

// カラーパレットの処理
const palette = document.getElementById("palette");
const colors = document.querySelectorAll(".color");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    currentColor = color.style.backgroundColor;
    color.style.border = "2px solid pink";
  });
});

// 初期描画
drawGrid();
