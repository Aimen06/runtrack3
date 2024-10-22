function isPrimerNumber(nb)
{
    let divisor = [];
    if (nb === 2) {
        return  true;
    } 
    for (let i =  2 ; i < nb ; i++) {
        if ((nb % i) === 0) {
            divisor.push(i);
        }
    }
    return (divisor.length < 1);
}



function sommenombrespremiers(nb1, nb2)
{
 return ( isPrimerNumber(nb1) && isPrimerNumber(nb2) ) ? nb1 + nb2 : false;
}

