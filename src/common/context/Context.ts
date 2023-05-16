/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'

export interface IContext {
  signedIn: boolean
  toggleSignedIn: (bol: boolean) => void
}

const Context = React.createContext<IContext>({
  signedIn: false,
  toggleSignedIn: () => {}
})

export default Context
