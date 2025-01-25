'use client'

import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'

import { Stairs } from './Stairs'

export function StairTransition() {
  const pathName = usePathname()

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathName}>
          <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 flex h-screen w-screen">
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
    </>
  )
}
