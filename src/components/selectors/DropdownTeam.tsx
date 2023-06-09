import { useContext, useState } from 'react'
import { useMutation } from 'react-query'
import { api } from '../../api/queryClient'
import Loading from '../Loading'
import { CgDanger } from 'react-icons/cg'
import Context from '../../common/context/Context'
import SelectorTeam from './SelectorTeam'
import { RxCross2 } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'

export interface ITeam {
  team: {
    code: string
    country: string
    founded: number
    id: number
    logo: string
    name: string
    national: boolean
  }
}
function DropdownTeam (): JSX.Element {
  const navigate = useNavigate()
  const { selection: { country, season, league }, toggleTeam } = useContext(Context)
  const [dropdownEnabled, setDropdownEnabled] = useState(false)
  const [error, setError] = useState(false)
  const [itemsState, setItems] = useState<ITeam[]>([])
  const [form, setForm] = useState({
    selectedTeam: 0
  })

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (): Promise<any> => {
      const { data } = await api.get(`/teams?country=${country}&league=${league}&season=${season}`)
      return data.response
    }
  })

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  const handleButtonClick = async (): Promise<void> => {
    setDropdownEnabled(!dropdownEnabled)
    if (itemsState[0] === undefined) {
      const data = await mutateAsync()
      setItems(data)
    }
  }

  const handleButtonNextClick = (): void => {
    setError(false)
    if (form.selectedTeam === 0) {
      setError(true)
      return
    }
    toggleTeam(Number(form.selectedTeam))
    navigate('/dashboard')
  }

  return (
    <div className='flex flex-col'>
      <button
        id="dropdownSearchButton"
        data-dropdown-toggle="dropdownSearch"
        onClick={handleButtonClick}
        data-dropdown-placement="bottom" className="flex text-white bg-slate-700 hover:bg-slate-800 focus:ring-2 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm p-4 text-center items-center w-60 gap-2 justify-around" type="button">
          Selecionar Time
          {dropdownEnabled
            ? <RxCross2 />
            : <svg className="w-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            }
      </button>
      <div id="dropdownSearch" className={`${dropdownEnabled ? '' : 'hidden'} z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700 mt-14 absolute`}>
          <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700">
            { isLoading
              ? <Loading />
              : (itemsState != null && itemsState.length > 0)
                  ? itemsState.map((team, index) => {
                    return (
                      <SelectorTeam {...team} key={index} handleInputChange={handleInputChange} form={form}/>
                    )
                  })
                  : <div className='flex text-red-500 gap-2 mt-40'>
                      <CgDanger width={10} color='red'/>
                      Erro!
                    </div>
            }
          </ul>
      </div>
            <button type="button" className="hover:bg-slate-700 w-2/3 rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 mt-4 mx-auto" onClick={handleButtonNextClick}>Selecionar time</button>
            {error && <div className='flex text-red-500 gap-2 mt-40'>
                  <CgDanger width={10} color='red'/>
                  Você deve selecionar um time!
                </div>}
        </div>

  )
}

export default DropdownTeam
