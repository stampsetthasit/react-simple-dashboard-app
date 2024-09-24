import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

type Props = {
  title: string;
  path: string;
  icon: string;
}

const Sidebar = ({ }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const { name, username, image } = location.state || JSON.parse(localStorage.getItem('user') || '{}');

  const Menu: Props[] = [
    {
      title: "User Directory",
      path: "#",
      icon: "src/assets/svg/dashboard.svg"
    },
    {
      title: "Github",
      path: "https://github.com/stampsetthasit",
      icon: "src/assets/svg/github.svg",
    }
  ]

  useEffect(() => {
    // If there's no data in state or localStorage, you can redirect the user to login
    if (!name || !username) {
      navigate("/")
    }
  }, [name, username]);

  return (
    <div className='flex'>
      <button type="button" onClick={() => setIsOpen(!isOpen)} className={`z-10 absolute cursor-pointer ${isOpen ? "ml-[24vh] top-8 w-5" : "left-2 top-2 w-7 border-2 rounded-md"} duration-300`}>
        {isOpen ? <img src="/src/assets/svg/close.svg" alt="close sidebar" /> : <img src="/src/assets/svg/hamburger.svg" alt="hamburger menu" /> }
      </button>
      <div className={`${isOpen ? "w-[28vh]" : "blur-3xl w-0 "} h-screen fixed lg:relative bg-[url('/src/assets/svg/sidebar-background.svg')] rounded-e-2xl shadow-black shadow-lg duration-300`}>
        {/* Heading */}
        <div className="mt-[7vh]">
          <a href="/">
           <h1 className="text-center text-white font-bold text-2xl">Dashboard</h1>
          </a>
        </div>
        {/* Profile */}
        <div className="mt-[4vh]">
          <div className="mx-5">
            <div className="bg-[url('/src/assets/img/profile-bg-blur.png')] rounded-lg shadow-md">
              <div className="flex">
                <img src={image ?? "/src/assets/img/default-profile.jpg"} className="p-1 z-10 w-10 mr-2 bg-white/70 rounded-full" alt="user profile" />
                <div className="text-white pt-1 text-sm">
                  <span id="name">{name}</span>
                  <br /> 
                  <p className="text-xs">@<span id="username">{username}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Menu */}
        <div className="mt-10">
          <ul className="mx-4 cursor-pointer">
            {Menu.map((menu, index) => (
              <Link to={menu.path}>
                <li key={index} className="mb-4 pb-1 w-full gap-x-4 items-center flex border-b-2 text-sm text-white font-semibold hover:border-b-slate-300 rounded-md">
                  <img src={menu.icon} alt="icon" className="left w-6 mr-2"/>
                  <p>{menu.title}</p>
                  <img src="/src/assets/svg/chevron-right.svg" alt="chevron right" className="w-7 absolute right-5" />
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {/* Log Out */}
        <Link to="/login">
          <div className="absolute bottom-14 flex items-center">
              <div className="mx-4 relative flex items-center gap-x-3 cursor-pointer group">
                <div className="h-6 w-6 p-1 rounded-full bg-gray-primary flex items-center justify-center group-hover:bg-red-primary">
                  <img
                    src="/src/assets/svg/shutdown.svg"
                    alt="Log Out"
                    className="h-6 w-6"
                  />
                </div>
                <p className="text-white group-hover:text-red-primary">Log Out</p>
              </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar