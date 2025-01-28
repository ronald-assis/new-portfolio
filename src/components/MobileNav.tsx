'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
import { DialogContent, DialogTitle } from '@radix-ui/react-dialog'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Logo } from '@/components/Logo'

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

export function MobileNav() {
  const pathName = usePathname()

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-2xl text-primary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <DialogTitle className="mb-40 mt-32 text-center text-2xl">
          <Logo />
        </DialogTitle>

        <nav className="flex flex-col items-center justify-center gap-8">
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
      </SheetContent>
    </Sheet>
  )
}
