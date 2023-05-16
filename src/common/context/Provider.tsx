import { useCallback, type ReactNode, useReducer } from 'react'
import Context from './Context'
import { ActionTypes, contextReducer } from './Reducer'

interface IProps {
  children: ReactNode
}

function Provider ({ children }: IProps): JSX.Element {
  const [state, dispatch] = useReducer(contextReducer, { signedIn: false })

  const toggleSignedIn = useCallback((bol: boolean) => {
    dispatch({
      type: ActionTypes.toggleSignedIn,
      payload: bol
    })
  }, [dispatch])

  return (
    <Context.Provider value={{ ...state, toggleSignedIn }}>
      {children}
    </Context.Provider>
  )
}

export default Provider
