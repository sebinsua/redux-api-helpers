import { createAction } from 'redux-actions'

export function generateSuccessActionType (type) {
  return `${type}_SUCCESS`
}

export function generateErrorActionType (type) {
  return `${type}_ERROR`
}

export default function createApiActions (type) {
  const callActionType = type
  const successActionType = generateSuccessActionType(type)
  const errorActionType = generateErrorActionType(type)

  const callAction = createAction(callActionType)
  const successAction = createAction(successActionType)
  const errorAction = createAction(errorActionType)

  callAction.displayName = `apiAction(${callActionType})`
  successAction.displayName = `apiAction(${successActionType})`
  errorAction.displayName = `apiAction(${errorActionType})`

  return { callAction, successAction, errorAction }
}
