let jsonParam = `{
"name": "La Plateforme_",
"address": "8 rue d'hozier",
"city": "Marseille",
"nb_staff": "11",
"creation":"2019"
}` ;
 let key = 'city'

function jsonValueKey(param1, param2)
{
    let obj = JSON.parse(param1);
    return obj[param2];
}

console.log(jsonValueKey(jsonParam, key));