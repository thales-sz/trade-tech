
import { type Country } from './DropdownCountry'

interface SelectorProps extends Country {
  handleInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
  form: {
    searchTerm: string
    country: string
  }
}

function SelectorCountry ({ name, flag, handleInputChange, form }: SelectorProps): JSX.Element {
  return (
    <li>
      <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
        <input id={name} name="country" type="checkbox" onChange={handleInputChange} checked={form.country === name} value={name} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
        <label htmlFor={name} className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
          {name}
        </label>
        <img src={flag} alt={`${name} flag`} width={25}/>
      </div>
    </li>
  )
}

export default SelectorCountry
