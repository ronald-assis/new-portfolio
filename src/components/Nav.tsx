'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
    <nav className="flex gap-8">
      {links.map((link, i) => (
        <Link
          href={link.path}
          key={i}
          className={`${pathName === link.path && 'border-b-2 border-rose-500 text-rose-500'} font-medium capitalize transition-all hover:text-rose-500`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
