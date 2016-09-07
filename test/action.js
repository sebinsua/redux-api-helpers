import createApiActions from './createApiActions'

export const ACTION_TYPE = 'FETCH_PRODUCTS'

export const actions = createApiActions(ACTION_TYPE)
export default actions.callAction
