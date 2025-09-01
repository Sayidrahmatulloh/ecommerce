import Link from 'next/link'
import { HeaderActions } from './header-actions'
import { HeaderMenu } from './header-menu'
import { HeaderSearchBar } from './header-search-bar'

const Header = () => {
  return (
    <header className='border-b bg-white'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between gap-4 py-4'>
          {/* Menu & Logo */}
          <div className='flex items-center gap-4'>
            <HeaderMenu />
            <Link href='/' aria-label='Go to homepage'>
              <h1 className='text-xl font-bold tracking-wide text-blue-500 sm:text-2xl'>
                MegaMart
              </h1>
            </Link>
          </div>
          {/* Search bar & Actions */}
          <div className='flex items-center gap-4'>
            <HeaderSearchBar />
            <HeaderActions />
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header }
