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
