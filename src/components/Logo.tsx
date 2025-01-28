import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/">
      <h1 className="text-4xl font-semibold">
        RA<span className="text-rose-500">.</span>
      </h1>
    </Link>
  )
}
