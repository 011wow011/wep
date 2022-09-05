const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})

let bg = document.getElementById('bg');
let text = document.getElementById('text');
let image = document.getElementById('image');

window.addEventListener('scroll', function(){
    var value=window.scrollY;
    bg.style.top = value * 0.25 + 'px';
    text.style.top = value * 0.15 + 'px';
})