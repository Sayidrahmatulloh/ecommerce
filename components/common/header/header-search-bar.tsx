'use client'

import { Input } from '@/components/ui/input'
import { SearchIcon, XIcon } from 'lucide-react'
import { useCallback, useState } from 'react'

const HeaderSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      console.log('Search for:', searchQuery)
    },
    [searchQuery],
  )

  const handleClear = useCallback(() => {
    setSearchQuery('')
  }, [])

  return (
    <form
      role='search'
      onSubmit={handleSubmit}
      className='relative max-w-xl flex-1'>
      <SearchIcon
        className='text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2'
        aria-hidden='true'
      />

      <Input
        id='search-input'
        type='search'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='bg-muted/40 w-full border-none pr-10 pl-10'
        placeholder='Search essentials, groceries and more...'
      />

      {searchQuery && (
        <button
          type='button'
          onClick={handleClear}
          aria-label='Clear search'
          className='text-muted-foreground hover:text-foreground focus:ring-primary absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-0.5 focus:ring-2 focus:outline-none'>
          <XIcon className='size-4' />
        </button>
      )}

      <label htmlFor='search-input' className='sr-only'>
        Search products
      </label>
    </form>
  )
}

export { HeaderSearchBar }
