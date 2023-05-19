import { useContext, useEffect, useState } from 'react'
import Context from '../../common/context/Context'
import { useNavigate } from 'react-router-dom'
import { CgDanger } from 'react-icons/cg'
import { useQueries } from 'react-query'
import { api } from '../../api/queryClient'
import Loading from '../Loading'
import PlayersTable from './PlayersTable'
import TeamStatistics from './TeamStatitics'
import Graphic from './Graphic'

function Dashboard (): JSX.Element {
  const { selection: { season, team, league } } = useContext(Context)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const logedUser = localStorage.getItem('user')
    if (logedUser == null || logedUser === '') navigate('/')
    if (season === 0 || team === 0 || league === 0) setError(true)
  }, [navigate, season, team, league])

  const fetchStatistics = async (): Promise<any> => {
    const { data } = await api.get(`teams/statistics?league=${league}&season=${season}&team=${team}`)
    return data.response
  }

  const fetchPlayers = async (): Promise<any> => {
    const { data } = await api.get(`/players?league=${league}&season=${season}&team=${team}`)
    return data.response
  }

  const [statistics, players] = useQueries([
    { queryKey: ['statistics', 1], queryFn: fetchStatistics, retry: 0, refetchOnWindowFocus: false },
    { queryKey: ['players', 2], queryFn: fetchPlayers, retry: 0, refetchOnWindowFocus: false }
  ])

  console.log(statistics.data, players.data)

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
        : statistics.isLoading || players.isLoading
          ? <Loading />
          : <div className='w-full flex flex-wrap justify-center gap-8'>
              <h1 className='w-full mt-40 text-3xl font-semibold'>Temporada {`${season}`}</h1>
              <TeamStatistics data={statistics.data} />
              <PlayersTable data={players.data}/>
              <Graphic />
            </div>
        }
    </div>
  )
}

export default Dashboard
