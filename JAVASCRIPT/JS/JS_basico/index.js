/*

// O comando alert no JavaScript é usado para mostrar uma mensagem em uma caixa de diálogo para o usuário. 
// A execução do código é pausada até que o usuário feche a caixa de alerta.
alert("Hello World!");


// console.log é uma função que imprime informações no console do navegador. É super útil para debugar e entender o comportamento do seu código.
// Pode-se usar console.log para inspecionar variáveis, objetos, arrays e até resultados de funções. Ele suporta múltiplos argumentos e até mesmo placeholders para facilitar a formatação de mensagens.
console.log("Olá, Mundo!");


//let tem escopo de bloco, o que significa que é visível apenas dentro do bloco onde foi declarada (como dentro de loops ou condicionais).
let nome = "David Gomes";
let age = 24;
let city = "Salvador";
let country = "Brazil";
// Console utilizado para inspecionar as variáveis que foram declaradas.
console.log(nome, age, city, country);


// Tipos de dados:
let name = "Atos"; // String
let age1 = 20; // Number
let online = false; // Boolean
let list = ["ovo", "carne", "alface", 30]; // Object (array)
let lastName = {nome: "Silva", age: 25}; // Object
// O typeof é utilizado para identificar o tipo de dado que uma variável carrega.
console.log(typeof nome, typeof age1, typeof online, typeof list, typeof lastName);


// Template String:
let nome1 = "Kevin";
let sobrenome = "Silva";
// Permite que você crie strings multi-linha e insira expressões de forma interpolada, tudo isso de forma muito mais elegante e legível do que com concatenação de strings tradicionais.
let nomeCompleto = `${nome1} ${sobrenome}`; 
console.log("Nome: " + nomeCompleto);


// Condicional if/else:
let age2 = 17;
// && (and) retorna TRUE se as ambas as condições forem verdadeiras.
// || (ou) retorna TRUE se pelo menos uma das condições for verdadeira. 
if ((age2 >= 18) && age2 == 20 || age2 == 30 ) { 
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade.");
}



// A cláusula else if em JavaScript permite adicionar condições adicionais após um if inicial.
// Ela ajuda a verificar múltiplas condições de maneira sequencial.
let hora = 18;

if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}


// Condicional Ternária é uma maneira concisa de escrever uma instrução condicional if-else em uma única linha.
// Ela é composta por três partes: uma condição, uma expressão a ser retornada se a condição for verdadeira e uma expressão a ser retornada se a condição for falsa.
// A sintaxe básica é: condição ? expressão_se_verdadeiro : expressão_se_falso;
let isMember = false;
let shipping = isMember ? 2 : 10;

console.log(isMember ? "Você é membro." : "Você não é membro.");
console.log("Frete: " + shipping);


// SWITCH: é usada para executar uma das várias instruções com base no valor de uma expressão. É uma alternativa ao uso de múltiplos if...else if...else.
let profession = "Bombeiro";

console.log("Profissão: " + profession);

switch (profession) {
    case "Bombeiro":
        console.log("Sua camisa será VERMELHA.");
        break;
    case "Policial":
        console.log("Sua camisa será AZUL.");
        break;
    case "Fiscal":
        console.log("Sua camisa será VERDE.");
        break;
    default:
        console.log("Sua camisa será PRETA.");
        break;
}


// FUNÇÕES: Uma função é um bloco de código projetado para executar uma tarefa específica. Você pode pensar nela como um conjunto de instruções agrupadas que podem ser chamadas sempre que necessário, o que ajuda a tornar o código mais modular e reutilizável.
function gravidade() {
  console.log("A gravidade do planeta Terra é: ");
  console.log('9.8');
}
console.log('Fullstack em andamento. Mas lembre-se: você pode mais!');
gravidade();

// PARÂMETROS para FUNÇÕES são variáveis que você define na declaração da função e que servem como entradas para a função. Eles permitem que você passe diferentes valores para a função, tornando-a mais flexível e reutilizável.
function somar(n1, n2) {
  let resultado = n1 + n2;
  console.log('O resultado da soma é: ' + resultado);
}
somar(50,3); 

function nomeCompleto(nome, sobrenome) {
  console.log(`${nome} ${sobrenome}`);
}
nomeCompleto('David', 'Silva');
nomeCompleto('Kevin', 'Gomes');
nomeCompleto('David Kevin', 'Gomes Silva');

//O RETORNO de uma função é o valor que a função fornece após ser executada. Quando return é encontrado, a função para de executar e o valor especificado é devolvido para onde a função foi chamada.
function multiplicar(a, b) {
  return a * b;
}
let resultado = multiplicar(6, 7);
console.log(resultado);

//RETORNO CONDICIONAL 
function maiorDeIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}
let idade = 26;
let verificacao = maiorDeIdade(idade);

if(verificacao) {
  console.log('Maior de idade.');
} else {
  console.log('Menor de idade.')
}

//      EXERCÍCIO 
// Calcule a porcentagem entre 2 números.
// Exemplo: 25% de 40 é 10.
function calcPerc(a,b) {
  return (b / a) * 100;
}
let a = 10;
let b = 2;
let resultado = calcPerc(a,b);
console.log(`${resultado}% de ${a} é ${b}`);


//      EXERCÍCIO 
// Calcule o preço do imóvel
// - m² = 3.000;
// - Se tiver 1 quarto, o m² = 1x;
// - Se tiver 2 quartos, o m² = 1.2x;
// - Se tiver 3 quartos, o m² = 1.5x;
function calcImovel (metros, quartos) {
  let m2 = 3000;
  let preco = 0;

  switch (quartos) {
    case 1:
      preco = (metros * m2);
    break;
    case 2:
      preco = (metros * m2) * 1.2;
    break;
    case 3:
      preco = (metros * m2) * 1.5;
    break;
  }

  return preco;
}

let metros = 130;
let quartos = 2;
let preco = calcImovel(metros, quartos);

console.log(`A casa custa R$${preco}`);

//      EXERCÍCIO 
// Crie uma função que valide usuário e senha.
// Usuário correto: Dgomes
// Senha correta: 001122

function login (usuario, senha) {
  if (usuario === 'Dgomes' && senha === '001122') {
    return true;
  } else {
    return false;
  }
}

let usuario = 'Dgomes';
let senha = '001122a';
let validacao = login(usuario, senha);
if (validacao) {
  console.log('Acesso concedido.');
} else {
  console.log('Acesso negado!');
}

// ARROW FUNCTION: são uma forma mais concisa de escrever funções em JavaScript. Elas têm uma sintaxe mais curta e não vinculam seu próprio this, arguments, super ou new.target. Se a função tiver apenas uma única expressão, você pode omitir as chaves {} e a palavra-chave return.
const somar = (a,b) => {
  return a + b;
}
console.log(somar(5,6));

const divisao = (a,b) => a/b;
console.log(divisao(6,3));

const numero = a => a + 10;
console.log(numero(9));

const nome = n => n + ' Kevin ' + n;
console.log(nome('David'));


// FUNÇÃO DENTRO DE OUTRA FUNÇÃO: é mais indicado utilizar ARROW na função que está contida na principal para não confundir.
function addSquares(a,b) {
  const square = x => x * x;

  let sqrA = square(a);
  let sqrB = square(b);
  return sqrA + sqrB;
}

console.log(addSquares(3,6));


// OBJETOS: Objetos em JavaScript são estruturas que permitem armazenar coleções de dados e funcionalidades. Eles são compostos por pares de chave-valor, onde as chaves (também chamadas de propriedades) são strings (ou símbolos) e os valores podem ser qualquer tipo de dado, incluindo outros objetos ou funções.
let personagem = {
  nome: 'Spartacus',
  idade: 30,
  pais: 'Grécia',
  olhos: ['preto', 'verde'],
  caracteristicas: {
    forca: 50,
    astúcia: 20,
    resistencia: 70,
    magia: 0
  }
}
console.log(personagem);
console.log(personagem.caracteristicas.resistencia);
console.log(`${personagem.nome} possui olhos de cores diferentes: ${personagem.olhos[1]} no olho esquerdo e ${personagem.olhos[0]} no olho direito.`);
console.log(`${personagem.nome} foi é um guerreiro forjado na ${personagem.pais}. Ele foi capturado durante um ataque do Império Romano e se tornou um gladiador. Por se tratar de um guerreiro muito habilidoso a sua resistencia foi melhorada em ${personagem.caracteristicas.resistencia}% mesmo possuindo ${personagem.idade} anos.`);

personagem.idade = 34;
console.log(personagem.idade);

personagem.caracteristicas.forca += 12;
console.log(personagem.caracteristicas.forca);

personagem.olhos.push('castanhos'); // O metodo push só pôde ser usado porque a chave-valor 'olhos' é um array.
console.log(personagem.olhos);

let personagem1 = {
  nome: 'David Gomes',
  idade: 28,
  carros: [
    {modelo: 'BMW', cor: 'preta'},
    {modelo: 'Ferrari', cor: 'azul'},
    {modelo: 'Camaro', cor: 'branco'}
  ]
}
console.log(personagem1.carros[2].modelo);

let pessoa = {
  nome: 'Kevin',
  sobrenome: 'Silva',
  idade: 24,
  nomeCompleto: function() {
    return `${this.nome} ${this.sobrenome}`;
  }
}
console.log(pessoa.nomeCompleto());

let cadastro = {
  firstName: 'Atos',
  lastName: 'Silva',
  fullName: () => {
   return `${cadastro.lastName} ${cadastro.firstName}`;
  }
}
console.log(cadastro.fullName());


// LOOP FOR: O loop for é um dos mais usados e versáteis para executar um bloco de código várias vezes. Ele é especialmente útil quando você sabe de antemão quantas vezes quer repetir uma operação.
for (n =  0; n < 15; n++) { // for(inicialização; condição; incremento){código a ser executado.}
  console.log('Frase de exemplo ' + n);
}

let livros = [
  'Sapiens uma breve história da humanidade', 
  'Homo Deus uma breve história sobre o amanhã', 
  '21 Lições para o século XXI', 
  'Nexus uma breve história sobre as redes de informação', 
  '1984', 
  'A revolução dos bichos', 
  'Duna'
]
console.log('Livros altamente indicados para se adquirir senso crítico: ');
for (n = 0; n < livros.length; n++) {
  console.log(`${livros[n]}`);
}


let autores = [
  {Autor: 'Frank Herbert', livros: ['Duna', ' O Messias de Duna', ' Filhos de Duna']},
  {Autor: 'Youval Noah Harari', livros: ['Sapiens', ' Homo Deus', ' Nexus']},
  {Autor: 'George Orewll', livros: ['1984', ' A revolução dos bichos']},
  {Autor: 'Friedrich Nietzsche', livros: ['Além do bem e do mal', ' Assim falou Zaratustra']}
];
for (let obras of autores) {
  console.log(`Autor: ${obras.Autor}`);
  console.log(`Livros publicados: ${obras.livros}`);
}

let bandas = [
  {vocalista: 'Renato Russo', nome: 'Legião Urbana'},
  {vocalista: 'Cazuza', nome: 'Barão Vermelho'},
  {vocalista: 'Humberto Gessinger', nome: 'Engenheiros do Hawaii'}
];
for (let i in bandas) {
  bandas[i].vocalista = bandas[i].vocalista.toLowerCase();
  bandas[i].nome = bandas[i].nome.toUpperCase();
  console.log(`Vocalista: ${bandas[i].vocalista} - Banda: ${bandas[i].nome}`);
}


// LOOP WHILE: Continua a executar um bloco de código enquanto a condição especificada for verdadeira.


//      EXERCÍCIO 
// 1- Faça um loop que mostre todas as frutas:
let fruits = ['maçã','uva','banana'];
for (x = 0; x < fruits.length; x++ ) {
  console.log(fruits[x]);
}

for (let frt in fruits){
  fruits[frt] = fruits[frt].toLocaleUpperCase();
  console.log(fruits[frt]);
}

// 2- Conte de 1 até 100 através de um LOOP WHILE:
let n = 1;
while (n <= 100) {
  console.log(n);
  n++;
}

// ARRAYS: São listas ordenadas de valores, que podem ser de qualquer tipo (números, strings, objetos, outras arrays, etc.). Eles são úteis para armazenar múltiplos valores em uma única variável, permitindo fácil acesso e manipulação dos dados.
// Arrays compostos (ou arrays multidimensionais) são arrays que contêm outros arrays como elementos. Eles permitem armazenar dados em uma estrutura de tabela, por exemplo.
let listaCores = [
  'blue', 
  'white',
  'green', 
  'black', 
  'brown'
];
console.log(listaCores[0], listaCores[2], listaCores[4], listaCores);

let listaComp = [
  'David',
  ['Azul', 0, 55],
  'Sapiens',
  ['Verde', 'Vermelho', 'Amarelo'],
  87,
  ['X', [100, 200, 500, [1000, 2000, 3000]]]
];
console.log(listaComp[1][2], listaComp[5][1][3][2]);
listaComp.push('Café'); // adc um novo item à lista.
console.log(listaComp);
console.log(`${listaComp.length}`); // saber a qtd de itens da lista.

listaComp.shift(); // remove o primeiro item da lista.
listaComp.pop(); // remove o último item da lista.
listaComp.sort(); // põe a lista em ordem alfabética.
listaComp.reverse(); // reverte a ordem da lista "os últimos serãos os primeiros".
console.log(listaComp);
console.log(`${listaComp.length}`); // saber a qtd de itens da lista.
listaComp.join(); // serve para acrescentar um caractere a TODOS os itens da lista;

let cars = [
  {brand: 'Fiat', year: 2022},
  {brand: 'BMW', year: 2020},
  {brand: 'Ferrari', year: 2018}
]
cars.sort(a,b => {
  if (a.year > b.year){
    return 1;
  } else if (a.year < b.year){
    return -1;
  } else {
    return 0;
  }
})
console.log(cars);

//      EXERCÍCIO 
// 1- No array abaixo, qual o número que pega a Ferrari?
let carros = [
  'BMW',
  'Ferrari',
  'Mercedes'
];
console.log('1- ' + carros[1]);

// 2- Troque a Ferrari por Audi:
carros[1] = 'Audi';
console.log('2- ' + carros);

// 3- Adicione o Volvo à lista:
carros.push('Volvo');
console.log('3- ' + carros);

// 4- Exiba quantos itens tem no Array:
console.log('4- ' + `A lista possui: ${carros.length} itens.` );



// Somente palavras com mais de 4 letras.
let words = ['Polis', 'pé', 'casa', 'amarelo', 'sim', 'dinheiro'];

let bigWords = words.filter((value) => {
  if (value.length > 4) {
    return true;
  } else {
    return false;
  }
})
console.log(bigWords);

// Somente palavras com 5 letras.
let colors = ['red', 'blue', 'yellow','black', 'brown', 'white', 'green', 'pink'];

let smallColors = colors.filter((value) => {
  return value.length === 5;
})
console.log(smallColors);

// Somente se TODOS atenderem ao parâmetro estabelecido.
let all = colors.every((value) => {
  return value.length > 4;
})
if (all) {
  console.log('Todas as cores possuem mais de 4 letras.');
} else {
  console.log('Todas as cores NÃO possuem mais que 4 letras.');
}

// Se ALGUNS atenderem ao parâmetro estabelecido.
let any = colors.some((value) => {
  return value.length > 5;
})
if (any) {
  console.log('Algumas das cores possuem mais que 5 letras.');
} else {
  console.log('Nenhuma das cores possuem mais que 5 letras.');
}

// Para verificar se há um valor específico no array.
if (colors.includes('orange')) {
  console.log('O valor informado está contido no array especificado.');
} else {
  console.log('Não foi encontrado item com o valor informado.');
}


// DOM 
//Selecionando elementos (exemplo):
document.getElementsByTagName(""); // Sereve para selecionar uma tag.
document.getElementById(""); // Serve para selecionar um elemento ESPECÍFICO utilizando o seu ID.
document.getElementsByClassName(""); // Serve para selecionar um elemento utilizando a sua CLASSE.

document.querySelector("#teste / .botao / h1"); // Serve para selecionar um elemento de acordo com o tipo desejado utilizando o mesmo comando. É possível declarar ID, CLASSE ou TAG.
document.querySelector("#teste ul li"); // É possível acessar o PRIMEIRO conteúdo que está contido em uma tag dessa forma e as informações que estão nele.
document.querySelectorAll("#teste ul li"); // É possível acessar TODO conteúdo que está contido em uma tag dessa forma, mas sempre exibirá em formato Array.


let contador = 0;
function count(){
  return ++contador;
}

function cliqueAqui(){
  return console.log(`Clicou no botão ${count()} vezes.`);
};

let button = document.querySelector('.button');
button.addEventListener('click', () => {
  cliqueAqui();
});

// A propriedade .children é utilizada para acessar os elementos filhos de um determinado elemento pai. Essa propriedade retorna uma coleção de HTMLCollection contendo todos os filhos elementos do elemento pai em questão, excluindo nós de texto e comentários.
function clickEvent() {
  const teste = document.querySelector('#teste');
  console.log(teste.children[0].children);
}

// A propriedade .innerHTML é usada para obter ou definir o conteúdo HTML de um elemento. Isso permite que você leia ou modifique o HTML interno de um elemento de maneira dinâmica. Aqui estão algumas maneiras de usar .innerHTML:
function clickEvent() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

  ul.innerHTML += ul.innerHTML + '<li>Um novo item</li>';
  ul.children[0].innerHTML = 'Item <strong>alterado.</strong>';
}

// A propriedade .outerHTML em JavaScript é usada para obter ou definir o conteúdo HTML completo de um elemento, incluindo o próprio elemento. Diferente de .innerHTML, que apenas lida com o conteúdo interno do elemento, .outerHTML considera o próprio elemento em questão e todo o seu conteúdo.
function clickEvent() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

  console.log(ul.outerHTML);
}

// .append()
// O método .append() é usado para adicionar um ou mais nós ou STRINGS DE TEXTO ao final dos filhos de um elemento e o .prepend() ao começo.
// SUPORTA MÚLTIPLOS argumentos e pode adicionar nós de texto diretamente.
function clickEvent() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

  ul.children[1].append('Novo item');
}
//.appendChild() ou .prependChild()
// O método .appendChild() é usado para adicionar um nó ao final da lista de filhos de um nó pai específico e o .prependChild() ao começo. Esse método só aceita um único nó como argumento.
// NÃO SUPORTA MÚLTIPLOS argumentos nem strings diretamente; apenas aceita um único nó.
function clickEvent() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

  let newLi = document.createElement('li');
  newLi.innerText = ('Item alterado');

  ul.appendChild(newLi);
}

// .innerHTML
// O método .innerHTML é usado definir ou retornar o conteúdo HTML de um elemento. Pode ser usado para adicionar ou substituir conteúdo HTML de um elemento.
// Permite definir conteúdo HTML usando uma string, o que pode incluir elementos HTML.
function clickEvent() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

  ul.innerHTML += '<li>Item novo e alterado</li>';
}



// BEFORE ou AFTER
function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

  const newButton = document.createElement('button');
  newButton.innerHTML = 'Botão';

  ul.before(newButton);

  const otherButton = document.createElement('button');
  otherButton.innerHTML = 'Outro Botão';

  ul.after(otherButton);
}

function clickEvent() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

  let newUl = document.createElement('ul');
  
  for(let i = 0; i < 5; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML = 'Item adicionado ' + (i + 1);
    newUl.append(newLi);
  }

  ul.after(newUl);
}


function clicou() {
  const input = document.querySelector('input');
  const botao = document.querySelector('.botao');

 // .getAttribute(): Recupera o valor de um atributo especificado de um elemento.  
  console.log(input.getAttribute('placeholder'));

 // .hasAttribute(): Verifica se um elemento possui um atributo especificado. 
  if (input.hasAttributes('type')) {
    console.log('Tem type, SIM!');
  } else {
    console.log('Não tem type neste input');
  }

 // .setAttribute(): Define o valor de um atributo especificado de um elemento. Se o atributo não existir, ele será criado. 
  input.setAttribute('placeholder', 'Digite a sua senha aqui');

  if (input.getAttribute('type') === 'text') {
    input.setAttribute('type', 'password');
    botao.innerText = 'Mostrar senha';
  } else {
    input.setAttribute('type', 'text')
    botao.innerText = 'Ocultar senha';
  }
}

// Manipulando o CSS:
function clicou() {
  const li = document.querySelector('li');

  li.style.backgroundColor = '#000';
  li.style.color = '#efefef';
  li.style.fontSize = '23px';
}


// .classList; --> retorna uma coleção DOMTokenList que representa as classes do elemento.
function clickEvent() {
  const button = document.querySelector('button');

  console.log(button.classList);
}
// .classList.add(); --> Adiciona uma ou mais classes ao elemento. Se as classes já existirem, elas não serão adicionadas novamente.
function clickEvent() {
  const button = document.querySelector('button');

  button.classList.add('verde');
}
// .classList.remove(); --> Remove uma ou mais classes do elemento. Se as classes não existirem, nenhuma ação será tomada.
function clickEvent() {
  const button = document.querySelector('button');

  button.classList.remove('button');
}


// .classList.contains(); --> Verifica se o elemento possui uma classe específica. Retorna true se a classe existir, caso contrário, retorna false.
function clickEvent() {
  const button = document.querySelector('button');

  if(button.classList.contains('yellow')) {
    button.classList.add('red');
    button.classList.remove('yellow');
  } else {
    button.classList.add('yellow');
    button.classList.remove('red');
  }
}
// .classList.toggle(); --> Alterna a presença de uma classe no elemento. Se a classe estiver presente, será removida; se não estiver, será adicionada.
function clickEvent() {
  const button = document.querySelector('button');

  button.classList.toggle('red');
}
// .classList.replace(); --> Substitui uma classe existente por uma nova classe.
function clickEvent() {
  const button = document.querySelector('button');

  button.classList.replace('yellow', 'blue');
}

function apertou() {
  console.log('APERTOU!');
}

function segurou() {
  console.log('SEGUROU!');
}

function soltou() {
  console.log('SOLTOU!');
}

const input = document.querySelector('#key');
input.addEventListener('keydown', apertou); // Útil para detectar quando uma tecla é pressionada, independentemente do tipo da tecla (incluindo teclas de função, setas e modificadores como Shift e Ctrl).
input.addEventListener('keypress', segurou); // Útil para capturar a entrada de caracteres de texto, mas não é adequado para detectar teclas de controle.
input.addEventListener('keyup', soltou); // Útil para detectar quando uma tecla foi solta, permitindo executar ações após a liberação da tecla.


const input = document.querySelector('#key');
input.addEventListener('keyup', soltou);

function soltou(e) {
  console.log(`${'TECLA APERTADA:'} ${e.code}`);
  console.log(`${'SHIFT?'} ${e.shiftKey}`);
  console.log(`${'ALT?'} ${e.altKey}`);
  console.log(`${'CONTROL?'} ${e.ctrlKey}`);
  console.log('___________');
}

const input = document.querySelector('#key');
const list = document.querySelector('ul');

function keyUp(e) {
  if(e.key === 'Enter' && input.value.trim() !== '') {
    const newLi = document.createElement('li');
    newLi.innerHTML = input.value;
    list.appendChild(newLi);
  
    input.value = "";
  } else {
    input.setAttribute('placeholder', 'Campo vazio. Informe um item válido.');
  }
}

input.addEventListener('keyup', keyUp);


// INSTÂNCIA é um objeto que é criado a partir de uma classe. São criadas usando a palavra-chave new seguida pelo nome da classe. Serve para criar múltiplos objetos com as mesmas propriedades e métodos definidos na classe, mas com valores específicos diferentes.
class Person {

  steps = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age; 
  }

// ACTION Serve para realizar operações específicas que modificam o estado ou interagem com dados.
  takeAStep() {
    this.steps++;
  }

  setAge(newAge) {
    if (typeof newAge == 'number'){
      this.age = newAge;
    } else {
      console.log('Idade não aceita. (Somente números!)');
    }
  }
}

let p1 = new Person('João', 20);
let p2 = new Person('Maria', 30);
let p3 = new Person('Pedro', 40);

console.log(`P1 = ${p1.name} tem ${p1.age} anos.`);
console.log(`P2 = ${p2.name} tem ${p2.age} anos.`);
console.log(`P3 = ${p3.name} tem ${p3.age} anos.`);

p1.takeAStep();
p1.takeAStep();
p2.takeAStep();
p3.takeAStep();
p3.takeAStep();
p3.takeAStep();
console.log(`Passos dados por ${p1.name}: ${p1.steps}`);
console.log(`Passos dados por ${p2.name}: ${p2.steps}`);
console.log(`Passos dados por ${p3.name}: ${p3.steps}`);

p1.setAge(15);
console.log(`${p1.name} tem ${p1.age} anos de vida.`);
p2.setAge(23);
console.log(`${p2.name} tem ${p2.age} anos de vida.`);
p3.setAge(33);
console.log(`${p3.name} tem ${p3.age} anos de vida.`);


class Person {

  _age = 10;
  steps = 0;

  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

// ACTION Serve para realizar operações específicas que modificam o estado ou interagem com dados.
  takeAStep() {
    this.steps++;
  }

// GETTER são métodos que permitem acessar propriedades de um objeto. Eles são definidos dentro da classe usando a palavra-chave get.
  get fullName() {
    return `${this.name} ${this.lastName}`;
  }

  get age () {
    return this._age;
  }

// SETTER são métodos que permitem modificar as propriedades de um objeto. Serve para modificar de forma controlada as propriedades de um objeto, permitindo adicionar lógica adicional durante a atribuição de valores.
  set age(x) {
    if(typeof x == 'number'){
      this._age = x;
    } 
  }

}

let p1 = new Person('João', 'Gomes');
let p2 = new Person('Maria', 'Prado');
let p3 = new Person('Pedro', 'Sampaio');

p1.age = 20;
p2.age = 14;
p3.age = 18;

console.log(`${p1.fullName} tem ${p1.age} anos.`);
console.log(`${p2.fullName} tem ${p2.age} anos.`);
console.log(`${p3.fullName} tem ${p3.age} anos.`);


class Person {
  age = 0;

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`${this.name} é um estudante e ele diz OI!!`);
  }
}

class Student extends Person {

  constructor(name, id) {
    super(name);
    this.id = id;
  }

  sayHello() {
    super.sayHi();
  }
}

let p1 = new Student('David', 2332);
p1.age = 24;
p1.sayHi();
p1.sayHello();
console.log(`${p1.name} tem ${p1.age} anos e matrícula nº ${p1.id}`);


let p2 = new Student('Pedro', 2334);
p2.age = 23;
p2.sayHi();
p2.sayHello();
console.log(`${p2.name} tem ${p2.age} anos e matrícula nº ${p2.id}`);


let p3 = new Student('Luan', 2338);
p3.age = 20;
p3.sayHi();
p3.sayHello();
console.log(`${p3.name} tem ${p3.age} anos e matrícula nº ${p3.id}`);


// STATIC é usada para definir métodos e propriedades que pertencem à própria classe, e não às instâncias da classe. Isso significa que você pode chamar esses métodos e acessar essas propriedades diretamente na classe, sem precisar criar uma instância da classe.
class Person {
  static hands = 'duas';
  age = 0;

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Oi, eu me chamo ${this.name} e tenho ${Person.hands} mãos.`);
  }
}

let p1 = new Person('David');
Person.hands = 'quatro'; // Para realizar alteração no static.
p1.sayHi();


// FACTORY é utilizado para facilitar a criação de classes com um modelo pré pronto. Não é oficialmente uma ferramenta da linguagem, apenas um modo de agilizar a criação de uma classe que será utilizada mais de uma vez. Em resumo, dá para deixar o objeto pronto e somente utilizá-lo quando necessário.
class Person {
  age = 0;

  constructor(name) {
    this.name = name;
  }
}

function createPerson(name, age) {
  let p = new Person(name);
  p.age = age;
  return p;
}

let p1 = createPerson('Kevin', 24);

console.log(`${p1.name} ainda é jovem e tem muita energia. ELe tem apenas ${p1.age} anos!`);


// FACTORY com funções
function createPerson (name, lastName, age) {
  return {
    name, 
    lastName,
    age,
    getFullName() {
      return `${this.name} ${this.lastName}`;
    }
  }
}

let person1 = createPerson('David', 'Gomes', 24);
let person2 = createPerson('Poliana', 'Silva', 23);

console.log(person1.age);
console.log(person2.lastName);
console.log(person1.getFullName());
console.log(person2.getFullName());
*/

// HERANÇA
const defaultUser = {
  name: '',
  email: '',
  level: 1
}

let user1 = {
  ...defaultUser, // para herdar as características da constante feita anteriormente.
  name: 'Kevin',
  email: 'exemplo@exemplo.com.br'
}

let adm1 = {
  ...defaultUser,
  name: 'ADM-Sênior',
  email: 'admsr@exemplo.com.br',
  level: 2
}

console.log(user1);
console.log(adm1);