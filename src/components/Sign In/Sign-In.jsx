import React from 'react'
// import Savio from '../images/'
import Navbar from '../../Assets/navbar/Navbar'

import { LockClosedIcon } from '@heroicons/react/20/solid'

const SignIn = () => {
  return (

    <>
      <Navbar/>
      <div className=" min-h-screen items-center justify-center py-10 px-4 sm:px-28 lg:px-96 bg-emerald-600 text-white">
        <div className="w-full lg:ml-16 max-w-md sm:max-w-lg lg:max-w-lg space-y-8">
          <div>
            <img
              className="mx-auto h-24 w-auto rounded-l-full rounded-t-full"
              src={''}
              alt="Company logo"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-3 text-center text-xs text-slate-100 font-medium  hover:text-indigo-600">
            SAVIO LANDSCAPING SERVICES LTD
COMPANY PROFILE
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="space-y-3 rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="text-gray-200">
                  Email address:
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base px-1.5 sm:leading-6"
                  placeholder="Enter email address"
                />
              </div>
              <div>
<label htmlFor="password" className="text-gray-200 ">Password:</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base px-1.5sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-700"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="/" className="font-mediumtext-slate-400 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-7/12 justify-center ml-16 lg:ml-24 rounded-md bg-green-700 py-2 px-3 pl-8 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-300 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>

    </>

  )
}

export default SignIn;
