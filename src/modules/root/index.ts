import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { History } from 'history'

import { reducer, StoreState as _RootStoreState } from '../root/reducer'
import rootSaga from '../root/sagas'
import { DeepReadonlyObject } from '../types'

export type RootStoreState = DeepReadonlyObject<_RootStoreState>
/**
 * Create the redux-saga middleware.
 */
const sagaMiddleware = createSagaMiddleware()

export function configureStore(history: History) {
  //Init middlewares
  const middlewares = [routerMiddleware(history), sagaMiddleware]

  //Init enhancers
  const enhancers =
    process.env.NODE_ENV !== 'development'
      ? compose(applyMiddleware(...middlewares))
      : compose(applyMiddleware(...middlewares), devToolsEnhancer({}))

  //Store creation
  const store = createStore(reducer(history), enhancers as StoreEnhancer<RootStoreState>)

  sagaMiddleware.run(rootSaga)

  return store
}
