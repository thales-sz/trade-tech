import { useState } from 'react'
import { useMutation } from 'react-query'
import { api } from '../../api/queryClient'
import Loading from '../Loading'
import { CgDanger } from 'react-icons/cg'
import SelectorSeason from './SelectorSeason'

// https://v3.football.api-sports.io/leagues/seasons (Temporadas)
// https://v3.football.api-sports.io/countries (Países)
// https://v3.football.api-sports.io/leagues?country=brazil&season=2020 (Ligas)
// https://v3.football.api-sports.io/teams?country=brazil&league=628&season=2020 (Times)

function DropdownSeason (): JSX.Element {
  const [dropdownEnabled, setDropdownEnabled] = useState(false)
  const [itemsState, setItems] = useState<number[]>([])
  const [form, setForm] = useState({
    selectedSeason: 0
  })

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('season', target.value)
    setForm({
      ...form,
      [target.name]: Number(target.value)
    })
  }

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (): Promise<any> => {
      const { data } = await api.get('/leagues/seasons')
      return data.response
    }
  })

  const handleButtonClick = async (): Promise<void> => {
    setDropdownEnabled(!dropdownEnabled)
    if (itemsState[0] === undefined) {
      const data = await mutateAsync()
      setItems(data)
    }
  }

  return (
    <div className='flex flex-col'>
      <button
        id="dropdownSearchButton"
        data-dropdown-toggle="dropdownSearch"
        onClick={handleButtonClick}
        data-dropdown-placement="bottom" className="flex text-white bg-slate-700 hover:bg-slate-800 focus:ring-2 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm p-4 text-center items-center w-60 gap-2 justify-around" type="button">
          Selecionar Temporada
          <svg className="w-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
      </button>
      <div id="dropdownSearch" className={`${dropdownEnabled ? '' : 'hidden'} z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700 mt-14 absolute`}>
          <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700">
            { isLoading
              ? <Loading />
              : (itemsState != null && itemsState.length > 0)
                  ? itemsState.map((season, index) => {
                    return (
                      <SelectorSeason season={season} key={index} handleInputChange={handleInputChange} form={form}/>
                    )
                  })
                  : <div className='flex text-red-500 gap-2 mt-40'>
                      <CgDanger width={10} color='red'/>
                      Erro!
                    </div>
            }
          </ul>
      </div>
  </div>

  )
}

export default DropdownSeason
