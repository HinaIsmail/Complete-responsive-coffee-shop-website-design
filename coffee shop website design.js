let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    cartItem.classList.remove('active');

}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');

}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
    searchForm.classList.toggle('active');
    
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}