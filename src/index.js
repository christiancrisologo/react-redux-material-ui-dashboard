import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin';
// import reducer from './reducers' 
import App from './components/app/App'

// const middleware = [ thunk ];
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }

// const store = createStore(
//   reducer,
//   applyMiddleware(...middleware)
// )
 
injectTapEventPlugin();

render( 
    <App /> ,
  document.getElementById('root')
)

/*render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)*/
