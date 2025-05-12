function rollSaikoro() {
  const slotAnimationTimer = setInterval(function () {
    const messages = ["アイロンビーズ", "映画鑑賞", "サウナ", "ボードゲーム", "謎解き", "散策"];
    const number = Math.floor(Math.random() * 6);
    const imagePath = `./images/saikoro-${number.toString()}.png`;

    document.querySelector("#js-result").setAttribute("src", imagePath);
    document.getElementById("js-text").textContent = ` ${number + 1} ： ${messages[number]}`;
  }, 100);

  setTimeout(function () {
    clearInterval(slotAnimationTimer);
  }, 3000);
}

document.querySelector("#js-button").addEventListener("click", rollSaikoro);
