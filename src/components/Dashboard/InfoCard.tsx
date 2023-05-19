interface InfoCardProps {
  title: string
  data: any
}

function InfoCard ({ title }: InfoCardProps): JSX.Element {
  return (
    <div className='flex flex-col bg-slate-50 max-w-xs rounded-md items-left p-3 w-full shadow-lg border border-slate-300'>
      <h1 className='text-lg font-semibold'>{title}</h1>
      <p className='text-3xl font-bold self-center my-1'>{}</p>
      <hr className='my-3'/>
    </div>
  )
}

export default InfoCard
