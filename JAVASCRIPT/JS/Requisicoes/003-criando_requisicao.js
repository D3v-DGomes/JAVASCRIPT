/*
- FETCH API:

--> É uma interface que permite fazer requisições HTTP para
obter ou enviar dados de/para um servidor. 

--> Utiliza o método GET por padrão.

- VANTAGENS DA FETCH API:

    - SIMPLICIADADE: Usa uma sintaxe mais simples e direta;
    - FLEXIBILIDADE: Suporta uma ampla gama de operações HTTP (GET,
    POST, PUT, DELETE, etc);

- DESVANTAGENS/CONSIDERAÇÕES:

    - Não lança um erro automaticamente em casos de erros HTPP, 
    é necessário verificar manualmente o status da resposta;

    - Não suporta de forma nativa o progresso da requisição.


- MÉTODO .then:

--> É um método usado para chamar um objeto Promise;

--> Permite definir uma função a ser executada quando a Promise for resolvida
(cumprida) ou rejeitada (falhada);

--> O propósito  é permitir o encadeamento de operações assíncronas de maneira 
ordenada e legível.

- PROMISE:

--> É um objeto que representa a eventual conclusão ou falha de uma operação
assíncrona e seu valor resultante;

--> Permitem o tratamento elegante das operações, como as requisições HTTP, 
temporizadores e leitura de arquivos, substituindo callbacks aninhados e 
facilitando a estrutura do código;

--> TUDO QUE TEM UMA PROMISE TORNA-SE UMA FUNÇÃO ASSÍNCRONA.

- Estados de uma Promise:

    1. Pending (Pendente): Inicialmente, uma Promise está nesse estado, indicando
    que o resultado final ainda não foi determinado;

    2. Fulfilled (Cumprida): A operação assíncrona foi concluída com sucesso 
    e a Promise possui um valor;

    3. Rejected (Rejeitada): A operação assíncrona falhou e a Promise tem 
    um motivo de falha (erro).


- MÉTODOS PRINCIPAIS:
    1. then(): Usado para definir uma função a ser executada quando a Promise for resolvida;

    2. catch(): Usado para definir uma função a ser executada quando a Promise for rejeitada;

    3. finally(): Executado após a Promise ser resolvida ou rejeitada.


- MÉTODOS DE REQUISIÇÃO HTTP:

--> Especificam a ação desejada a ser executada para um determinado recurso no servidor.

- Métodos de requisição mais comuns:

    1. GET: Recupera dados de um servidor sem modificar nada.
    Uso comum: Pedidos de páginas web, obtenção de dados de APIs.

    2. POST: Envia dados ao servidor para criar um novo recurso.
    Uso comum: Submissão de formulários, criação de novos registros.

    3. PUT: Atualiza um recurso existente no servidor ou cria, se não existir.
    Uso comum: Atualização de registros existentes.

    4. DELETE: Remove um recurso específico no servidor.
    Uso comum: Exclusão de registros.

    5. PATCH: Aplica modificações parciais a um recurso.
    Uso comum: Atualização parcial de registros.

    6. HEAD: Recupera metadados de um recurso sem o corpo da resposta.
    Uso comum: Verificação de disponibilidade de recurso, testes de conexão.

    7. OPTIONS: Descreve as opções de comunicação para o recurso de destino.
    Uso comum: Verificação de métodos suportados e opções de configuração.

--> Esses métodos são essenciais para construir e interagir com APIs RESTful. Eles 
ajudam a realizar diferentes operações necessárias para manipular recursos 
no servidor de forma clara e padronizada.

*/

function clicou(){
    let req = fetch('https://jsonplaceholder.typicode.com/posts')
    
    req.then((response) => {
            console.log(`Status: ${response.status}`);      // Para saber o código da requisição (200 ok, 404 not found, etc.)
            return response.json();
        }).then((json) => {
            console.log(json)
            alert(`Titulo do primeiro post: ${json[0].title}`)
        })
        .catch((error) => {
            console.log('ERRO DE CONEXÃO. ABRA A PÁGINA EM OUTRO NAVEGADOR WEB.')
            console.log(error);
        })
        .finally(() => {
            alert('CARREGAMENTO FINALIZADO.')
        })
}

function inserir(){
    req2 = fetch(
        'https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Cadastro novo',
                body: 'Corpo do cadastro',
                userId: 2
            })
        }
    )
    .then((response) => {
        console.log(`Status ${response.status}`);
        return response.json();
    })
    .then((json) => {
        console.log(json);
    });
}

document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir);


/*
ASYNC E AWAIT:

--> São palavras-chave em JavaScript que permitem escrever código
assíncrono de maneira mais síncrona e legível.

--> Possuem o intuito de reduzir o tamanho do código, deixando 
ele mais limpo.

--> Elimina a necessidade de encadear múltiplos then e catch.


- ASYNC:

--> Sempre retorna uma Promise.
--> É utilizada dentro das funções para fazer esperar a conclusão 
de Promises.


- AWAIT:

--> Faz com que o código "pause" até que a Promise seja concluída,
seja resolvida ou não.
--> É usada dentro das funções que são iniciadas com async.
 */

async function clicou_async(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    alert(`Titulo do primeiro post: ${json[0].title}`);
    alert('PROCESSO FINALIZADO.');
}

async function inserir_async(){
    let req = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: 'Cadastro novo com Async',
                body: 'Corpo novo com Async',
                userId: 3
            })
        }
    );
    let json = await req.json();

    console.log(json);

}







document.querySelector('#botao_async').addEventListener('click', clicou_async);
document.querySelector('#inserir_async').addEventListener('click', inserir_async);




