let myButton = document.querySelector('#button');
myButton.addEventListener('click', addone);

function addone()
{
    p = Number(document.querySelector('#compteur').textContent);
    document.querySelector('#compteur').innerHTML = p + 1;
}