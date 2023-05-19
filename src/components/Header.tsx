import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface IUser {
  account: {
    firstname: string
    lastname: string
    email: string
  }
}

function Header (): JSX.Element {
  const navigate = useNavigate()
  const [headerBlack, setHeaderBlack] = useState<boolean>(false)
  const [user, setUser] = useState<IUser>({
    account: { firstname: '', lastname: '', email: '' }
  })

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setHeaderBlack(true)
      return
    }
    setHeaderBlack(false)
  })

  useEffect(() => {
    const logedUser = localStorage.getItem('user')
    if (logedUser !== null && logedUser !== '') {
      const data = JSON.parse(logedUser)
      setUser(data)
      return
    }
    localStorage.clear()
  }, [])

  function handleButtonClick (): void {
    localStorage.removeItem('user')
    localStorage.removeItem('apiKey')
    navigate('/')
  }

  return (
    <header
      className={`${
        !headerBlack ? 'bg-transparent' : 'bg-slate-900'
      } fixed z-10 flex h-32 p-3 w-full flex-col bg-gradient-to-b max-sm:max-h-30 from-black to-transparent font-bold text-slate-100 hover:bg-slate-900 text-center drop-shadow-md`}
    >
     <div className="flex items-center flex-wrap text-center justify-between">
      <h1 className='text-xl drop-shadow-md w-full p-2'>Trade Technology FrontEnd Challenge</h1>
          { user.account.firstname !== '' &&
          <>
            <h1 className='w-fit text-lg'>Bem vindo(a), {`${user.account.firstname}`}</h1>
            <button
              type="submit"
              className="hover:bg-slate-700 rounded-lg bg-slate-700 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-blue-300 w-44"
              onClick={handleButtonClick}>
              Sair
            </button>
          </>
          }
     </div>
    </header>
  )
}

export default Header
