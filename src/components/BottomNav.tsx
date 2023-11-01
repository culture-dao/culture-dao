import { ModeToggle } from './ui/mode-toggle'

export default function BottomNav() {
  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 grid w-full h-12 grid-cols-1 px-2'>
      <div className='flex justify-end'>
        <ModeToggle />
      </div>
    </div>
  )
}