'use client'
import Link from 'next/link'
import React, { JSX } from 'react'
import { usePathname } from 'next/navigation';
import { CiBookmarkCheck } from 'react-icons/ci'


interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
}

export const SidebarMenuItem = ({path, icon, title}: Props) => {

    const currentPath = usePathname();
    const isActive = currentPath === path;
    const linkClassName = `
    relative px-4 py-3 flex items-center space-x-4 rounded-xl
    transition ease-linear duration-150
    ${
      isActive
        ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400 hover:bg-gradient-to-r hover:from-sky-500 hover:to-cyan-300' // Hover effect for active
        : 'text-black hover:bg-cyan-400'
    }
  `;
    
    return (
        <Link href={path} className={linkClassName}>
            <>{icon}</>
            <span className="-mr-1 font-medium">{title}</span>
        </Link>
    )
}
