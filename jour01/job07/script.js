
function  addDays(date, days) {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000)
}

const paques = function (year) {
    const a = year % 19
    const century = Math.floor(year / 100)
    const yearsAfterCentury = year % 100
    const d =
        (19 * a + century - Math.floor(century / 4) - Math.floor((Math.floor(century - (century + 8) / 25) + 1) / 3) + 15) %
        30;
    const e = (32 + 2 * (century % 4) + 2 * Math.floor(yearsAfterCentury / 4) - d - (yearsAfterCentury % 4)) % 7 ;
    const f = d + e - 7 * Math.floor((a + 11 * d + 22 * e) / 451) + 114;
    const month = Math.floor(f / 31);
    const day = (f % 31) + 1;

    return new Date(year, month - 1, day);
}



function jourtravaille(jour)
{
    let year =  jour.getFullYear();
    let day = jour.getDay();
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    let isFerie = false ;
    
    let armistice =  new Date(year, 10, 11);
    let ascension =  addDays(paques(year), 39);
    let assomption =  new Date(year, 7, 15);
    let national = new Date(year, 6, 14);
    let travail =  new Date(year, 4, 1);
    let jourAn = new Date(year, 0, 1);
    let pentecote = addDays(paques(year), 50);
    let lundiPaque = addDays(paques(year), 1);
    let noel =  new Date(year, 11, 25);
    let toussaint =  new Date(year, 10, 1);
    let victoireAllies = new Date(year, 4, 8) ;
    
    
    let jourFeries 
        = [
        { "nom": "Jour de l'an", "date" : jourAn },
        { "nom": "Lundi de Paques", "date" : lundiPaque },
        { "nom": "Fête du travail", "date" : travail },
        { "nom": "Armistice", "date" : armistice },
        { "nom": "Ascencion", "date" : ascension },
        { "nom": "Pentecôte", "date" : pentecote },
        { "nom": "Fête National", "date" : national },
        { "nom": "Assomption", "date" : assomption },
        { "nom": "Toussaint", "date" : toussaint },
        { "nom": "Victoire des Allies", "date" : victoireAllies },
        { "nom": "Noël", "date" : noel}
    ];

    jourFeries.forEach(
        function(item)
        {

            if (item.date.toLocaleDateString() === jour.toLocaleDateString()) {
                isFerie = true;
                ferieName = item.nom;
            }

        });

    if (!isFerie) {
        if (day === 0 || day === 6)
        {
           msg =  "La date : " +  jour.toLocaleDateString('fr-FR', options) + " tombe un weekend";
        } else {
           msg = "La date : " +  jour.toLocaleDateString('fr-FR', options) + " est un jour travaillé";
        }
    } else {
        msg = "La date " + jour.toLocaleDateString('fr-FR', options) + " est un jour férié : "
            + ferieName;
    }

    console.log(msg);
    
    
    


}

