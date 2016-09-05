import createApiReducer from './createApiReducer'
import { ACTION_TYPE } from './action'

export const REDUCER_NAME = 'products'

// TODO: Rewrite so it is similar to my real-world usage.
function transformOnSuccess (payload) {
  return payload
}

export const reducer = createApiReducer(REDUCER_NAME, ACTION_TYPE)
export default reducer
