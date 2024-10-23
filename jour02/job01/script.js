let myButton = document.querySelector('#button');
myButton.addEventListener('click', citation);
function citation() 
{
    let citation = document.querySelector("#citation").textContent;
    console.log(citation);
}