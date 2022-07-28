//parte 1 criação de arrays

// const doguinhos = ["fera", "susi", "pitucha"]
// const numeros = [2,4,6, -7, 10, 56]
// const arrayMisto = [10, "Olá", true]
// const umItem = [1]
// const vazio = []


// //parte 2 observação

// console.log(doguinhos.length); //3
// console.log(doguinhos[3]); //undefined
// console.log(arrayMisto.includes(10));
// console.log(arrayMisto.includes("Olá"));
// console.log(arrayMisto.includes(true));
// console.log(umItem);
// console.log(umItem.length);

// //parte 3 manipulação

// // const copiaDoguihos = doguinhos
// // console.log(copiaDoguihos, doguinhos);
// // copiaDoguihos.push("safira")
// // console.log(copiaDoguihos, doguinhos);

// // const copiaDoguihos = doguinhos.slice()
// // console.log(copiaDoguihos, doguinhos);
// // copiaDoguihos.push("safira")
// // console.log(copiaDoguihos, doguinhos);
// // copiaDoguihos.splice(2,2)
// //             (indice, quantidade)
// // console.log(copiaDoguihos, doguinhos);

// console.log(doguinhos);
// console.log(doguinhos.sort());
// console.log(numeros);
// console.log(numeros.sort());



//exercicio em grupo

const novaArray = [1,7,5,9]
console.log("Números sem ordem específica",'\n', novaArray);

const novaArray2 = novaArray.sort()
console.log("Números em ordem crescente",'\n',novaArray2);

const novaArray3 = novaArray2.reverse()
console.log("Números em reverso",'\n',novaArray3);

novaArray3.pop()
novaArray3.push(6)
console.log("Adicionando o número 6",'\n',novaArray3);

novaArray3.splice(2,1);
console.log("Removendo o número do índice 2",'\n',novaArray3);
