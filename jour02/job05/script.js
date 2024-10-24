document.addEventListener("scroll", changeFooterColor);
let footer = document.querySelector('#footer');
function changeFooterColor() {
    console.log(window.scrollX)
    if (window.scrollX <1000) {
        footer.style.backgroundColor = "yellow";
    } else if (window.scrollX <2000 && window.scrollX <3000 ) {
        footer.style.backgroundColor = "orange";
    } else if (window.scrollX <3000) {
        footer.style.backgroundColor = "red";
    }
}