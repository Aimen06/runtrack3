let p =document.querySelector('p');
function display()
{
   p.textContent = `Les logiciels et les cathédrales, c'est un peu la même chose 
    - d'abord on les construit, ensuite on prie.`;
    p.innerHTML +='<button id="hideBtn">Cacher</button>';
    hideBtn = document.querySelector('#hideBtn')
    hideBtn.style.display = 'block';
    hideBtn.addEventListener('click',hide);
}

function hide() {
    let p = document.querySelector('p');
    p.textContent= '';
}

let buton = document.querySelector('#displayBtn');
buton.addEventListener('click',display);
