import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './../store/reducer'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
//         applyMiddleware(...thunk)
//     ));

export default store;