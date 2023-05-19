import { useContext, useState } from 'react'
import { CgDanger } from 'react-icons/cg'
import SelectorLeague from './SelectorLeague'
import Context from '../../common/context/Context'
import { RxCross2 } from 'react-icons/rx'

export interface League {
  league: {
    id: number
    name: string
    type: string
    logo: string
  }
}

interface DropdownProps {
  handleButtonTeamClickProp: () => void
  leagueListProp: League[]
}

function DropdownLeague ({ leagueListProp, handleButtonTeamClickProp }: DropdownProps): JSX.Element {
  const { toggleLeague, selection } = useContext(Context)
  const [error, setError] = useState(false)
  const [dropdownEnabled, setDropdownEnabled] = useState(false)
  const [form, setForm] = useState({
    searchTerm: '',
    league: 0
  })

  const leagueList = leagueListProp.filter((league) => {
    return league.league.name.toLowerCase().match(form.searchTerm.toLocaleLowerCase())
  })

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      [target.name]: target.value
    })
    target.name === 'league' && toggleLeague(Number(target.value))
  }

  const handleDropdownClick = async (): Promise<void> => {
    setDropdownEnabled(!dropdownEnabled)
  }

  const handleButtonNextClick = async (): Promise<void> => {
    if (selection.country !== '' && selection.league !== 0 && selection.league !== 0) {
      handleButtonTeamClickProp()
    }
    setError(true)
  }

  return (
    <div className='flex flex-col'>
    <button
      id="dropdownSearchButton"
      data-dropdown-toggle="dropdownSearch"
      onClick={handleDropdownClick}
      data-dropdown-placement="bottom" className="flex text-white bg-slate-700 hover:bg-slate-800 focus:ring-2 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm p-4 text-center items-center w-60 gap-2 justify-around" type="button">
        Selecionar Liga
        {dropdownEnabled
          ? <RxCross2 />
          : <svg className="w-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            }
    </button>

      <div id="dropdownSearch" className={`${dropdownEnabled ? '' : 'hidden'} z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700 mt-14 absolute`}>
          <div className="p-3">
            <label htmlFor="input-group-search" className="sr-only">Procurar</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
              </div>
              <input type="text" id="input-group-search" name="searchTerm" value={form.searchTerm} className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-slate-500 focus:border-slate-500" onChange={handleInputChange} placeholder="Procurar"/>
            </div>
          </div>
          <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700">
            {
            (leagueList != null && leagueListProp.length > 0)
              ? leagueList.map((league, index) => {
                return (
                  <SelectorLeague {...league} key={index} handleInputChange={handleInputChange} form={form}/>
                )
              })
              : <div className='flex text-red-500 gap-2 mt-40'>
                  <CgDanger width={10} color='red'/>
                  Erro!
                </div>
            }
          </ul>
      </div>
      <button type="button" className="hover:bg-slate-700 w-2/3 rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 mt-4 mx-auto" onClick={handleButtonNextClick}>Próximo</button>
      {error && <div className='flex text-red-500 gap-2 mt-40'>
                  <CgDanger width={10} color='red'/>
                  Você deve selecionar uma liga!
                </div>}
  </div>

  )
}

export default DropdownLeague
