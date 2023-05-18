import Dashboard from '../components/Dashboard/Dashboard'
import Footer from '../components/Footer'
import Header from '../components/Header'

function TeamDashboard (): JSX.Element {
  return (
    <div className='h-full bg-slate-300'>
      <Header />
      <Dashboard />
      <Footer absolute={false}/>
    </div>
  )
}

export default TeamDashboard
