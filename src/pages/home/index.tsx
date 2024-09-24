import { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import Input from '../../components/field/InputField'
import Table from '../../components/table/UserTable'

import users from '../../data/users.json' // Data

interface UserDetail {
  id: number,
  name: string,
  username: string,
  email: string,
  type: string,
  ip_address: string,
  mac_address: string,
  image: string,
  created_at: string,
}

export default function Home() {
  const [selectedUser, setSelectedUser] = useState<UserDetail | null>();
  const [sortType, setSortType] = useState<'id' | 'asc' | 'desc'>('id');
  const [result, setResult] = useState<UserDetail[]>([]);
  const [state, setState] = useState({
    query: '',
    list: users
  });

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = e.target.value.toLowerCase();
    
    const filteredUsers = users.filter((user) => {
      if (!searchTerm) return users;
      return (
        user.name.toString().toLowerCase().includes(searchTerm) ||
        user.username.toString().toLowerCase().includes(searchTerm) ||
        user.email.toString().toLowerCase().includes(searchTerm)
      )
    })

    // Update results with the filtered users based on the search term entered
    setResult(filteredUsers);
    console.log(result);
    setState({
      query: searchTerm,
      list: sortUsers(filteredUsers, sortType)
    })
  }

  function sortUsers(list: UserDetail[], sortType: 'id' | 'asc' | 'desc') {
    const sortedList = [...list];

      if (sortType === 'id') {
        sortedList.sort((a, b) => a.id - b.id)
      } else if (sortType === 'asc') {
        sortedList.sort((a, b) => a.name.localeCompare(b.name))
      } else if (sortType === 'desc') {
        sortedList.sort((a, b) => b.name.localeCompare(a.name))
      }

    return sortedList
  }

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newSortType = e.target.value as 'id' | 'asc' | 'desc';
    setSortType(newSortType);

    setState({
      query: state.query,
      list: sortUsers(state.list, newSortType)
    })
  }
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="mt-16 mx-2 sm:m-14 w-full">
        <div className="container">
          {/* Header */}
          <div className="flex mx-auto justify-between items-center">
            {/* Welcome Heading */}
            <div className="flex flex-col">
              <p className="text-gray-primary text-sm truncate max-w-xs">Welcome to Dashboard</p>
              <div className="flex items-center">
                  <h1 className="text-3xl font-semibold text-black truncate">
                    User Directory
                  </h1>
                  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Arrow / Chevron_Right_MD">
                    <path id="Vector" d="M10 8L14 12L10 16" stroke="#02BCC8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
              </div>
            </div>
            
            {/* Sort & Search */}
            <div className="flex flex-wrap self-end justify-end space-x-2 gap-y-2">
              {/* Sort */}
              <div className="relative">
                <select onChange={handleSortChange} value={sortType} className="flex items-center h-8 bg-zinc-100/20 rounded-xl shadow border text-sm border-gray-primary px-2 text-gray-primary">
                  <option value="id">Sort by: ID</option>
                  <option value="asc">Sort by: ASC</option>
                  <option value="desc">Sort by: DESC</option>
                </select>
              </div>
              {/* Search */}
              <div className="min-w-[15vh] w-full sm:w-auto relative">
                <Input id={'search'} value={state.query} onChange={handleSearchChange} label={'search'} placeholder={'Search users...'} isSearchbar={true} />
              </div>
            </div>
          </div>

          <br />

          {/* Table */}
          <Table data={state.list} onClick={setSelectedUser} />

          <hr className='my-4' />

          {/* Detail */}
          <div>
            <div className="flex space-x-2">
              <h1 className="text-2xl font-semibold truncate">User Detail</h1>
              <div className="pt-1.5 text-neutral-700 w-7 h-7">
                <img src="/src/assets/svg/detail.svg" alt="show detail" />
              </div>
            </div>
            {selectedUser ? (
              <div className="flex flex-col sm:flex-row h-auto justify-between max-w-[130vh] items-start gap-6 p-4">
                <img className="w-24 h-24 rounded-full" src={selectedUser.image ?? "https://via.placeholder.com/100x100"} alt="Profile" />
                <div className="flex flex-col gap-2">
                  <div className="text-neutral-700 text-md font-normal">ID: {selectedUser.id}</div>
                  <div className="text-neutral-700 text-md font-normal">Name: {selectedUser.name}</div>
                  <div className="text-neutral-700 text-md font-normal">Email: {selectedUser.email}</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-neutral-700 text-md font-normal">Username: {selectedUser.username}</div>
                  <div className="text-neutral-700 text-md font-normal">Type: {selectedUser.type}</div>
                  <div className="text-neutral-700 text-md font-normal">Joined At: {selectedUser.created_at}</div>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-72">
                  <div className="text-neutral-700 text-md font-normal">Mac Address: {selectedUser.mac_address}</div>
                  <div className="text-neutral-700 text-md font-normal">IPv4: {selectedUser.ip_address}</div>
                </div>
              </div>
            ) : (
              <div className="my-4 text-gray-primary text-md font-normal">No user selected.</div>
            ) }
          </div>
        </div>
      </div>
    </div>
  )
}
