leftPanel = document.querySelector(".leftPanel")
rightPanel = document.querySelector(".rightPanel")

initButton = document.querySelector(".initButtonContainer")

buttonCenter = document.querySelector(".centerInitButton")
buttonStroke=document.querySelector(".strokeInitButton")

body=document.querySelector("body")

initButton.addEventListener("click",function (e){
    leftPanel.style.transform = "translateX(-100%)"
    rightPanel.style.transform = "translateX(100%)"
    initButton.style.width = "0px"
    buttonCenter.classList.add("centerInitButtonOff")
    buttonStroke.classList.add("strokeInitButtonOff")
    body.style.backgroundColor="black"
    
})


const target = document.querySelector('.initButtonContainer');

    // Ajouter un écouteur d'événement pour tout déplacement de souris
    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX; // Position X de la souris
        const mouseY = event.clientY; // Position Y de la souris
  
        // Obtenir les coordonnées de la div
        const rect = target.getBoundingClientRect();
        const divCenterX = rect.left + rect.width / 2; // Centre X de la div
        const divCenterY = rect.top + rect.height / 2; // Centre Y de la div
  
        // Calculer la distance euclidienne entre la souris et le centre de la div
        const distance = Math.sqrt(
          Math.pow(mouseX - divCenterX, 2) + Math.pow(mouseY - divCenterY, 2)
        );
  
        // Afficher la distance en console
        console.log(`Distance: ${distance.toFixed(2)} pixels`);
      });