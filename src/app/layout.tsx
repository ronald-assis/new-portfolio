import React from 'react'
import type { Metadata } from 'next'
import { JetBrains_Mono as JetBrainsMono } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/Header'
import { PageTransition } from '@/components/PageTransition'
import { StairTransition } from '@/components/StairTransition'

const jetBrainsMono = JetBrainsMono({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetBrains-mono',
})

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Each day, a new step toward the same goal',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
