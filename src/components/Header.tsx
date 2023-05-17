import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Header (): JSX.Element {
  const navigate = useNavigate()
  const [headerBlack, setHeaderBlack] = useState<boolean>(false)
  const [user, setUser] = useState(false)

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
      setUser(data.account.firstname)
      return
    }
    setUser(false)
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
      } fixed z-10 flex h-20 p-3 w-full flex-col bg-gradient-to-b max-sm:max-h-30 from-black to-transparent font-bold text-slate-100 hover:bg-slate-900 text-center drop-shadow-md`}
    >
     <h1 className='text-xl drop-shadow-md'>Trade Technology FrontEnd Challenge</h1>
     <div className="self-end flex items-center gap-4 -mt-4">
          { user &&
          <>
            <h1>Bem vindo, {`${user}`}</h1>
            <button
              type="submit"
              className="hover:bg-slate-700 rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-blue-300"
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
