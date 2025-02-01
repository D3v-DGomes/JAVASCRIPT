// ESTRUTURA DE UPLOAD DE UM ARQUIVO:

async function send() {
    let arquivo = document.getElementById('arquivo').files[0];

    let body = new FormData();
    body.append('title', 'Wallpaper');
    body.append('arquivo', arquivo);

    let requisicao = await fetch('https://www.google.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
} 