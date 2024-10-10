const sideMenu = document.querySelector('#sideMenu');

function openMenu(){
    sideMenu.style.transform = 'tranlateX(-16rem)'
}
function closeMenu(){
    sideMenu.style.transform = 'tranlateX(16rem)'
}