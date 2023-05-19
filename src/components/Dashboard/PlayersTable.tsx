interface Player {
  player: {
    id: number
    name: string
    age: number
    nationality: string
    photo: string
  }
}
interface PlayersTableProps {
  data: Player[]
}

function PlayersTable ({ data }: PlayersTableProps): JSX.Element {
  return (
    <div className="bg-slate-100 rounded-xl w-fit drop-shadow-md self-right h-fit mt-5">
      <h1 className="text-xl font-semibold p-2 border-b border-slate-500">Jogadores</h1>
      <div className="gap-6 h-[440px] px-3 pb-3 overflow-y-auto text-sm text-gray-700">
        <table className="text-lg">
          <tr>
            <th> </th>
            <th className="p-2 border-b border-r text-left pl-6 border-slate-500">Jogador</th>
            <th className="p-2 border-b border-r border-slate-500">Idade</th>
            <th className="p-2 border-b border-slate-500">Nacionalidade</th>
          </tr>
          {data.map(({ player }) => {
            return (
            <tr key={player.id} className="">
              <td><img src={player.photo} className="rounded-full w-16 drop-shadow-xl m-1"/></td>
              <td className="border-b border-slate-500 w-48">{player.name}</td>
              <td className="border-b border-slate-500">{player.age}</td>
              <td className="border-b border-slate-500">{player.nationality}</td>
            </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default PlayersTable
