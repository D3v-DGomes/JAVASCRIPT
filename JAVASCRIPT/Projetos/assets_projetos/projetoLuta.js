let log = new Log(document.querySelector('.log'));

let char = new Sorcerer('Harry Potter');
let monster = new Knight('Kirito');

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();
