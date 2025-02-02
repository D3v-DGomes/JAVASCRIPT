// Usando as teclas:
document.body.addEventListener('keyup', (event)=>{    // evento keyup é disparado quando uma tecla é liberada. Isso pode ser útil quando você quer detectar quando o usuário termina de pressionar uma tecla.
    playSound(event.code.toLowerCase());    // .code retorna uma string representando a tecla física específica no teclado que foi pressionada.
});

// Faça sua composição:
document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;

    if(song !== '') {       // Separar a sequência de letras digitadas
        let songArray = song.split('');
        playComposition(songArray);
    }
});


function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;   // Retirar o atraso do áudio 
        audioElement.play();
    }

    if(keyElement) {       // Acender a tecla digitada
        keyElement.classList.add('active');

        setTimeout(()=>{  // Apagar a tecla digitada
            keyElement.classList.remove('active');
        }, 300);
    }
}

// Faça sua composição: 
function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{      // Atrasar a execução das teclas e impedir que todas sejam reproduzidas ao mesmo tempo
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}


// Usando o mouse:
let elementsArray = document.querySelectorAll('.key');
elementsArray.forEach(function(elem) {
    elem.addEventListener('click', (event) => {
        let key = `key${event.target.value}`.toLowerCase();
        playSound(key);
    })
})

let buttons = document.querySelectorAll('.key');

buttons.forEach((btn) => {
   
    btn.addEventListener('click' , (e) => {
        const value1 = e.target.innerText;

        switch (value1){

            case 'Q':
                let audioElementQ = document.querySelector('#s_keyq');
                audioElementQ.play()
                audioElementQ.currentTime = 0;
                btn.classList.add('active')
   
                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;

            case 'W':
                let audioElementW = document.querySelector('#s_keyw');
                audioElementW.play()
                audioElementW.currentTime = 0;
                btn.classList.add('active')
   
                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;

            case 'E':
                let audioElementE = document.querySelector('#s_keye');
                audioElementE.play()
                audioElementE.currentTime = 0;
                btn.classList.add('active')
   
                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;

            case 'A':
                let audioElementA = document.querySelector('#s_keya');
                audioElementA.play()
                audioElementA.currentTime = 0;
                btn.classList.add('active')

                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;

            case 'S':
                let audioElementS = document.querySelector('#s_keys');
                audioElementS.play()
                audioElementS.currentTime = 0;
                btn.classList.add('active')
   
                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;

            case 'D':
                let audioElementD = document.querySelector('#s_keyd');
                audioElementD.play()
                audioElementD.currentTime = 0;
                btn.classList.add('active')
   
                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;

            case 'Z':
                let audioElementZ = document.querySelector('#s_keyz');
                audioElementZ.play()
                audioElementZ.currentTime = 0;
                btn.classList.add('active')
   
                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;

            case 'X':
                let audioElementX = document.querySelector('#s_keyx');
                audioElementX.play()
                audioElementX.currentTime = 0;
                btn.classList.add('active')
   
                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;
               
            case 'C':
                let audioElementC = document.querySelector('#s_keyc');
                audioElementC.play()
                audioElementC.currentTime = 0;
                btn.classList.add('active')
   
                setTimeout(()=> {
                    btn.classList.remove('active');
                }, 300);
                break;
        }
    })
})