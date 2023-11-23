let skill_ball = document.querySelector('.skill')
document.addEventListener('scroll',()=>
{

    if(window.scrollY > 2300)
    {
        document.getElementById(`skill1`).classList.add('skill_ball')
        document.getElementById(`skill2`).classList.add('skill_ball')
        document.getElementById(`skill3`).classList.add('skill_ball')
    }
    else if(window.scrollY < 2356)
    {
        document.getElementById(`skill1`).classList.remove('skill_ball')
        document.getElementById(`skill2`).classList.remove('skill_ball')
        document.getElementById(`skill3`).classList.remove('skill_ball')
    }
})

let info1 = document.querySelector('#skill1')
let info2 = document.querySelector('#skill2')
let info3 = document.querySelector('#skill3')
let change = 
info1.addEventListener('click',()=>
{
    document.querySelector('#info1').classList.add('infoclass');
    setTimeout(()=>
    {
        document.querySelector('#info1').classList.remove('infoclass');

    },23000)
});

info2.addEventListener('click',()=>
{
    document.querySelector('#info2').classList.add('infoclass');
    setTimeout(()=>
    {
        document.querySelector('#info2').classList.remove('infoclass');

    },23000)
});

info3.addEventListener('click',()=>
{
    document.querySelector('#info3').classList.add('infoclass');
    setTimeout(()=>
    {
        document.querySelector('#info3').classList.remove('infoclass');

    },23000)
});