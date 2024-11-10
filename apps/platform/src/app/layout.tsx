import { Toaster } from '@/components/ui/sonner'
import './global.css'
import JotaiProvider from '@/components/jotaiProvider'

export const metadata = {
  title: 'Keyshade',
  description: 'Generated by create-nx-workspace'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <JotaiProvider>{children}</JotaiProvider>
      </body>
      <Toaster richColors />
    </html>
  )
}
