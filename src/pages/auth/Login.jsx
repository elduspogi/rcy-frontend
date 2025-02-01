import React, { useEffect, useRef, useState } from 'react'
import loginImg from '../../assets/img/blood-donate.jpg'
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/ContextProvider';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const { user, token } = useStateContext();
  if(token) {
    return <Navigate to='/admin' />
  } 
  
  const { register, handleSubmit } = useForm();
  const [ errors, setErrors ] = useState({});

  const { setUser, setToken } = useStateContext();

  const onSubmit = (payload) => {
    axiosClient.post('/login', payload)
      .then(({data}) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if(response && response.status === 422) {
          if(response.data.errors) {
            setErrors(response.data.errors)            
          } else {
            setErrors({
              username: [response.data.message],
              password: [response.data.password]
            })
          }
        }
      });
  }

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
            <h1 className="text-lg font-semibold text-center">City of San Pedro</h1>
            <h1 className="text-3xl font-bold text-center title">Red Cross Youth</h1>
            <form className='sm:w-full' onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control mb-6 mt-6">
                {errors.username && <p className='text-sm pb-1 text-red-500'>{errors.username}</p>}
                <input 
                  type="text" 
                  placeholder="Username" 
                  className={`input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-[#fe006e7a] text-sm ${errors.username ? 'border-red-500 focus:border-red-500' : ''}`} 
                  autoComplete='off'
                  {...register("username")}
                />
              </div>
              <div className="form-control mb-6">
                {errors.password && <p className='text-sm pb-1 text-red-500'>{errors.password}</p>}
                <input 
                  type="password" 
                  placeholder="Password" 
                  className={`input input-bordered w-full rounded-md focus:outline-none border-solid focus:border-[#fe006e7a] text-sm ${errors.password ? 'border-red-500 focus:border-red-500' : ''}`} 
                  {...register('password')}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#fe006e] w-full text-white rounded-md login-button">LOGIN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login