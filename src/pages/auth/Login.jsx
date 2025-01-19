import React, { useEffect } from 'react'
import loginImg from '../../assets/img/blood-donate.jpg'

const Login = () => {
  return (
    <div className="h-screen content-center px-1">
      <div className="card rounded w-full max-w-4xl bg-base-100 shadow-2xl mx-auto">
        <div className="card-body grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-0">
          <div className="hidden md:flex justify-center items-center p-0">
            <img 
              src={loginImg} 
              alt="Card image"
              className="object-cover w-full h-full rounded-tl rounded-bl"
            />
          </div>

          <div className='sm:w-full p-10 content-center'>
            <h1 className="text-xl font-bold text-center">City of San Pedro</h1>
            <h1 className="text-3xl font-bold text-center">Red Cross Youth</h1>
            <form className='sm:w-full'>
              <div className="form-control mb-6 mt-6">
                <input 
                  type="email" 
                  placeholder="Username" 
                  className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-neutral-600" 
                  name='username'
                  autoComplete='false'
                />
              </div>
              <div className="form-control mb-6">
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-neutral-600" 
                  name='password'
                  autoComplete='false'
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gray-900 w-full text-white hover:bg-gray-700 rounded-md hover:border-none">LOGIN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login