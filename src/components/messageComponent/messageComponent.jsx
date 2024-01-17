import React, { memo } from 'react'

function Message({ data }) {


  return (
    <div className='relative w-[90%] flex items-end h-auto mt-1 pb-2 px-4'>
      <span className='relative w-10 h-10 bg-gray-700 mr-1 inline-block rounded-full'></span>
      <div className='relative w-[80%] h-auto inline-block'>
        <div className='relative inline-block w-[auto]  h-auto bg-gray-600 mt-2 rounded-md p-2 whitespace-pre-line'>
          {data}</div>
      </div>

    </div>
  )
}
export default memo(Message)