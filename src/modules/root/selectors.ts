import { RouterLocation } from 'connected-react-router'
import { LocationState } from 'history'

import { RootStoreState } from './index'

// @ts-ignore
export const routeLocationSelector = (state: RootStoreState) => state.router.location as RouterLocation<LocationState>
