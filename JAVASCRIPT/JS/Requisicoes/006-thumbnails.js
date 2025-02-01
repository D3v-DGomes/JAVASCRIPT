/*
Thumbnails são pequenas versões de imagens maiores, usadas para representar conteúdo
de forma concisa e visualmente atraente. Elas são muito comuns em websites, galerias
de fotos, e plataformas de vídeo como YouTube. Em HTML, por exemplo, você pode usar 
miniaturas para pré-visualizar imagens maiores.
*/

function show() {
    let imagem = document.getElementById('imagem').files[0];

    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 550;

    document.getElementById('area').appendChild(img);
}



// Thumbnails com FileReader:
// Manipulam qualquer tipo de arquivo

function show_2() {
    let reader = new FileReader();
    let imagem_2 = document.getElementById('imagem2').files[0];

    reader.onloadend = function() {
        let img_2 = document.createElement('img');
        img_2.src = reader.result;
        img_2.width = 550;

        document.getElementById('area2').appendChild(img_2);
    }

    reader.readAsDataURL(imagem_2);
}