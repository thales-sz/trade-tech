import { type IContext } from './Context'

interface IDispatch {
  type: ActionTypes
  payload: string | number
}

export enum ActionTypes {
  toggleSeason = 'toggleSeason',
  toggleCountry = 'toggleCountry',
  toggleLeague = 'toggleLeague'
}

export const contextReducer = (state: IContext, { payload, type }: IDispatch): any => {
  switch (type) {
    case ActionTypes.toggleSeason:
      return {
        ...state,
        selection: {
          ...state.selection,
          season: payload
        }
      }
    case ActionTypes.toggleCountry:
      return {
        ...state,
        selection: {
          ...state.selection,
          country: payload
        }
      }
    case ActionTypes.toggleLeague:
      return {
        ...state,
        selection: {
          ...state.selection,
          league: payload
        }
      }
    default:
      throw new Error('Unknown action')
  }
}
