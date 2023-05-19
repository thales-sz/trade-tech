import { useContext, useState } from 'react'
import DropdownCountry from './selectors/DropdownCountry'
import DropdownSeason from './selectors/DropdownSeason'
import Context from '../common/context/Context'
import { CgDanger } from 'react-icons/cg'
import { useMutation } from 'react-query'
import { api } from '../api/queryClient'
import DropdownLeague from './selectors/DropdownLeague'
import DropdownTeam from './selectors/DropdownTeam'

function SelectTeam (): JSX.Element {
  const { selection: { country, season } } = useContext(Context)
  const [error, setError] = useState(false)
  const [teams, setTeamsState] = useState(false)
  const [tryAgain, setTryAgain] = useState(false)
  const [leaguesState, setLeaguesState] = useState([])

  const { mutateAsync } = useMutation({
    mutationFn: async (): Promise<any> => {
      const { data } = await api.get(`/leagues?country=${country}&season=${season}`)
      return data
    }
  })

  // https://v3.football.api-sports.io/leagues/seasons (Temporadas)
  // https://v3.football.api-sports.io/countries (Países)
  // https://v3.football.api-sports.io/leagues?country=value&season=value (Ligas)
  // https://v3.football.api-sports.io/teams?country=brazil&league=628&season=2020 (Times)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setError(false)
    setTryAgain(false)
    console.log(country, season)
    if (country !== '' || season !== 0) {
      const data = await mutateAsync()
      if (data.response[0] !== undefined) {
        setLeaguesState(data.response)
        return
      }
      setTryAgain(true)
      return
    }
    setError(true)
  }

  const handleTeam = (): void => {
    setTeamsState(true)
  }

  return (
    <section className='flex w-3/4 h-full mx-auto text-center'>
      <div className='flex flex-col mt-48 mx-auto items-center gap-2'>
        <h1 className='text-2xl font-semibold mb-5'>Através do menu abaixo selecione o time desejado!</h1>
        <form onSubmit={handleSubmit} className='flex flex-wrap gap-5 items-center mx-auto justify-center p-2'>
          {teams
            ? <DropdownTeam />
            : leaguesState.length > 0
              ? <DropdownLeague leagueListProp={leaguesState} handleButtonTeamClickProp={handleTeam}/>
              : <>
                <DropdownCountry />
                <DropdownSeason />
                <button type="submit" className="hover:bg-slate-700 w-1/3 rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 mt-4 mx-auto">Próximo</button>
              </>
              }
        </form>
        {tryAgain &&
          <div className='flex text-orange-500 gap-2'>
             <CgDanger width={15} color='orange'/>
              Ocorreu algum erro, tente novamente com outros valores!
          </div>}
        {error &&
          <div className='flex text-red-500 gap-2'>
             <CgDanger width={15} color='red'/>
              Você deve selecionar os dois campos!
          </div>}
      </div>
    </section>
  )
}

export default SelectTeam
