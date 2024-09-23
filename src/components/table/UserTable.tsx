type Props = {
  data: {
      id: number,
      name: string,
      username: string,
      email: string,
      type: string,
      ip_address: string,
      mac_address: string,
      image: string,
      created_at: string,
  }[],
  onClick: (target: any) => void;
}

const UserTable = (props: Props) => {
  return (
    <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
            <thead className="border-b border-gray-primary">
                <th className="py-2 pl-2 text-start text-light-blue-primary font-semibold">Id</th>
                <th className="py-2 pl-2 text-start text-light-blue-primary font-semibold">Name</th>
                <th className="py-2 pl-2 text-start text-light-blue-primary font-semibold">Username</th>
                <th className="py-2 pl-2 text-start text-light-blue-primary font-semibold">Email</th>
                <th className="py-2 pl-2 text-start text-light-blue-primary font-semibold">Joined At</th>
                <th className="py-2 pr-2 text-start text-light-blue-primary font-semibold">Action</th>
            </thead>
            {props.data.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-2 text-center text-gray-primary">
                  No users found.
                </td>
              </tr>
            ) : (props.data.map((data) => (
              <tbody>
                <td className="py-1 pl-2 text-neutral-700 text-base font-normal">{data.id}</td>
                <td className="py-1 pl-2 text-neutral-700 text-base font-normal">{data.name}</td>
                <td className="py-1 pl-2 text-neutral-700 text-base font-normal">{data.username}</td>
                <td className="py-1 pl-2 text-neutral-700 text-base font-normal">{data.email}</td>
                <td className="py-1 pl-2 text-neutral-700 text-base font-normal">{data.created_at}</td>
                <td className="py-1 text-neutral-700 w-6 h-6">
                    <button type="button" onClick={() => props.onClick(data)} className="p-0.5 items-center align-middle bg-neutral-400/20 rounded">
                        <img src="/src/assets/svg/detail.svg" alt="show detail" />
                    </button>
                </td>
              </tbody>
            ))
          )}
        </table>
    </div>
  )
}

export default UserTable