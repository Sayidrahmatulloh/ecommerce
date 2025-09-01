'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { HeaderNav } from './header-nav'

const HeaderMenu = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <div className='relative' ref={menuRef}>
      {/* Toggle button */}
      <button
        type='button'
        aria-expanded={open}
        aria-controls='header-nav'
        aria-label='Toggle menu'
        onClick={() => setOpen((prev) => !prev)}
        className='flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-2 focus:ring-blue-400 focus:outline-none'>
        {open ? (
          <XIcon className='h-6 w-6' />
        ) : (
          <MenuIcon className='h-6 w-6' />
        )}
      </button>

      {/* Navigation */}
      {open && (
        <div
          id='header-nav'
          className='absolute top-full left-0 mt-2 w-48 rounded-md border bg-white shadow-lg'
          role='menu'>
          <HeaderNav />
        </div>
      )}
    </div>
  )
}

export { HeaderMenu }
