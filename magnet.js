// const target = document.querySelector(".initButtonContainer");
// const distanceDisplay = document.querySelector(".centerInitButton");


// window.addEventListener("mousemove", (event) => {
//   // Coordonnées de la souris
//   const mouseX = event.clientX;
//   const mouseY = event.clientY;

//   // Coordonnées de la div
//   const rect = target.getBoundingClientRect();
//   const divCenterX = rect.left + rect.width / 2;
//   const divCenterY = rect.top + rect.height / 2;

//   // Calcul de la distance entre la souris et le centre de la div
//   const dx = mouseX - divCenterX;
//   const dy = mouseY - divCenterY;
//   const distance = Math.sqrt(dx * dx + dy * dy);

//   // Mise à jour de l'affichage
//   distanceDisplay.textContent = `Distance: ${Math.round(distance)}px`;
// });