import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { DeepReadonlyObject } from '../types'
import { History } from 'history'

import * as students from '../students/reducer'

/**
 * The root store state. Include sub-states for all of the modules / ducks.
 * All of these should be annotated `readonly`, as should everything down
 * the tree of StoreState interfaces, and their contents.
 */
interface MutableStoreState {
  router: RouterState
  students: students.StoreState
}

export type StoreState = DeepReadonlyObject<MutableStoreState>

/**
 * The root reducer, combines reducers for all of the modules / ducks.
 */
export const reducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    students: students.reducer,
  })
