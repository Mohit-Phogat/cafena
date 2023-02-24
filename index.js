const hamburgermenu = document.querySelector('.hamburger-menu')
const navlinks = document.querySelector('.nav-links')

hamburgermenu.onclick = () => {
    navlinks.classList.toggle('active')
}

window.onscroll = () =>{
    navlinks.classList.remove('active');
}
