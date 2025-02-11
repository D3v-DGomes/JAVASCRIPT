// COMANDOS:
document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();     // Previne que os valore inseridos na barra de busca sumam após clicar no botão.

    let input = document.querySelector('#searchInput').value;   // Pegando o valor que foi digitado pelo usuário.

    if(input !== '') {
        showWarning('Carregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=a73199c28d4d8d81ff1f3fc6442430a5&units=metric&lang=pt_br`;

        let results = await fetch(url);
        let json = await results.json();

        if(json.cod === 200) {      // Pegando as informações para atualizar cada campo de acordo com a região informada
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            })
        } else {
            clearInfo();
            showWarning('Localização não encontrada.');
        }
    } else {
        clearInfo();
    }
})



// FUNÇÕES:
function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;   // Criando mensagem de aviso para informar ao usuário que um processo está sendo executado.
}

function clearInfo() {
    showWarning('');
    document.querySelector('.resultado').style.transform = 'none';
}

function showInfo(json) {
    showWarning('');        // Para retirar o nome 'Carregando...'

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;  // Para mostrar o nome da cidade e o seu país.
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;   // Para mostrar a temperatura.
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`; //Para mostrar o vento.

    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}d@2x.png`);   // Para deixar a imagem da previsão atualizada de acordo com a região.
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle - 90}deg)`;     // Para atualizar a direção do ponteiro do vento.

    document.querySelector('.resultado').style.display = 'block';       // Para fazer o quadro de informações aparecer
}