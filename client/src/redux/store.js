import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import state from './state'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'


const store = createStore(
  reducers,
  state,
  compose(applyMiddleware(thunk), composeWithDevTools())
)

export default store