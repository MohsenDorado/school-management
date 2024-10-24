import Image from 'next/image'
import React from 'react'

const TableSearch = () => {
  return (
    <div className=" flex w-full md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
    <Image src="/search.png" alt="" width={14} height={14} className='select-none' />
    <input
      type="text"
      placeholder="Search..."
      className="w-[200px] p-2 bg-transparent outline-none placeholder:select-none"
    />
  </div>  )
}

export default TableSearch