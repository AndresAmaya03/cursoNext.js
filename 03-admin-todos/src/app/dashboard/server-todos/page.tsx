export const dynamic = 'auto'
export const revalidate = 0

import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Server actions TODOS',
  description: 'TODO page built with server actions'
}

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  return (
    <div>
      <span className="text-3xl mb-10">Server actions</span>
      <div className='w-full px-5 mx-5 mb-5'>
        <NewTodo/>
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}