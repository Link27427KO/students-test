import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { StoreState } from '../modules/root/reducer'

export const useTypeSelector: TypedUseSelectorHook<StoreState> = useSelector
