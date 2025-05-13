function isColor(data) {
  if(data == "red") {
    return "vermelho";
  } else if (data == "blue") {
    return "azul";
  } else if (data == "green") {
    return "verde";
  } else {
    return "não é cor";
  }
}

console.log(isColor("red"));
