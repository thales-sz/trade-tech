import Dashboard from '../components/Dashboard'
import Footer from '../components/Footer'
import Header from '../components/Header'

function TeamDashboard (): JSX.Element {
  return (
    <div className='h-screen bg-slate-300'>
      <Header />
      <Dashboard />
      <Footer />
    </div>
  )
}

export default TeamDashboard
