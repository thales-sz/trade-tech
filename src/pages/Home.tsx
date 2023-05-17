import { useEffect } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Dashboard from '../components/Dashboard'

function Home (): JSX.Element {
  const navigate = useNavigate()

  useEffect(() => {
    const logedUser = localStorage.getItem('user')
    if (logedUser == null || logedUser === '') navigate('/')
  }, [navigate])

  return (
    <div className='h-screen bg-slate-300'>
      <Header />
      <Dashboard />
      <Footer />
    </div>
  )
}

export default Home
