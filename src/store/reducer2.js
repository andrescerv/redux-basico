// // este es el reducer.
// El reducer recibe acciones y actualiza el state
// Las funciones aquí tienen que ser síncronas y puras
// Las funciones pueden ser múltiples y combinadas

const initialState = { //nombrarlo "initialState" es la práctica correcta
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) { //¿qué significa el ".type"?
        case 'add1':
            return {counter: state.counter + 1};
        case 'sub1':
            return {counter: state.counter - 1};
        case 'add10':
            return {counter: state.counter + 10};
        case 'sub10':
            return {counter: state.counter - 10};
        default:
            return state;
    } 
}

export default reducer;