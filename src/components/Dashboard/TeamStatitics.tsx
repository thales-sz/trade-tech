import InfoCard from './InfoCard'

interface TeamTableProps {
  data: any
}

function TeamStatistics ({ data: { fixtures, lineups } }: TeamTableProps): JSX.Element {
  return (
    <div className='flex gap-8'>
      <InfoCard data={fixtures.played.total} title={'Total de partidas'}/>
      <InfoCard data={fixtures.wins.total} title={'Total de vitórias'}/>
      <InfoCard data={fixtures.loses.total} title={'Total de derrotas'}/>
      <InfoCard data={fixtures.draws.total} title={'Total de empates'}/>
      <InfoCard data={lineups[0].formation} title={'Formação mais utilizada'}/>
    </div>
  )
}

export default TeamStatistics
