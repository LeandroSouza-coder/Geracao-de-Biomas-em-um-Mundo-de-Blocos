// Lê a quantidade de golpes informada pelo usuário.
// O parseInt(()) vai converter os valores de entrada(string) para um valor numérico(Int).
const quantidadeGolpes = parseInt(gets());

// Definição dos tipos de minerais
let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = (i - 1) % minerais.length;
  
  // Exibe o índice i, concatena com o caractere ":", e o tipo de mineral correspondente
  print(i + ": " + minerais[minaIndex]);
}
