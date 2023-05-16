import { useState } from 'react'

function Header (): JSX.Element {
  const [headerBlack, setHeaderBlack] = useState<boolean>(false)

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
    </header>
  )
}

export default Header
