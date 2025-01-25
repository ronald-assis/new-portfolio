import Link from 'next/link'

import { Nav } from '@/components/Nav'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header>
      <div className="py-8 xl:py-12">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              RA<span className="text-rose-500">.</span>
            </h1>
          </Link>

          <div className="hidden items-center gap-8 xl:flex">
            <Nav />
            <Link href="/">
              <Button>Contratar-me</Button>
            </Link>
          </div>

          <div className="xl:hidden">Mobile nav</div>
        </div>
      </div>
    </header>
  )
}
