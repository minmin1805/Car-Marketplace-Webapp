import Header from '@/components/Header'
import Search from '@/components/Search'
import React from 'react'

function SearchByCategory() {
  return (
    <div>
        <div>
            <Header />

            <div className='p-16 bg-black flex justify-center'>
                <Search />
            </div>
        </div>
    </div>
  )
}

export default SearchByCategory