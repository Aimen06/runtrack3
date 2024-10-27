let p = $('p');
function display()
{
    p.text(`Les logiciels et les cathédrales, c'est un peu la même chose 
    - d'abord on les construit, ensuite on prie.`);
    $('<button id="hideBtn">Cacher</button>').appendTo('p');
    let hideBtn = $('#hideBtn');
    hideBtn.css({display: "block"});
    hideBtn.on('click',hide);
}

function hide() {
    p.text('');
}

let buton = $('#displayBtn');
buton.on('click',display);
