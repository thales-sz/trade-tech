interface InfoCardProps {
  title: any
  lineups: any
}

function InfoCard (props: InfoCardProps): JSX.Element {
  console.log(props)
  return (
    <div className='flex flex-col bg-slate-50 max-w-xs rounded-md items-left p-3 w-full shadow-lg border border-slate-300'>
      <h1 className='text-lg font-semibold'>Gols Marcados</h1>
      <p className='text-3xl font-bold self-center my-1'>{}</p>
      <hr className='my-3'/>
    </div>
  )
}

export default InfoCard
