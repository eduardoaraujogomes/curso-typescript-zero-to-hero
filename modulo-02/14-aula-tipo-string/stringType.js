"use strict";
/**
 * arquivo: stringType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo String'
 * data: 14/03/2021
 * author: Glaucia Lemos <@glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ==> Exemplo 01 - Single Quotes
let nomeCompleto = 'Eduardo de Araújo';
console.log(nomeCompleto);
// ==> Exemplo 02 - Double Quotes
let funcaoEmpresa = "Full Stack Developer";
console.log(funcaoEmpresa);
// ==> Exemplo 03 - Back Ticks
let nomeEmpresa = 'Kukac';
let dadosFuncionario = `Seja bem-vindo ${nomeCompleto}, sua função na ${nomeEmpresa} é ${funcaoEmpresa}.`;
console.log(dadosFuncionario);
