import { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SignIn from '../components/SignIn'
import { useNavigate } from 'react-router-dom'

function Login (): JSX.Element {
  const navigate = useNavigate()

  useEffect(() => {
    const logedUser = localStorage.getItem('user')
    if (logedUser !== null) navigate('/home')
  }, [navigate])

  return (
    <div className='h-screen bg-slate-300'>
      <Header />
      <SignIn />
      <Footer />
    </div>
  )
}

export default Login
