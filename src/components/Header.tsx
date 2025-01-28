import Link from 'next/link'

import { Nav } from '@/components/Nav'
import { Button } from '@/components/ui/button'
import { MobileNav } from '@/components/MobileNav'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header>
      <div className="py-8 xl:py-12">
        <div className="container mx-auto flex items-center justify-between">
          <Logo />
          <div className="hidden items-center gap-8 xl:flex">
            <Nav />
            <Link href="/">
              <Button>Contratar-me</Button>
            </Link>
          </div>

          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
