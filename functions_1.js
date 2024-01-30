// // function expression
// // function anonymous

// let total = 0
// // parâmetros (parameters)
// const sum = function(number1, number2) {
//   // console.log(number1 + number2)
//   let total = number1 + number2
//   return total
// }

// // sum(2, 3) // arguments - argumentos 

// let number1 = 34
// let number2 = 25

// // console.log(`o número 1 é ${number1}`)
// // console.log(`o número 2 é ${number2}`)
// console.log(`a soma é ${sum(number1, number2)}`)
// console.log(total)

// function scope
// let subject = 'create video'
// let subject

// function createThink() {
//   subject = 'study'
//   return subject
// }

// console.log(subject)
// console.log(createThink())
// console.log(subject)

// function hoisting

// sayMyName()

// function sayMyName() {
//   console.log('Furkan')
// }

// Arrow function

// const sayMyName = (name) => {
//   console.log(name)
// }

// sayMyName('Furkan')

// Callback function 

// function sayMyName(name) {
//   console.log('antes de executar a função callback')

//   name()

//   console.log('depois de executar a callback')
// }

// sayMyName(
//   () => {
//     console.log('estou em uma callback')
//   }
// )

/*
  Function() construtor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

// let name = new String("Furkan")

// console.log(name)

// let date = new Date("2020-12-01")

// console.log(date)

// function Person(name) {
//   this.name = name
//   this.walk = function() {
//     return this.name + " está andando"
//   }
// }

// const furkan = new Person("Furkan")
// const joao = new Person("João")

// console.log(furkan.walk())
// console.log(joao.walk())


/*
  Prototype

  * prototype-based language
  * prototype chain
  * __proto__
*/

/*
  Type convesion (typecasting) vs Type coersion

  * Alteração de um tipo de dado para outro tipo

  console.log('9' + 5)

  console.log(Number('9') + 5)
  */
 
/*

  Manipulando Strings e Números

  Transformar String em Número e Número em String 

  let string = "123"
  console.log(Number(string))
  let number = 321
  console.log(String(number))

*/

/*
  Manipulando Strings e Números

  Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

  let word = "Paralelepipedo"
  console.log(word.length)
  let number = 1234
  console.log(String(number).length)

  Transforma um número quebrado com 2 casas decimais e trocar ponto por vírgula

  let number = 345.33452345
  console.log(number.toFixed(2).replace(".", ",")) //retorna uma string

  Transforme letras minúsculas em maiúsculas. Faça o contrário disso também

  let word = "Programar é muito bacana!"
  // console.log(word.toUpperCase()) 
  console.log(word.toLowerCase().toUpperCase())
*/

/*
  Manipulando Strings e Arrays

  Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

  let phrase = "Eu quero viver o Amor!"
  let myArray = phrase.split(" ")
  console.log(myArray)
  
  let phraseWithUnderscore = myArray.join("_")
  console.log(phraseWithUnderscore.toLowerCase())
  console.log(phraseWithUnderscore)
*/

/*
  Manipulando Strings

  Verificar se o texto contém a palavra Amor

  let phrase = "Eu quero viver o Amor!"
  console.log(phrase.includes("Amor"))

*/

/*
  Manipulando Arrays

  Criar Array com construtor

  // let myArray = ['a', 'b', 'c'] 
  let myArray = new Array(10)  // com posições vazias
  // let myArray = new Array('a', 'b', 'c') // com construtor 
  console.log(myArray)

  Contar elementos de um array

  console.log(["a",
  {type: "array"},
   function() { return "alo"},
  ].length)
  
  console.log(["a",
  {type: "array"},
   function() { return "alo"},
  ] [2] ())
  
  console.log(["a", "b", "c"].length)

  Transformar uma cadeia de caracteres em elementos de um array

  let word = "manipulação"
  console.log(Array.from(word))

*/

/*
  Manipulando Arrays

  let techs = ["html", "css", "js"]

  Adicionar um item no fim
  techs.push("nodejs") 

  Adicionar no começo
  techs.unshift("sql")

  Remover do fim
  techs.pop()

  remover do começo
  techs.shift()

  Pegar somente alguns elementos do array
  console.log(techs.slice(1,3))

  Remover 1 ou mais itens em qualquer posição do array
  techs.splice(1,2)

  Encontrar a posição de um elemento no array

  let index = techs.indexOf('css')
  console.log(index)
  techs.splice(index, 1)
  
  console.log(techs)

*/














