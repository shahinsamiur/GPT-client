import React, { memo } from 'react'

function Message({data}) {


  return (
    <div className='relative w-[90%]  h-auto mt-1  px-4 '>
      <div className='relative inline-block w-[auto  h-auto bg-gray-600 mt-2 rounded-md p-2 whitespace-pre-line'>{data}</div>
      </div>
  )
}
export default memo(Message)