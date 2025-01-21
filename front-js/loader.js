leftPanel = document.querySelector(".leftPanel")
rightPanel = document.querySelector(".rightPanel")

initButton = document.querySelector(".initButtonContainer")

buttonCenter = document.querySelector(".centerInitButton")
buttonStroke = document.querySelector(".strokeInitButton")

loader = document.querySelector(".loader")

body = document.querySelector("body")

const sleepBlocking = ms => {
  const end = Date.now() + ms;
  while (Date.now() < end) {} // Boucle bloquante
};


// sleepBlocking(500); // Pause bloquante de 500 ms


initButton.addEventListener("click", function (e) {
  initButton.classList.add("initBounce")
  leftPanel.classList.add("lpLeave")
  rightPanel.classList.add("a")

  loader.classList.add("loaderReduce")

  body.classList.add("blackBody")

})


