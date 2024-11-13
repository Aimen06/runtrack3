// Sélectionner le bouton pour ouvrir le modal
const buyPapillonButton = document.getElementById('buyPapillon');

// Créer une instance du modal avec Bootstrap
const myModal = new bootstrap.Modal(document.getElementById('modalAchat'));
const modalForm = new bootstrap.Modal(document.getElementById('modalForm'));

// Ajouter un événement au bouton pour ouvrir le modal
buyPapillonButton.addEventListener('click', () => {
    myModal.show();  // Affiche le modal
});

const citationsBladeRunner = [
    "J'ai vu des choses que vous, humains, ne pourriez pas croire. Des navires en feu surgissant de l'épaule d'Orion.",
    "Tous ces moments se perdront dans l'oubli, comme des larmes dans la pluie. Il est temps de mourir.",
    "C'est dommage qu'elle ne vivra pas ! Mais en même temps, qui vit ?",
    "La lumière qui brûle deux fois plus fort dure deux fois moins longtemps.",
    "Plus humain que l'humain, c'est notre devise.",
    "Réveille-toi ! C'est l'heure de mourir !",
    "C'est une expérience intense de vivre dans la peur, non ? Voilà ce que c'est, être un esclave."
];

rebootBtn.addEventListener('click', randomQuote);

function randomQuote()
{
    const quote = citationsBladeRunner[Math.floor(Math.random() * citationsBladeRunner.length)];
    document.querySelector('.grey p').innerHTML = quote;
}

const pages = document.querySelectorAll(".pagination .page-link");
const proverbes = [
    "Il n'y a pas de bug, seulement des fonctionnalités inattendues.",
    "Pourquoi réparer quelque chose qui peut rester cassé jusqu'à la prochaine mise à jour ?",
    "Un bon programmeur est un programmeur paresseux... il sait toujours comment faire moins pour obtenir plus.",
    "Si ça fonctionne, ne touche à rien. Si ça ne fonctionne pas, débranche et rebranche.",
    "Les développeurs ne vieillissent pas, ils passent en version legacy.",
    "Il y a 10 sortes de gens dans le monde : ceux qui comprennent le binaire, et ceux qui ne le comprennent pas.",
    "Un développeur en panne d'inspiration ? C'est un bug entre la chaise et le clavier.",
    "Codez comme si la personne qui allait maintenir votre code était un psychopathe qui sait où vous habitez.",
    "Un programme sans bug ? C’est une légende urbaine.",
    "Le code parfait n'existe pas, seulement des mises à jour infinies.",
    "Le vrai courage, c'est de tester en production.",
    "C'est toujours plus rapide de coder vite que de coder bien… jusqu'à ce qu'il faille déboguer.",
    "Pourquoi faire simple quand on peut faire compliqué ? – Proverbe du développeur débutant",
    "Les bonnes choses viennent à ceux qui commit.",
    "Ce n'est pas parce que ça compile que ça va marcher."
];
pages.forEach(page => {
    page.addEventListener("click", function (event) {
        event.preventDefault();

        // Récupération du numéro de page
        const pageNumber = this.innerText;

        if (pageNumber === "<<" || pageNumber === ">>") {
            location.reload();
        } else {
            document.querySelector('.grey p').innerHTML = proverbes[Math.floor(Math.random() * proverbes.length)];
        }
    });
});

let li = document.querySelectorAll('.list-group-item');
li.forEach( element => {
    element.addEventListener("click", activeMenu)
    });

function activeMenu ()
{
    li.forEach(element => {
        element.classList.remove('active');
    });

    this.classList.add('active')
}

let progressBar = document.querySelector('.progress-bar');
document.querySelector('.arrowLeft').addEventListener('click', decrease);
document.querySelector('.arrowRight').addEventListener('click', increase);

function increase()
{
    let progressBarLevel = parseInt(progressBar.style.width);
    if((progressBarLevel + 5) <= 100 ) {
        progressBar.style.width = `${progressBarLevel + 5}%`;
    } else {
        progressBar.style.width = '100%';
    }
}

function decrease()
{
    let progressBarLevel = parseInt(progressBar.style.width);
    if((progressBarLevel - 5) >= 0) {
        progressBar.style.width = `${progressBarLevel - 5}%`;
    } else {
        progressBar.style.width = '0';
    }
}

let code = ['d', 'g', 'c']; // Séquence des touches à presser
let currentIndex = 0; // Indice pour suivre l'état de la séquence

document.addEventListener('keyup', function(event) {
    // Vérifier si la touche pressée correspond à la touche attendue dans la séquence
    if (event.key === code[currentIndex]) {
        currentIndex++; // Passer à la touche suivante dans la séquence
        console.log(`Touche ${event.key.toUpperCase()} pressée dans l'ordre.`);

        // Si toute la séquence est pressée dans le bon ordre
        if (currentIndex === code.length) {
            let username = document.querySelector('#username').value ;
            let password = document.querySelector('#password').value ;
            let dodgecoin = document.querySelector('#dodgecoin').value ;
            let basicAddon3 = document.querySelector('#basic-addon3').value
            console.log(username);
            modalForm.show();
            document.querySelector('#modal-username').value = username;
            document.querySelector('#modal-password').value = password;
            document.querySelector('#modal-dodgecoin').value = dodgecoin;
            document.querySelector('#modal-basic-addon3').value = basicAddon3;
            currentIndex = 0; // Réinitialiser la séquence pour pouvoir recommencer
        }
    } else {
        // Si une touche incorrecte est pressée, réinitialiser la séquence
        currentIndex = 0;
    }
});

document.querySelector('form button[type=submit]').addEventListener('click', envoyer);
const spinerColors = ['text-primary', 'text-secondary', 'text-success', 'text-danger', 'text-warning',
    'text-info', 'text-light', 'text-dark']
function envoyer()
{
    let spinner = document.querySelector('.spinner-border');
    if(document.querySelector('#email2').value && document.querySelector('#pass').value) {
        spinner.classList.remove('text-info');
        spinner.classList.add(spinerColors[Math.floor(Math.random() * spinerColors.length)]);
        setTimeout(function(){
            window.location.reload();
        }, 5000);
    }
}