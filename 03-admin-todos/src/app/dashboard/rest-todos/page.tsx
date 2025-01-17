export const dynamic = 'auto'
export const revalidate = 0

import prisma from '@/lib/prisma';
import { NewTodo, TodosGrid } from '@/todos';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TODO listing',
  description: 'TODO listing'
}

export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  return (
    <div>
      <div className='w-full px-5 mx-5 mb-5'>
        <NewTodo/>
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}