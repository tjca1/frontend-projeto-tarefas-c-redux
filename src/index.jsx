import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import App from './main/app'
import adminReducers from './main/reducers'

////////////////MIDDLEWARE//////////////////////////
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
/////////////////////////////////////////////////////

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
                 && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, multi, promise)(createStore)(adminReducers, devTools)
//const store = applyMiddleware(promise)(createStore)(adminReducers, devTools)
//const store = applyMiddleware(multi,promise)(createStore)(adminReducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('app')

)