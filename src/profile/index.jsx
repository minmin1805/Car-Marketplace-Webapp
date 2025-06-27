import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import MyListing from './components/MyListing'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Inbox from './components/Inbox'


function Profile() {
  return (
    <div>
        <Header />
        <div className='px-10 md:px-20 my-10'>
        <Tabs defaultValue="my-listing" className="w-full">
        <TabsList className='w-full flex justify-start'>
          <TabsTrigger value="my-listing">My Listing</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>

        </TabsList>

        <TabsContent value="my-listing">
        <MyListing />

        </TabsContent>
        <TabsContent value="inbox"> <Inbox /> </TabsContent>
        <TabsContent value="profile">
          <div className="bg-white rounded-lg shadow p-8 max-w-2xl mx-auto mt-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="flex flex-col items-center w-full md:w-1/3">
              <img
                src="https://i.pinimg.com/originals/3d/4d/de/3d4dde1d033c1930375b6372e2f42b8c.jpg"
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-blue-200 mb-4"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition w-full mb-2">Edit Profile</button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition w-full">Logout</button>
            </div>

            <div className="flex-1 w-full">
              <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">Minmin <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">Pro Member</span></h2>
              <p className="text-gray-500 mb-2 flex items-center gap-2"><span className="material-icons text-base">email</span> minmin@email.com</p>
              <p className="text-gray-500 mb-2 flex items-center gap-2"><span className="material-icons text-base">phone</span> +1 234 567 8901</p>
              <p className="text-gray-500 mb-2 flex items-center gap-2"><span className="material-icons text-base">location_on</span> San Francisco, CA</p>
              <p className="text-gray-400 text-sm mb-4">Member since Jan 2024</p>
              <hr className="my-3" />
              <div className="mb-4">
                <h3 className="font-semibold mb-1">About</h3>
                <p className="text-gray-700 text-sm">Car enthusiast. Love to buy, sell, and review cars. Always looking for the next adventure on four wheels!</p>
              </div>
              <div className="flex gap-8 mb-4">
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold">12</span>
                  <span className="text-xs text-gray-500">Listings</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold">5</span>
                  <span className="text-xs text-gray-500">Messages</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold">3</span>
                  <span className="text-xs text-gray-500">Favorites</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs">Change Password</button>
                <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-xs">Contact Support</button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

        </div>

    </div>
  )
}

export default Profile