import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import React from 'react'
import { Button } from './ui/button'; 
import { Link } from 'react-router-dom';
import webLogo from "../../public/weblogo.png"

function Header() {
  const {user, isSignedIn} = useUser();

  return (
    <div className="flex justify-between items-center shadow-sm p-3">

        <Link to={'/'} className='flex items-center'>
        <img src={webLogo} width={60} height={60} /> 
        <span className='text-md font-bold text-blue-500'>CarCentral</span>
        </Link>

        <ul className='flex items-center gap-20'>
          <Link className='text-black' to={'/'}>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
          </Link>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
          <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Preorder</li>

        </ul>

        {isSignedIn?
          <div className='flex items-center gap-5'>
          <UserButton />
          <Link to='/profile'>
          <Button>Submit Listing</Button>
          </Link>
        </div>
        :
        <div>
        <SignInButton mode='modal' forceRedirectUrl='/' >
          <Button>Sign In</Button>
        </SignInButton>
        </div>
        }
    </div>
  )
}

export default Header