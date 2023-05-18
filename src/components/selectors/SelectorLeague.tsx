import { type League } from './DropdownLeague'

interface SelectorProps extends League {
  handleInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
  form: {
    searchTerm: string
    league: number
  }
}

function SelectorCountry ({ league: { id, name, logo }, handleInputChange, form }: SelectorProps): JSX.Element {
  console.log('form:', form.league, 'id:', id)
  return (
    <li>
      <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
        <input id={(id).toString()} name="league" type="checkbox" onChange={handleInputChange} checked={Number(form.league) === id} value={id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
        <label htmlFor={(id).toString()} className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
          {name}
        </label>
        <img src={logo} alt={`${name} logo`} width={25}/>
      </div>
    </li>
  )
}

export default SelectorCountry
