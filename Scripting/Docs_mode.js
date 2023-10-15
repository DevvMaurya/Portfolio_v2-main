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

const quot = [
    "The greatest software is not built overnight; it’s crafted with patience and dedication.",
    "Embrace the bugs, for they are the stepping stones to better code.",
    "The beauty of software lies in the harmony between logic and creativity.",
    "Coding is like sculpting; every line of code shapes the final masterpiece.",
    "Dare to dream big; your code can reshape the world.",
    "Complex problems are a developer’s playground; tackle them fearlessly.",
    "A developer’s code is their signature in the digital realm.",
    "Bugs are not enemies; they are the teachers that make us better developers."
]

let q = document.getElementById('quot')
let count = 0;

setInterval(() => {
    if(count < 8)
    {
        q.innerText = quot[count];
        count ++;
    }
    else
    {
        count = 0;
    }
},4000);

 if(window.screen.availWidth < 1200)
    {
        alert('🔴 Website not ready for mobile screen.')
    }
