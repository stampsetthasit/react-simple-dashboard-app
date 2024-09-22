import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Home() {
  return (
    <>
      <Sidebar />
      <div>Home Page</div>
      <h6>Hello User, Welcome home</h6>
      <h1>User Directory <span>&gt;</span></h1>
      <button type="button">Sort By</button>
      <input type="text" value="" placeholder="Search Name or Username" />
      <table>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Joined At</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>SettX</td>
          <td>@SettX</td>
          <td>setthx@email.com</td>
          <td>19 September 2024</td>
          <td>Action</td>
        </tr>
      </table>
      <br />
      <h1>User Detail <span>A</span></h1>
      <img src="User Image" alt="User Image" />
      <table>
        <tr>
          <td>Name:</td>
          <td>Usr:</td>
          <td>Mac: </td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>Type:</td>
          <td>IPv4:</td>
        </tr>
        <p>Joined At:</p>
      </table>
    </>
  )
}
