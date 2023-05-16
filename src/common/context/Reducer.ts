import { type IContext } from './Context'

interface IDispatch {
  type: ActionTypes
  payload: boolean
}

export enum ActionTypes {
  toggleSignedIn = 'toggleSignedIn'
}

export const contextReducer = (state: IContext, { payload, type }: IDispatch): any => {
  switch (type) {
    case ActionTypes.toggleSignedIn:
      console.log('toggleSignedIn', payload)
      return {
        ...state,
        signedIn: payload
      }
    default:
      throw new Error('Unknown action')
  }
}
