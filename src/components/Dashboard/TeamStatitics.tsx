import Loading from '../Loading'
import InfoCard from './InfoCard'

interface TeamTableProps {
  data: any
}

function TeamStatistics ({ data }: TeamTableProps): JSX.Element {
  if (data.length === 0 || data === undefined) return <Loading />
  return (
    <div>
      <InfoCard data={data.played.total} title={'Total de partidas'}/>
      <InfoCard data={data.wins.total} title={'Total de vitórias'}/>
      <InfoCard data={data.loses.total} title={'Total de derrotas'}/>
      <InfoCard data={data.draws.total} title={'Total de empates'}/>
      <InfoCard data={data.lineups[0].formation} title={'Formação mais utilizada'}/>
    </div>
  )
}

export default TeamStatistics
