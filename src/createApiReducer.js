import { handleAction } from 'redux-actions'
import { become } from 'redux-machine'

import {
  generateSuccessActionType,
  generateErrorActionType
} from './createApiActions'

const INIT = 'INIT'
const IN_PROGRESS = 'IN_PROGRESS'

function identity (v) {
  return v
}

function createInitReducer (type) {
  return handleAction(type, (state, action) => Object.assign({}, {
    error: null,
    [become]: IN_PROGRESS
  }), initialState)
}

function createInProgressReducer (successActionType, errorActionType, transformOnSuccess = identity) {
  return handleActions({
    [successActionType]: (state, action) => Object.assign({}, state, {
      error: null,
      ...transformOnSuccess(action.payload),
      [become]: INIT
    }),
    [errorActionType]: (state, action) => Object.assign({}, state, {
      error: action.payload,
      [become]: INIT
    })
  }, initialState)
}

export function createApiReducer (reducerName, actionType, transformOnSuccess = identity) {
  const callActionType = type
  const successActionType = generateSuccessActionType(actionType)
  const errorActionType = generateErrorActionType(actionType)

  const apiReducer = createMachine({
    [INIT]: createInitReducer(callActionType),
    [IN_PROGRESS]: createInProgressReducer(successActionType, errorActionType, transformOnSuccess)
  })
  apiReducer.displayName = `apiReducer(${reducerName})(${actionType})`

  return apiReducer
}
