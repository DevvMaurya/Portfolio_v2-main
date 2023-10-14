
let project = document.getElementById('project')
project.addEventListener('click',()=>
{
    project.classList.add('animation_for_menu')
    project.addEventListener('animationend',()=>
    {
        window.scrollTo(0,1000)
        setTimeout(()=>{},2000);
        project.classList.remove('animation_for_menu')
    });
    
});

let home = document.getElementById('home')
home.addEventListener('click',()=>
{
    home.classList.add('animation_for_menu')
    home.addEventListener('animationend',()=>
    {
        window.scrollTo(1000,0);
        setTimeout(()=>{},2000);
        home.classList.remove('animation_for_menu')
    });
});

let about = document.getElementById('about');
about.addEventListener('click',()=>
{
    about.classList.add('animation_for_menu')
    about.addEventListener('animationend',()=>
    {
        // location.href("https://github.com/DevvMaurya/")
        // window.open("https://github.com/DevvMaurya/")
        window.scrollTo(0,1500);
        setTimeout(()=>{},2000);
        about.classList.remove('animation_for_menu')
    });
});


