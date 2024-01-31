let mail = document.getElementById('mail')
mail.addEventListener('click',()=>
{
    navigator.clipboard.writeText("devvmaurya@gmail.com")
    alert('mail ID Copied to clip board.!')
})

let github = document.getElementById('github')
github.addEventListener('click',()=>
{
    location.assign('https://github.com/DevvMaurya');
})

let linkden = document.getElementById('in')
linkden.addEventListener('click',()=>
{
    location.assign('https://www.linkedin.com/in/dev-maurya-238405222');
})

let insta = document.getElementById('insta')
insta.addEventListener('click',()=>
{
    location.assign('https://www.instagram.com/devv_maurya/?next=%2F');
})

let call = document.getElementById('call')
call.addEventListener('click',()=>
{
    navigator.clipboard.writeText("+91 8200270283")
    alert('Mobile nummber Copied to clip board.!')
})

let X = document.getElementById('X')
insta.addEventListener('click',()=>
{
    location.assign('https://twitter.com/DevvMaurya');
})
