// Em JavaScript os meses começam com índice 0. Sendo Jan = 0 e Dez = 11;
// O mínimo para se gerar uma data é o ano e o mês
// A semana no JavaScript começa a partir do 0 e termina no 6. Sendo que o dia 0 é o Domingo.

let localDate = new Date();

console.log(localDate);     // Data com todas as informações possíveis
console.log(localDate.toDateString());  // Data com apenas dia, mês, ano e hora
console.log(localDate.toUTCString());   // Data com dia, mês, ano e hora de acordo com Greenwitch

// -----------------------------------------------------------------------------------------------

let localDate_1 = new Date(2025, 0, 29, 17, 43, 59); // (ano, mês, dia, hora, minuto, segundo)
console.log(localDate_1);

// -----------------------------------------------------------------------------------------------

let localDate_2 = new Date('2025-01-26 17:45:32');  // Passando os dados como string
console.log(localDate_2.toString());        // Convertendo a string em Date

// -----------------------------------------------------------------------------------------------

let localDate_3 = localDate_1.getFullYear();    // Para pegar o mês da variável setada
console.log(localDate_3);

let localDate_3_1 = localDate_2.getMonth();     // Para pegar o mês da variável setada
console.log(localDate_3_1);         // retorna o índice do mês setado

let localDate_3_2 = localDate_1.getDay();   // Retorna o índice do dia setado
console.log(localDate_3_2);

let localDate_3_3 = localDate_1.getHours();     // Retorna as horas
console.log(localDate_3_3);

let localDate_3_4 = localDate.getMinutes();     // Retorna os minutos
console.log(localDate_3_4);

let localDate_3_5 = localDate.getSeconds();   // Retorna os segundos
console.log(localDate_3_5);

let localDate_3_6 = localDate.getMilliseconds();    // Retorna os milissegundos
console.log(localDate_3_6);

let localDate_3_7 = localDate.getTime();  // Retorna a quantidade de milissegundos de 1970 até o momento
console.log(localDate_3_7);

let localDate_3_8 = Date.now();     // Mesma funcionalidade do descrito acima
console.log(localDate_3_8);     // Modelo mais utilizado em banco de dados

// -----------------------------------------------------------------------------------------------

// Para alterar qualquer parte da data, utilizase o .set em vez do .get

localDate_2.setFullYear('1920');
console.log(localDate_2);

// -----------------------------------------------------------------------------------------------

localDate.setDate(localDate.getDate() + 2);     // Para aumentar a quantidade de dias
console.log(localDate);

localDate.setHours(localDate.getHours() + 3);   // Para aumentar a quantidade de horas
console.log(localDate);

// É possível fazer isso com todas as unidades de medida presentes no Date(). 

// Exemplo prático:
let m = new Date('2021-10-23');
m.setDate(m.getDate() + 100);

let aumentarData = m;
console.log(aumentarData);
