const pre = document.querySelector(".profile-card");

document.addEventListener("mousemove", (e) => {
    rotateElement(e, pre);
})

function rotateElement(event, element){
    const x = event.clientX;
    const y = event.clientY;
    // console.log(x, y);

    const middleX = window.innerWidth /2;
    const middleY = window.innerHeight /2;

    const offsetX = ((x - middleX) / middleX) * 45;    
    const offsetY = ((y - middleY) / middleY) * 45;
    console.log(offsetX, offsetY);

    element.style.setProperty("--rotateY", -1 * offsetX + "deg")
    element.style.setProperty("--rotateX", offsetY + "deg")

}

//  Imported solifitae