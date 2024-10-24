let textArea = document.querySelector('#keyloger');

let isFocus = false;

document.addEventListener("keydown", logKey);
textArea.onfocus = function(){isFocus = true};
textArea.onblur = function(){isFocus = false};

function logKey(e) {
    let pattern = /^[a-zA-Z]$/;
    if (pattern.test(e.key)) {
        if (isFocus) {
            textArea.value += ` ${e.key}` + ` ${e.key}` ;
        } else {
            textArea.value += ` ${e.key}` ;
        }
    }
}