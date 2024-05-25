let painel = document.getElementById('painel')
let modules = document.getElementById('modules')
let welcome = document.getElementById('welcome')
let textCont = document.getElementById('textCont')
let searchBtn = document.getElementById('searchBtn')
let resArea = document.getElementById('resArea')
let audio = document.getElementById('audio')
audio.src = '/audio/futureTech.mp3'


setTimeout(() => {
    painel.classList.remove('painelAni1')
    painel.classList.add('painelAni2')
  
}, 1000);

setTimeout(() => {
    welcome.classList.add('wellOff')
}, 2000);
setTimeout(() => {
    welcome.classList.remove('wellOff')
}, 4000);

setTimeout(() => {
    modules.classList.add('modWin')
}, 4500);

setTimeout(() => {
    textCont.classList.add('inputOff')
}, 5000);

setTimeout(() => {
    searchBtn.classList.add('btnOff')
}, 5500);
setTimeout(() => {
    resArea.classList.add('resOff')
}, 6000);

