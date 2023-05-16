import { useContext, useState } from 'react'
import Context from '../common/context/Context'

function Header (): JSX.Element {
  const { signedIn } = useContext(Context)
  const [headerBlack, setHeaderBlack] = useState<boolean>(false)

  console.log(signedIn)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setHeaderBlack(true)
      return
    }
    setHeaderBlack(false)
  })

  return (
    <header
      className={`${
        !headerBlack ? 'bg-transparent' : 'bg-slate-900'
      } fixed z-10 flex h-14 p-3 w-full flex-col bg-gradient-to-b max-sm:max-h-30 from-black to-transparent font-bold text-slate-100 hover:bg-slate-900 text-center`}
    >
     Trade Technology FrontEnd Challenge
     { signedIn ? 'Tá logado' : 'Não ta logado' }
    </header>
  )
}

export default Header
