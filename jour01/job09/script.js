function tri(tab,ordre)
{
 if( ordre === 'asc')  {
     tab.sort((a,b) => a-b );
 } else if (ordre === 'desc') {
    tab.sort((a,b) => b-a );
 } else {
    console.log('mauvais parametre') ;
    return;
 }
 console.log(tab);
}



