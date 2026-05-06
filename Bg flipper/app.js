let colors = [
  "green",
  "red",
  "blue",
  "Crimson",
"Azure",
"Emerald",
"Amber",
"Indigo",
"Teal",,
"Magenta",
"Cyan",
"Coral",
"Violet",
"Sage",
"Terracotta",
"Ochre",
"Slate",
"Olive",
"Ivory",
"Charcoal",
"Champagne",
"Mauve",
"Turquoise",
];

function changeColor() {
    
    let randomNum  = Math.floor(Math.random() * colors.length)
    let text = document.getElementById("colorName")


    


  let bodyTag = document.getElementsByTagName("body")[0];

  if(bodyTag.style.backgroundColor == "black"){
    text.style.color = "white"
  }

  console.log(bodyTag.style.backgroundColor)
  console.log(bodyTag.style.backgroundColor == "black")
  bodyTag.style.backgroundColor = colors[randomNum];
  text.innerText = colors[randomNum]
  text.style.textTransform = "uppercase" 
}