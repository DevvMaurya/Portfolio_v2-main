let resume = document.getElementById('resume');

resume.addEventListener('click',()=>
{
    window.open("Documents/Dev Maurya Resume.pdf")
});

let mode = document.getElementById('mode_button');
let mode_on_card = document.getElementById('cards');
let nav = document.getElementById('menu');
var flag = true;
mode.addEventListener('click',()=>
{
    if (flag)
    {
        mode.innerText = '🌙'
        nav.classList.add('menu_mode')
        mode_on_card.classList.add('card_mode')
        document.body.classList.add('mode')
        flag = false;
    }
    else
    {
        mode.innerText = '☀️'
        nav.classList.remove('menu_mode')
        mode_on_card.classList.remove('card_mode')
        document.body.classList.remove('mode')
        flag = true
    }

});

