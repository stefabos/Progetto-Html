const navToggler = document.getElementById('navToggler')
const nav = document.getElementById('nav')
const searchInput = document.getElementById('searchInput');
const button = document.getElementById('button');
function AttivaMenu(){
    nav.classList.toggle('active')

}
navToggler.addEventListener('click',AttivaMenu);

function buttonLength(){
    const value = searchInput.value.trim();
    if (value.length < 3) {
        alert('Devi inserire un valore di almeno 3 caratteri!');
    }
}

button.addEventListener('click', buttonLength);