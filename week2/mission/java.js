                    
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        logo.src = "img/byui-logo-white.png";
        pageContent.classList.add('dark');
    } else {
        logo.src = "img/byui-logo-blue.jpg";
        pageContent.classList.remove('dark');
    }
}           
      