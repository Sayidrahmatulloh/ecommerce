import { Button } from '@/components/ui/button'
import { ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'

const HeaderActions = () => {
  return (
    <div
      className='flex items-center gap-2'
      role='navigation'
      aria-label='User actions'>
      <Button
        asChild
        variant='ghost'
        className='hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm font-medium text-gray-500 focus:ring-2 focus:ring-blue-400 focus:outline-none'>
        <Link href='/auth'>
          <UserIcon className='size-5 text-blue-500' aria-hidden='true' />
          <span className='ml-2'>Sign Up / Sign In</span>
        </Link>
      </Button>

      <Button
        asChild
        variant='ghost'
        className='hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm font-medium text-gray-500 focus:ring-2 focus:ring-blue-400 focus:outline-none'>
        <Link href='/cart'>
          <ShoppingCartIcon
            className='size-5 text-blue-500'
            aria-hidden='true'
          />
          <span className='ml-2'>Cart</span>
          <span className='sr-only'>View your shopping cart</span>
        </Link>
      </Button>
    </div>
  )
}
export { HeaderActions }
