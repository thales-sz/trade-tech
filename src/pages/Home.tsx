import { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Context from '../common/context/Context'
import { useNavigate } from 'react-router-dom'

function Home (): JSX.Element {
  const { signedIn } = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    if (!signedIn) navigate('/')
  }, [signedIn, navigate])

  return (
    <div>
      <Header />
    </div>
  )
}

export default Home
