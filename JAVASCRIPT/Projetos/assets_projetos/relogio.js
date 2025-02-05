// Elementos a serem utilizados:

let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');


// Timer para atualizar o relógio:

function updateClock() {
    // pegando a hora atual:
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // fazendo o relógio digital:
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    // colocando os ponteiros para funcionar:
    let sDeg = ((360/60) * second) - 90;     // definindo o ângulo do ponteiro para cada segundo
    let mDeg = ((360/60) * minute) - 90;
    let hDeg = ((360/12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}

function fixZero(time) {    // função para deixar hora do relogio digital sempre com dois dígitos em cada casa
    if(time < 10) {
        return '0' + time;
    } else {
        return time;
    }
}

setInterval(updateClock, 1000);     // atualizando o relógio a cada 1 segundo
updateClock();