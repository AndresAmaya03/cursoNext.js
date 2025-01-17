'use client';

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import * as todosApi from '@/todos/helpers/todos'
import { useRouter } from "next/navigation";
import { Todo } from "@prisma/client";
import { todo } from "node:test";
import { deleteTodo } from '../helpers/todos';

export const NewTodo = () => {
  const router = useRouter()

  const [description, setDescription] = useState('');

  const onSubmit = async(e: FormEvent) => {
    e.preventDefault();
    if(description.trim().length === 0) return

  }

  const createNewTodo = async(description:string) => {
    const createTodo = await todosApi.createTodo(description)
    setDescription('')
    router.refresh()
  }

  const deleteCompleted = async() => {
    todosApi.deleteTodo()
    router.refresh()
  }


  return (
    <form onSubmit={onSubmit} className='flex w-full'>
      <input type="text"
      onChange={(e) => setDescription(e.target.value)}
      value={description}
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="What needs to be done?" />

      <button 
      onClick={() => createNewTodo(description)}
      type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
        Create
      </button>
      
      <span className='flex flex-1'></span>

      <button 
        onClick={ () => deleteCompleted() }
        type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline />
        <span className="ml-2 mr-1">Delete completed tasks</span>
      </button>


    </form>
  )
}