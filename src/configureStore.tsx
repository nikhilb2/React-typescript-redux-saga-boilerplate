import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import authReducer from './redux/auth/reducer'
import authSaga from './redux/auth/saga'


const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const appReducer = combineReducers({
    authReducer
  })
  const store = createStore(appReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(authSaga)
  return store
}
