import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signInSchema } from '../common/schemas/form.schema'
import { useMutation } from 'react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CgDanger } from 'react-icons/cg'
import Loading from './Loading'
import { api } from '../api/queryClient'

interface IForm {
  apiKey: string
}

function SignIn (): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<IForm>({
    resolver: zodResolver(signInSchema)
  })

  const { mutateAsync } = useMutation({
    mutationFn: async (key: string) => {
      return await api.get('/status', { headers: { 'x-apisports-key': key } })
    }
  })

  const SignIn = handleSubmit(async ({ apiKey }) => {
    setError(false)
    setLoading(true)

    const { data } = await mutateAsync(apiKey)

    if (data.results === 1) {
      localStorage.setItem('user', JSON.stringify(data.response))
      localStorage.setItem('apiKey', apiKey)
      navigate('/home')
      return
    }

    setError(true)
    setLoading(false)
  })

  return (
    <>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 mx-auto rounded-lg bg-white shadow-xl space-y-4 p-6 sm:p-8 md:space-y-6 max-sm:w-full w-1/4 sm:w-2/3 md:w-1/2/3 xl:w-1/3">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Entre com sua chave da API Football
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={SignIn}>
              <div>
                <label
                  htmlFor="apiKey"
                  className="mb-2 block text-sm font-medium text-gray-900 "
                >
                  Chave da API
                </label>
                <input
                  {...register('apiKey')}
                  type="text"
                  id="apiKey"
                  className="focus:ring-slate-600 focus:border-slate-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                  placeholder="API Key"
                  required
                />
              </div>
              <button type="submit" className="hover:bg-slate-700 w-full rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">Enviar</button>
            </form>
            {loading && <Loading />}
            { error &&
              <div className='flex text-red-500 gap-2'>
                <CgDanger width={10} color='red'/>
                Chave da API inválida
              </div> }
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Não possui uma chave?{' '}
              <a className="font-medium text-blue-400 hover:underline" href="https://dashboard.api-football.com/register" target='_blank' rel="noreferrer">
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
    </>
  )
}

export default SignIn
