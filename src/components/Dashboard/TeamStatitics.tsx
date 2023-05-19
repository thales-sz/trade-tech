import InfoCard from './InfoCard'

interface TeamTableProps {
  data: any
}

function TeamStatistics ({ data }: TeamTableProps): JSX.Element {
  return (
    <div>
      <InfoCard {...data}/>
      <InfoCard {...data}/>
      <InfoCard {...data}/>
      <InfoCard {...data}/>
    </div>
  )
}

export default TeamStatistics
