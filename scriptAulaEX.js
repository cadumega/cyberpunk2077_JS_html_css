/* Seleção e retorna elementos do DOM, que contém 'text' */
const cyber = document .getElementById('cyber');
console.log (cyber);

/*  Retornam uma lista de elementos do DOM, lista ao vivo caso atualize */
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[2]);

/* querySlector retorna o primeiro elemento que combinar com o seu seletor CSS */
const primeiraUl = document.querySelector('ul');
console.log(primeiraUl)

/* Selecionar todos os links internos */
const linkInterno = document.querySelector(`[href^="#"]`);  /* ^significa começa com */  /* CRASE !! */
console.log(linkInterno.href);

/* querySelectorAll para retornar todos os elementos compatíveis com o CSS em uma node List, aqui é estática a lista e não atualiada em tempo real*/
const cyberImg = document.querySelectorAll(`.cyber img`);  
/* tags imgs dentro de class cyber , poderia selecionar com # */ 
console.log(cyberImg[0]); 

const gridSectionHTML = document.getElementsByClassName(`grid-section`);
/* quando é nome não começa com ponto !!! não é .grid já abaixo pode*/

/* marcar o grid */
const gridSectionNode= document.querySelectorAll (`.grid-section`);

primeiraUl.classList.add('grid-section');  /* aparecer a ul li */

console.log (gridSectionHTML[0]);
console.log (gridSectionNode[0]);

/* Array-Like HTMLCollection e NodeList são array-like, parecem array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList */
gridSectionNode.forEach(function(item, index) {  /* 1°arg é sempre o item */
  console.log (item);
});

/* Transformar Array-Like em Array */
const arrayGrid= Array.from(gridSectionHTML); /* estática por ser Array */
/* arrayGrid.pop(0) remove o último item */

arrayGrid .forEach(function(item){
  console.log(item);
})


// Retorne no consle todas as imagens do site */
const img = document.querySelectorAll('img');

//Retorne no console apenas as imagens que começaram com a palavra img
const imagensCyber = document.querySelectorAll(`img[src^='img/img']`);
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .cyber-descrição
const h2Cyber = document.querySelector(`.cyber-descricao`);
const h2Cyber = document.querySelector(`h2`);

console.log(cyber);
console.log(h2Cyber);

//Selecionar o último p do site
const paragrafos = document.querySelectorAll ('p');

console.log(paragrafos (paragrafos.length -1))  /* não coloco -- por não dar certo */