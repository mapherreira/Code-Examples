function isColor(data) {
  const result = {
    red: "vermelho",
    blue: "azul",
    green: "verde"
  };
  return result[data] || "Não é cor";
}

console.log(isColor("red"));
