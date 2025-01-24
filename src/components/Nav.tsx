"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/resume',
    name: 'resumo',
  },
  {
    path: '/work',
    name: 'projetos',
  },
  {
    path: '/contact',
    name: 'Contato',
  },
]

export function Nav() {
  const pathName = usePathname()

  return (
    <nav className='flex gap-8'>
      {
        links.map((link, i) => (
          <Link href={link.path} key={i} className={`${pathName === link.path && 'text-rose-500 border-rose-500 border-b-2'} capitalize font-medium hover:text-rose-500 transition-all`}>{link.name}</Link>
        ))
      }
    </nav>
  )
}