var cssLink = document.querySelector('link[rel="stylesheet"]');
var estilos = ["styles/simples.css", "styles/moderno.css", "styles/profissional.css", "styles/colorido.css", ""];

const simpleStyle = document.querySelectorAll('.simple');
const modenrStyle = document.querySelectorAll('.modern');
const profesionalStyle = document.querySelectorAll('.pro');
const colorStyle = document.querySelectorAll('.color');
const noStyle = document.querySelectorAll('.empty');


simpleStyle.forEach(function (simple) {
    simple.addEventListener('click', function () {
        cssLink.href = estilos[0];
    })
})

modenrStyle.forEach(function (modern) {
    modern.addEventListener('click', function () {
        cssLink.href = estilos[1];
    })
})

profesionalStyle.forEach(function (pro) {
    pro.addEventListener('click', function () {
        cssLink.href = estilos[2];
    })
})

colorStyle.forEach(function (color) {
    color.addEventListener('click', function () {
        cssLink.href = estilos[3];
    })
})

noStyle.forEach(function (empty) {
    empty.addEventListener('click', function () {
        cssLink.href = estilos[4];
    })
})