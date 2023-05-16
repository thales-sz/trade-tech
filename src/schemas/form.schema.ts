import z from 'zod'

export const signInSchema = z.object({
  api_key: z.string().nonempty('A chave é obrigatória')
})
