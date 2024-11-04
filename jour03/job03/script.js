const array = [1, 2, 3, 4, 5, 6];

$('#randomBtn').click(function() {
    location.reload();
});


let coupPrevious= null;
let tours = 0;
window.addEventListener("load", (event) => {
    shuffle ();
});


$('.carte').on('click',puzzle);
function shuffle () {
    let shuffleArray;
    shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    $('#wrapper-rainbow div').remove();
    $('#wrapper-rainbow').append(`
     <div class="rainbow-part"  data-id-part="${shuffledArray[0]}"><img src="assets/images/arc${shuffledArray[0]}.png" alt="arc${shuffledArray[0]}" ></div>
    <div class="rainbow-part"  data-id-part="${shuffledArray[1]}"> <img src="assets/images/arc${shuffledArray[1]}.png" alt="arc${shuffledArray[1]}" ></div>
    <div class="rainbow-part"  data-id-part="${shuffledArray[2]}"><img src="assets/images/arc${shuffledArray[2]}.png" alt="arc${shuffledArray[2]}" ></div>
    <div class="rainbow-part"   data-id-part="${shuffledArray[3]}"><img src="assets/images/arc${shuffledArray[3]}.png" alt="arc${shuffledArray[3]}" ></div>
    <div class="rainbow-part"  data-id-part="${shuffledArray[4]}"><img src="assets/images/arc${shuffledArray[4]}.png" alt="arc${shuffledArray[4]}" ></div>
    <div class="rainbow-part"  data-id-part="${shuffledArray[5]}"><img src="assets/images/arc${shuffledArray[5]}.png" alt="arc${shuffledArray[5]}" ></div>
    `);
    $('.rainbow-part').on('click',puzzle);
}



function puzzle()
{
        if (coupPrevious === null) {
                coupPrevious =  $(this).data('id-part');
            } else if (($(this).attr('class') === 'carte' ))  {
                let selectedCarte = $(`.carte[data-id-carte=${$(this).data('id-carte')}]`);
                selectedCarte.data('id-part', coupPrevious)
                selectedCarte.append(`<img src="assets/images/arc${coupPrevious}.png" 
            alt="arc${coupPrevious}" >`);
                $(`[data-id-part=${coupPrevious}]`).remove();
                coupPrevious = null;
                tours++;
            if(tours === 6) setTimeout(checkCards, 500);
            
            }
        }
        
 function checkCards() {
         let counter = 0;
        $( ".carte" ).each(function( ) {

            if($(this).data('id-part') ===  $(this).data('id-carte')) counter++;
        });
        if (counter === 6) {
            $('#wrapper-rainbow div').remove();
            $('#wrapper-rainbow').append('<div class="win">Vous avez gagné</div>');
        } else {
            $('#wrapper-rainbow div').remove();
            $('#wrapper-rainbow').append('<div class="loose">Vous avez perdu</div>');
        }
     
}