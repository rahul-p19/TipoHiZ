import React from 'react';
import Link from 'next/link';
import { login } from '@/actions/user';
import { auth } from '@/auth';

async function Login() {
   const session = await auth();
   console.log(session);
   return (
      <main className="w-screen h-screen bg-black text-white flex flex-col justify-center items-center">
         <div className="flex flex-col items-center gap-y-4 w-5/6 sm:w-2/3">
            <h1 className="font-medium text-2xl sm:text-3xl">Login</h1>
            <form className="flex flex-col sm:w-2/5 gap-y-2" action={login}>
               <label htmlFor="email" className="text-sm">
                  Email Address
               </label>
               <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="px-2 py-1 rounded-sm outline-none"
               />
               <label htmlFor="password" className="text-sm">
                  Password
               </label>
               <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  className="px-2 py-1 rounded-sm outline-none"
               />
               <button className="px-2 py-1 rounded-sm bg-white text-black w-fit my-3 font-semibold self-center">
                  Login
               </button>
            </form>
            <div className="sm:w-2/5 flex flex-col sm:flex-row sm:justify-between">
               <p>Don&apos;t have an account?</p>
               <Link href="/register" className="hover:text-gray-400">
                  Register
               </Link>
            </div>
         </div>
      </main>
   );
}

export default Login;
