function generateRandomColor() {
  //RGB
  //#FFFFFF
  //0123456789ABCDEF
  let color = "#";
  for (let i = 0; i < 3; i++) {
    const randNum = generateRandomNumberInRange(0, 255);
    const randHex = randNum.toString(16).padStart(2, "0");
    color += randHex;
  }
  console.log(color);
  return color;
}

function generateRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function setColors() {
  const divNodes = document.querySelectorAll(".col");
  divNodes.forEach(function (divNode) {
    const iNode = divNode.querySelector("button").children[0];
    if (Array.from(iNode.classList).includes("fa-lock")) return;
    const color = chroma.random();
    divNode.style.backgroundColor = color;
    const h2Node = divNode.querySelector("h2");
    h2Node.textContent = color;
    h2Node.style.color = color.luminance() > 0.5 ? "black" : "white";
  });
}

document.body.addEventListener("keydown", function (event) {
  event.preventDefault();
  if (event.code.toLowerCase() === "space") {
    setColors();
  }
});

document.body.addEventListener("click", function (event) {
  switch (event.target.dataset.type) {
    case "lock":
      const tag = event.target.tagName.toLowerCase();
      const node = tag === "i" ? event.target : event.target.children[0];
      node.classList.toggle("fa-lock-open");
      node.classList.toggle("fa-lock");
      break;
    case "copy":
      navigator.clipboard.writeText(event.target.textContent);
    default:
      break;
  }
});

setColors();

//HTML - Hyper Text Markup Language
//HTTP - Hyper Text transfer protocol

//DOM - Document Object Model

