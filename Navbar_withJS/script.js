let navigation_bar = document.querySelector('.navbar');
let menus_btn = document.querySelector('.menu-btn')
let close_btn = document.querySelector('.close-btn')
const active_nav = document.querySelectorAll('.nav-item')

menus_btn.addEventListener("click", function() {
    navigation_bar.classList.add('active2');
});

close_btn.addEventListener("click", function() {
    navigation_bar.classList.remove('active2');
});

active_nav.forEach((n) => {
    n.addEventListener("click", () => {
        // navigation_bar.classList.add('active2');
 
        navigation_bar.classList.remove('active2');
    })
})