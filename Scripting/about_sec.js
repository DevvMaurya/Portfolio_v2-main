const id =[1,2,3]
let row_left = document.getElementById(`row_left${id[0]}`)
let row_right = document.getElementById(`row_right${id[0]}`)
document.addEventListener('scroll',()=>
{
    if(window.scrollY >= 1450 && window.scrollY < 1590)
    {
        document.getElementById(`row_left${id[0]}`).classList.add(`row_scroll`)
        document.getElementById(`row_right${id[0]}`).classList.add(`row_scroll`)
    }
    else if(window.scrollY >= 1590 && window.scrollY < 1690)
    {
        document.getElementById(`row_left${id[1]}`).classList.add(`row_scroll`)
        document.getElementById(`row_right${id[1]}`).classList.add(`row_scroll`)
    }
    else if(window.scrollY >= 1800)
    {
        document.getElementById(`row_left${id[2]}`).classList.add(`row_scroll`)
        document.getElementById(`row_right${id[2]}`).classList.add(`row_scroll`)
    }

    if(window.scrollY >= 1790)
    {
        document.getElementById('display_pics').style.opacity = 1;
    }
})
document.addEventListener('scroll',()=>
{
    if(window.scrollY <= 1450)
    {
        document.getElementById(`row_left${id[0]}`).classList.remove(`row_scroll`)
        document.getElementById(`row_right${id[0]}`).classList.remove(`row_scroll`)
    }
    else if(window.scrollY <= 1560 )
    {
        document.getElementById(`row_left${id[1]}`).classList.remove(`row_scroll`)
        document.getElementById(`row_right${id[1]}`).classList.remove(`row_scroll`)
    }
    else if(window.scrollY <= 1800)
    {
        document.getElementById(`row_left${id[2]}`).classList.remove(`row_scroll`)
        document.getElementById(`row_right${id[2]}`).classList.remove(`row_scroll`)
    }

});
