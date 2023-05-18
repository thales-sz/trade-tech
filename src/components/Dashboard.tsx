import { useContext, useEffect, useState } from 'react'
import Context from '../common/context/Context'
import { useNavigate } from 'react-router-dom'
import { CgDanger } from 'react-icons/cg'

function Dashboard (): JSX.Element {
  const { selection: { season, team, league } } = useContext(Context)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const logedUser = localStorage.getItem('user')
    if (logedUser == null || logedUser === '') navigate('/')
    if (season === 0 || team === 0 || league === 0) setError(true)
  }, [navigate, season, team, league])

  return (
    <div className="flex items-center w-3/4 border border-red-500 mx-auto h-full text-center">
      {error
        ? <div className='flex flex-col items-center text-center text-red-500 gap-2 mt-40 mx-auto'>
            <div className='flex text-2xl gap-4'>
              <CgDanger width={20} color='red'/>
              Você deve selecionar o time primeiro!
            </div>
            <button onClick={() => { navigate('/home') }} className='bg-slate-600 hover:cursor-pointer rounded-md text-slate-100 p-5'>Voltar</button>
          </div>
        : <h1>{`${team}`} na temporada {`${season}`}</h1>}
    </div>
  )
}

export default Dashboard
