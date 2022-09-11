

let navbar = document.querySelector('.container .navbar');
let menuBtn = document.querySelector('#menu-btn');


menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

