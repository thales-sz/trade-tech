/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'

export interface IContext {
  selection: {
    country: string
    season: number
    league: number
  }
  toggleCountry: (country: string) => void
  toggleSeason: (season: number) => void
  toggleLeague: (league: number) => void
}

const Context = React.createContext<IContext>({
  selection: {
    country: '',
    season: 0,
    league: 0
  },
  toggleCountry: () => {},
  toggleSeason: () => {},
  toggleLeague: () => {}
})

export default Context
