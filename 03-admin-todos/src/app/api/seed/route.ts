import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

    await prisma.todo.deleteMany()

    await prisma.todo.createMany({
        data: [
            {description: 'water stone', complete: true},
            {description: 'fire stone'},
            {description: 'leaf stone'},
            {description: 'thunder stone'},
            {description: 'dusk stone'},
            {description: 'sun stone'}
        ]
    })


    return NextResponse.json({ message: 'seed excecuted' })
}