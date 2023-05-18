import { useCallback, type ReactNode, useReducer } from 'react'
import Context from './Context'
import { ActionTypes, contextReducer } from './Reducer'

interface IProps {
  children: ReactNode
}

function Provider ({ children }: IProps): JSX.Element {
  const [state, dispatch] = useReducer(contextReducer, {
    selection: {
      country: '',
      season: 0,
      league: 0,
      team: 0
    }
  })

  const toggleSeason = useCallback((season: number) => {
    dispatch({
      type: ActionTypes.toggleSeason,
      payload: season
    })
  }, [dispatch])

  const toggleCountry = useCallback((country: string) => {
    dispatch({
      type: ActionTypes.toggleCountry,
      payload: country
    })
  }, [dispatch])

  const toggleLeague = useCallback((league: number) => {
    dispatch({
      type: ActionTypes.toggleLeague,
      payload: league
    })
  }, [dispatch])

  const toggleTeam = useCallback((team: string) => {
    dispatch({
      type: ActionTypes.toggleTeam,
      payload: team
    })
  }, [dispatch])

  return (
    <Context.Provider value={{ ...state, toggleSeason, toggleCountry, toggleLeague, toggleTeam }}>
      {children}
    </Context.Provider>
  )
}

export default Provider
