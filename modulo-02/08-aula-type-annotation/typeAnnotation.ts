/* eslint-disable prettier/prettier */
/**
 * arquivo: typeAnnotation.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Type Annotation'
 * data: 16/02/2021
 * author: Glaucia Lemos <@glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */


// ==> Variáveis [Type Annotations]
let nome: string = 'Eduardo de Araújo';
console.log(nome);

// ==> Arrays [Type Annotations]
let animais: string[] = ['Cachorro', 'Gato', 'Coelho', 'Panda', 'Girafa'];
console.log(animais);

// ==> Objetos [Type Annotations]
let carro: {
  nome: string,
  ano: number,
  preco: number;
};

carro = { nome: 'Fusca', ano: 1970, preco: 10000 };
console.log(carro);


// ==> Functions [Type Annotation]
function multiplicarNumero(num1: number, num2: number) {
  return num1 * num2;
}
console.log(multiplicarNumero(10, 20));

