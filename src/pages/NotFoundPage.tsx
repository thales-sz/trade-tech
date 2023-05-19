import { useNavigate } from 'react-router-dom'

function NotFoundPage (): JSX.Element {
  const navigate = useNavigate()

  return (
    <div className="w-full flex flex-col h-screen bg-slate-200 items-center gap-10 p-20">
        <h1 className='text-4xl'>404 - Página não encontrada!</h1>
        <button className="bg-slate-600 rounded-md p-2 w-1/5 text-white" onClick={() => { navigate('/home') }}>Voltar para a página inicial</button>
    </div>
  )
}

export default NotFoundPage
