import React from 'react'

export default function TrainCard(props) {


    const handleClick=(id)=>{
        
    }

  return (
    <div onClick={()=>handleClick(props.key)} className='cursor-pointer w-96 h-72 bg-red-800 rounded-md mt-24 border-2 border-slate-700'>
    <div className='bg-orange-600 py-4'>
    <p className='text-white font-bold ms-2 capitalize'>{props.title}</p>
    </div>
    <img src={props.url} className='grayscale overflow-hidden'></img>
    </div>
  )
}
