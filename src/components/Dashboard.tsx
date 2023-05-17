import DropdownCountry from './selectors/Dropdown'

function Dashboard (): JSX.Element {
  return (
    <section className='w-2/3 border border-red-400 h-full mx-auto'>
      <div className='mt-48'>
        <DropdownCountry />
      </div>
    </section>
  )
}

export default Dashboard
