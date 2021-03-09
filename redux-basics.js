const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Reducer
const rooReducer = (state = initialState, action) => {
    return state;
};



// Store 
const store = createStore(rooReducer);
console.log(store.getState())


//Dispatching Action 




//Subscription