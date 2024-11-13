window.addEventListener('load', function () {
    getType();
    enableButton();
});

let button = document.querySelector('input[type="submit"]');
document.querySelector('#id').addEventListener('input', enableButton);
document.querySelector('#nom').addEventListener('input', enableButton);



button.addEventListener('click',filter)
function getType() {
    fetch("pokemon.json")
        .then(response => response.text())
        .then((pokemon) => {
            let parsedPokemon = JSON.parse(pokemon);
            let typeSet = new Set();
            parsedPokemon.forEach((item) => {
                let typeCombination = item.type.join(',');
                typeSet.add(typeCombination);
            });
            let uniqueTypeCombinations = Array.from(typeSet);
            uniqueTypeCombinations.forEach((typeCombo) => {
                document.querySelector('#type').innerHTML += `<option value="${typeCombo}">${typeCombo}</option>`;
            });
        });
}


function enableButton()
{
    let id = document.querySelector('#id').value;
    let name = document.querySelector('#nom').value;

    console.log('toto');
    button.disabled = !(id && name);
}

function filter(e) {
    e.preventDefault();
    let id = document.querySelector('#id').value;
    let name = document.querySelector('#nom').value;
    let select = document.querySelector('#type')
    let type = select.value;
    fetch("pokemon.json")
        .then(response => response.text())
        .then((pokemon) => {
            let parsedPokemons = JSON.parse(pokemon);
            let result = parsedPokemons.filter( function (poke) {
                let pokename = poke.name.english;
                let formatType = poke.type.join(',');
                if (poke.id == id  && formatType == type && pokename == name)
                {
                    return  poke;
                }
            })
            displayResult(result);
        });
}

function displayResult(pokemon) {
    console.log( pokemon);
    let resultsDiv = document.querySelector('#results');
    resultsDiv.innerHTML = ''; 

    if ( pokemon.length == 0) {
        resultsDiv.innerHTML = '<p>Aucun Pokémon trouvé</p>';
    } else {
            resultsDiv.innerHTML += `
                <div>
                    <h3>${pokemon[0].name.english}</h3>
                    <p>Id: ${pokemon[0].id}</p>
                    <p>Type: ${pokemon[0].type}</p>
                </div>
            `;
    }
}

