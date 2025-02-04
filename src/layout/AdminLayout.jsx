import React, { useEffect } from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/admin/Navbar';
import Sidebar from '../components/admin/Sidebar';
import axiosClient from '../axios-client';

const AdminLayout = () => {
  const { user, token, setUser } = useStateContext();

  if(!token) {
    return <Navigate to={'/login'} />
  }

  useEffect(() => {
    axiosClient.get('/user')
      .then(({data}) => {
        setUser(data);
      });
  }, []);

  return (
    <>
      <Navbar user={user} />
      <Sidebar />
      <div className="p-4 sm:ml-64">
        {/* border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 */}
        <div className="p-4 mt-14">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default AdminLayout