import z from 'zod'

export const signInSchema = z.object({
  apiKey: z.string().nonempty('A chave é obrigatória')
})
