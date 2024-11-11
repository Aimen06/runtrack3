document.querySelector('button').addEventListener('click',showExpression);

function showExpression()
{
    let expression;
    fetch('expression.txt')
        .then(response => response.text())
        .then(textString => {
            document.body.innerHTML += `<p>${textString}</p>`;
        });
}