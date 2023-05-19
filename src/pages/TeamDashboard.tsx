import Dashboard from '../components/Dashboard/Dashboard'
import Header from '../components/Header'

function TeamDashboard (): JSX.Element {
  return (
    <div className='h-full bg-slate-300'>
      <Header />
      <Dashboard />
    </div>
  )
}

export default TeamDashboard
