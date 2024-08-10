import _ from 'underscore';

/**
 * Esta funcion crea una Baraja
 * @param {Array <String>} tiposEspeciales Ejemplo: ['C','D','H','S'];
 * @param {Array <String>} tiposDeCarta Ejemplo : ['A','J','Q','K'];
 * @returns {Array} Retorna un nuevo deck
 */

export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error ('tiposDeCarta es obligatroio como un arreglo de string');
   
    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) 
        throw new Error ('tiposEspeciales es obligatroio como un arreglo de string');

    let deck = []; 

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
        
    deck = _.shuffle( deck );
   
    return deck;
};


