import { useContext, useState } from 'react'
import { useMutation } from 'react-query'
import { api } from '../../api/queryClient'
import Loading from '../Loading'
import { CgDanger } from 'react-icons/cg'
import SelectorCountry from './SelectorCountry'
import Context from '../../common/context/Context'
import { RxCross2 } from 'react-icons/rx'

export interface Country {
  name: string
  code: string
  flag: string
}

function DropdownCountry (): JSX.Element {
  const { toggleCountry } = useContext(Context)
  const [dropdownEnabled, setDropdownEnabled] = useState(false)
  const [itemsState, setItems] = useState<Country[]>([])
  const [form, setForm] = useState({
    searchTerm: '',
    country: ''
  })

  const countriesList = itemsState.filter((country) => {
    return country.name.toLowerCase().match(form.searchTerm.toLocaleLowerCase())
  })

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: async (): Promise<Country[]> => {
      const { data } = await api.get('/countries')
      return data.response
    }
  })

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      [target.name]: target.value
    })
    toggleCountry(target.value)
  }

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
        Selecionar País
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
            { isLoading
              ? <Loading />
              : (countriesList != null && itemsState.length > 0)
                  ? countriesList.map((country, index) => {
                    return (
                      <SelectorCountry {...country} key={index} handleInputChange={handleInputChange} form={form}/>
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

export default DropdownCountry
