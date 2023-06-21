import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function Signup() {
    const { register, handleSubmit } = useForm();
    const { signUp } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)

    function handleSignup(data) {
      signUp(data)
    }

    function toggleShowPassword(e: any) {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <span className="text-indigo-300">Tune</span><span className="text-gray-200">Chatter</span>
          </a>
          <div className="w-full bg-zinc-500 bg-opacity-10 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold flex items-center justify-center leading-tight tracking-tight text-gray-100 md:text-2xl dark:text-white">
                Sign up to a new account
              </h1>
              <form onSubmit={handleSubmit(handleSignup)} className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Username</label>
                  <input 
                    {...register('username')}
                    type="text" 
                    name="username" 
                    id="username" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john_doe" required={true} />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Your email</label>
                  <input 
                    {...register('email')}
                    type="text" 
                    name="email" 
                    id="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="johndoe@tunechatter.com" required={true} />
                </div>
                <div>
                  <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">First Name</label>
                  <input 
                    {...register('first_name')}
                    type="text" 
                    name="first_name" 
                    id="first_name" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John" required={true} />
                </div>
                <div>
                  <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Last Name</label>
                  <input 
                    {...register('last_name')}
                    type="text" 
                    name="last_name" 
                    id="last_name" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe" required={true} />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Password</label>
                  <input 
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    placeholder="••••••••" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required={true} />
                    <div className="flex items-end justify-end py-2 text-gray-200 text-sm">
                        <button onClick={toggleShowPassword}>
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required={false} />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-200 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-gray-200 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button type="submit" className="w-full text-gray-200 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400 flex items-center">
                <span className="">Already have an account?</span>
                <a href="/signin" className="font-medium text-gray-400 hover:underline dark:text-primary-500 flex items-center justify-center ml-3">
                    Sign in
                </a>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
}