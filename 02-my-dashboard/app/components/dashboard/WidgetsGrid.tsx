'use client'

import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { IoCartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/app/store'

export const WidgetsGrid = () => {

    const isCart = useAppSelector( state => state.counter.count)

  return (
      <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget 
        title={`${isCart}`}
        subtitle={"Productos agregados"}
        label={"Carrito"}
        icon={<IoCartOutline size={70} className='text-blue-700'/>}
        href={"/dashboard/counter"}
        />
        
      </div>
  )
}

