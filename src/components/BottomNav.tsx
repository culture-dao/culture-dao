import { ModeToggle } from './ui/mode-toggle'

export default function BottomNav() {
  return (
    <div className='fixed bottom-0 right-0 z-50 w-28 h-28 flex items-center justify-center'>
      <ModeToggle />
    </div>
  )
}