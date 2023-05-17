import DropdownCountry from './selectors/DropdownCountry'
import DropdownSeason from './selectors/DropdownSeason'

function SelectTeam (): JSX.Element {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(e.currentTarget)
  }

  return (
    <section className='flex w-2/3 h-full mx-auto text-center'>
      <div className='flex flex-col mt-48 mx-auto items-center gap-2'>
        <h1 className='text-2xl font-semibold mb-5'>Através do menu abaixo selecione o time desejado!</h1>
        <form onSubmit={handleSubmit} className='flex flex-wrap gap-5 items-center mx-auto border-red-400 border justify-center p-2'>
          <DropdownCountry />
          <DropdownSeason />
          <button type="submit" className="hover:bg-slate-700 w-1/3 rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 mt-4 mx-auto">Próximo</button>
        </form>
      </div>
    </section>
  )
}

export default SelectTeam
