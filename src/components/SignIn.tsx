import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signInSchema } from '../schemas/form.schema'
import { useMutation, useQuery } from 'react-query'
import axios from 'axios'

function SignIn (): JSX.Element {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(signInSchema)
  })

  const { mutateAsync } = useMutation({
    mutationFn: async (key: string) => {
      return await axios.post('https://v3.football.api-sports.io/status', { headers: { Authorization: key } })
    }
  })

  async function SignIn (key: unknown): Promise<void> {
    console.log(key)
  }

  return (
    <>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 mx-auto rounded-lg bg-white shadow-xl space-y-4 p-6 sm:p-8 md:space-y-6 max-sm:w-full w-1/4 sm:w-2/3 md:w-1/2/3 xl:w-1/3">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Entre com sua chave da API Football
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(SignIn)}>
              <div>
                <label
                  htmlFor="api_key"
                  className="mb-2 block text-sm font-medium text-gray-900 "
                >
                  Chave da API
                </label>
                <input
                  {...register('api_key')}
                  type="email"
                  id="api_key"
                  className="focus:ring-slate-600 focus:border-slate-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                  placeholder="API Key"
                  required
                />
              </div>
              <button type="submit" className="hover:bg-slate-700 w-full rounded-lg bg-slate-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">Enviar</button>
            </form>
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
