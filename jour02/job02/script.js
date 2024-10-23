let citation = document.querySelector("#citation")
let myButton = document.querySelector('#button');
myButton.addEventListener('click', showhide);

function showhide()
{
    if (citation.style.visibility === "hidden") {
        citation.style.visibility = "visible";
    } else {
        citation.style.visibility = "hidden";
    }
}