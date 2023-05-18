import Graphic from './Graphic'

interface TeamTableProps {
  data: any
}

function TeamStatistics ({ data }: TeamTableProps): JSX.Element {
  return (
    <div>
      <Graphic />
    </div>
  )
}

export default TeamStatistics
