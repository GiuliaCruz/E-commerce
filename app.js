//sticky navigation bar

const header = document.querySelector("header")

window.addEventListener ('scroll', function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
    
}

//password
const password = document.getElementById('password');
function showHide(){
    if(password.type ==='password'){
        password.setAttribute('type','text');
        icon.classList.add('hide')
    }
    else{
        password.setAttribute('type')
    }
}