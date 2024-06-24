import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xls mx-auto bg-[#032541]'>
      <div className='flex items-center gap-1'>
        <Link href={'/'} className='flex gap-1 items-center'>
          <span className='text-2xl text-gray-100 font-bold bg-[#01b4e4] py-1 px-2 rounded-lg'>
            The Movie Database
          </span>
        </Link>
      </div>
    </div>
  )
}
