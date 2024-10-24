document.addEventListener("keydown", changeBodyColor);

let  pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let  current = 0;
let body = document.querySelector('body');
function changeBodyColor(event) {
    if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
        current = 0;
        return;
    }
    
    current++;

    if (pattern.length === current) {
        current = 0;
        body.style.backgroundColor = "blue";
    }

}