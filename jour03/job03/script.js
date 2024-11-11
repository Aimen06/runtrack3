//9  black
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const lastImgSrc = "assets/images/9.png";
const lastImgId = 9;

$('#randomBtn').click(function () {
    shuffle();

});

function shuffle() {
    $('#randomBtn').remove();
    let shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    arrayPart1 = shuffledArray.splice(0, 3)
    arrayPart2 = shuffledArray.splice(0, 3)
    arrayPart3 = shuffledArray.splice(0, 3)
    $('.carte').remove();
    for (let i = 0; i < arrayPart1.length; i++) {
        $('.row1').append(`<div class="carte" data-id-image="${arrayPart1[i]}" data-id-case="${i+1}"><img src="assets/images/${arrayPart1[i]}.png" alt="image${arrayPart1[i]}"></div>`);
    }
    for (let j = 0; j < arrayPart2.length; j++) {
        $('.row2').append(`<div class="carte" data-id-image="${arrayPart2[j]}" data-id-case="${j+1}"><img src="assets/images/${arrayPart2[j]}.png" alt="image${arrayPart2[j]}"></div>`);
    }
    for (let k = 0; k < arrayPart3.length; k++) {
        $('.row3').append(`<div class="carte" data-id-image="${arrayPart3[k]}" data-id-case="${k+1}"><img src="assets/images/${arrayPart3[k]}.png" alt="image${arrayPart3[k]}"></div>`);
    }
    $('.carte img[src="assets/images/9.png"]').parent('div').addClass('black');
    $('.carte').hover(function() {
        $(this).css("border", "5px red solid");
    }, function() {
        $(this).css("border", "none"); // Reset border
    });
    $('.carte').click(puzzle);
}


function puzzle() {
    let selectedCase = $(this);
    let bottomCase = $(this).parent().next().find(`[data-id-case="${selectedCase.data('id-case')}"]`);
    let upperCase  =  $(this).parent().prev().find(`[data-id-case="${selectedCase.data('id-case')}"]`);
    let nextCase = $(this).next('.carte');
    let prevCase = $(this).prev('.carte');

    if(nextCase.data('id-image') === lastImgId ) {
       switchCards(selectedCase,nextCase);
        checkCards();
    } else if (prevCase.data('id-image') === lastImgId) {
        switchCards(selectedCase,prevCase);
        checkCards();
    }  else if (bottomCase.data('id-image') === lastImgId) {
        switchCards(selectedCase,bottomCase);
        checkCards();
    }  else if (upperCase.data('id-image') === lastImgId) {
        switchCards(selectedCase,upperCase);
        checkCards();
    }
}

function checkCards() {
    let endGame = true;
    $('.row1, .row2, .row3').each(function(index) {
        $(this).find(".carte").each(function() {
            let caseId = $(this).data('id-case');
            let imageId = $(this).data('id-image');

            // Adjust the condition for rows 2 and 3
            if (index === 0 && caseId !== imageId) {
                endGame = false;
                return false; // Exit the loop for row1
            } else if (index === 1 && (caseId + 3) !== imageId) {
                endGame = false;
                return false; // Exit the loop for row2
            } else if (index === 2 && (caseId + 6) !== imageId) {
                endGame = false;
                return false; // Exit the loop for row3
            }
        });
        if (!endGame) return false;
    });

    if (endGame) {
        if ($('.win').length === 0) {
            $('body').append(`
                <div class="win">Vous avez gagné</div>
                <button id="resetBtn">Recommencer</button>
            `);
            $('.row3').find('[data-id-case="3"]').removeClass('black');
            $('#resetBtn').click(function() {
                location.reload();
            });
        }
    }
}



function switchCards(selectedCard, card2switch) {
    //move actual -> next
    card2switch.data('id-image',selectedCard.data('id-image'));
    card2switch.find('img').attr('src',selectedCard.find('img').attr('src'));
    card2switch.find('img').attr('alt',selectedCard.find('img').attr('alt'));
    //remove black class
    card2switch.removeClass('black');
    //move next -> actual
    selectedCard.find('img').attr('src',lastImgSrc);
    selectedCard.find('img').attr('alt','image9');
    selectedCard.data('id-image',lastImgId);
    selectedCard.addClass('black');
    checkCards();
}