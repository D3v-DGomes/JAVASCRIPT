/*
Modos de execução do código:

- Síncrono:

--> EXECUÇÃO: O código é executado linha por linha, de cima
para baixo e cada linha deve ser completada antes de passar
para a próxima;

--> SITUAÇÃO DE BLOQUEIO: Durante a execução do código, todas as 
operações devem ser concluídas antes que o mesmo possa continuar.
Isso pode fazer a aplicação ficar pausada ou bloqueada, aguardando
uma operação ser concluída.


- Assíncrono:

--> EXECUÇÃO: Permite que as operações do código sejam realizadas em paralelo.
Dessa forma, será possível continuar executando outras tarefas enquanto
espera que uma operação ou requisição seja concluída.

--> SITUAÇÃO DE NÃO-BLOQUEIO: A execução da aplicação não bloqueia
enquanto espera pela conclusão de uma tarefa.
Isso melhora a eficiência e a capacidade de resposta, principalmente
para operações de entrada/saída (I/O)
*/

// Exemplo de código Síncrono:
let nome = 'David';
let sobrenome = 'Silva';
let nomeCompleto = nome + sobrenome;


// Exemplo de código Assíncrono:
async function sayHello() {
    console.log("Hello");
    await new Promise(resolve => setTimeout(resolve, 1000));  // Aguarda 1 segundo
    console.log("World");
  }
  
  sayHello();
  


/*
REQUISIÇÕES

--> As requisições referem-se a pedidos feitos a um servidor para obter ou enviar dados.
São as responsáveis pela comunicação entre o cliente (navegador) e o servidor.

--> Com as requisições, é possível criar aplicações web dinâmicas que interagem com
servidores e APIs externas. É comum utilizá-las para enviar dados de formulários,
conseguir informações de APIs, etc.



COMO A WEB FUNCIONA (REQUEST & RESPONSE)?

- Request:

--> Quando um cliente quer obter dados de um servidor, ele faz uma requisição
que geralmente segue estas etapas:

1. Método HTTP: O cliente especifica um método HTTP (como GET, POST, PUT, DELETE, etc.) 
que indica a ação desejada.

2. URL: A URL (Uniform Resource Locator) especifica o endereço do recurso no servidor.

3. Headers: Metadados sobre a requisição, como o tipo de conteúdo esperado (Content-Type), 
informações de autenticação, etc.

4. Body (Corpo): No caso de métodos como POST ou PUT, os dados são enviados no corpo
da requisição.


- Response:

--> O servidor processa a requisição feita pelo cliente e envia uma resposta de volta,
que pode incluir:

1. Status Code: Um código de status HTTP que indica o resultado da requisição (por exemplo, 
200 OK, 404 Not Found, 500 Internal Server Error).

2. Headers: Metadados sobre a resposta, como o tipo de conteúdo (Content-Type), tempo
do servidor, etc.

3. Body (Corpo): Os dados sendo enviados de volta ao cliente, que podem ser em diferentes
formatos (JSON, HTML, XML, etc.).

A interação feita entre o request e o response é fundamental para a troca de informações
entre clientes e servidores na web. Em resumo, o cliente solicita os dados e espera que 
o sistema de requisição atenda ao seu pedido para 



COMO UMA API (APPLICATION PROGRAMMING INTERFACE) FUNCIONA?

--> É uma coleção de definições e protocolos que permite a comunicação entre diferentes
softwares. 

--> Pode-se dizer que uma API é uma espécie de "ponte" que permite um aplicativo interagir
com outro de maneira estruturada e pré-definida.

- Visão geral do funcionamento de uma API:

    1. Solicitação (Request):

    --> O cliente (navegador web, app móvel ou outro software) envia uma solicitação (request)
    para a API. Dentro dessa solicitação ocorre:

        - ENDPOINT: Um URL específico do servidor que identifica qual recurso ou serviço
        está sendo solicitado;

        - MÉTODO HTTP: O método HTTP (GET, POST, PUT, DELETE, etc.) que especifica a ação desejada;

        - PARÂMETROS: Dados adicionais podem ser enviados como parâmetros na URL ou no corpo da 
        solicitação;

        - HEADERS: Metadados que podem incluir informações como tipos de conteúdo, autenticação, etc.


    2. Processamento:

    --> A API que está hospedada em um servidor, recebe a solicitação e a processa. Durante esse 
    processo a API pode:

        - Verificar a autenticidade da solicitação (autenticação e autorização);

        - Buscar, criar, atualizar ou deletar dados em um banco de dados;

        - Executar lógica de negócios relevante.
        

    3. Resposta (Response):

    --> Após o processamento bem-sucedido da solicitação, a API envia uma resposta de volta para o
    cliente. Na resposta inclui:

        - STATUS CODE: Um código HTTP que indica o resultado da solicitação ("200 OK" para sucesso, 
        "404 (Not Found)" se o recurso não for encontrado, etc.);

        - HEADERS: Metadados sobre a resposta;

        - BODY: Os dados retornados, geralmente em formato JSON ou XML.

*/