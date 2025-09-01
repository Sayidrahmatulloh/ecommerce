import { Header } from '@/components/common/header'

const RoootLayout = ({ children }: LayoutProps) => {
  return (
    <div className='font-hk-grotesk flex min-h-screen flex-col'>
      <Header />
      <main className='container'>{children}</main>
    </div>
  )
}
export default RoootLayout
