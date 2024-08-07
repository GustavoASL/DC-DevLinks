function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("Bat")

  // pegar a tag img
  let img = document.querySelector("#profile img")

  if (html.classList.contains("Bat")) {
    img.setAttribute("src", "./Assets/Avatar/avatar-bat.png")
    img.setAttribute("alt", "Gustavo sorrindo, camisa preta e fundo cinza")
  } else {
    img.setAttribute("src", "./Assets/Avatar/avatar-super.png")
    img.setAttribute("alt","Gustavo sorrindo usando óculos, blusa azul com fundo azul")
  }

  img = document.querySelector("#marca img")
  if (html.classList.contains("Bat")) {
    img.setAttribute("src", "./Assets/Marca/Bat-marca.png")
    img.setAttribute("alt", "Logo escrito Batman")
  } else {
    img.setAttribute("src", "./Assets/Marca/Super-marca.png")
    img.setAttribute("alt", "Logo escrito Superman em vermelho e amarelo")
  }
}
