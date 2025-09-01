import { navItems } from '@/const'
import Link from 'next/link'

const HeaderNav = () => {
  return (
    <nav className='py-1' role='navigation' aria-label='Main navigation'>
      <ul className='space-y-1'>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { HeaderNav }
