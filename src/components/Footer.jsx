import logo from '../assets/logo.svg'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-black text-white py-6 px-4 relative'>
      <div className='max-w-6xl mx-auto flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:items-center relative'>
        <div className='order-1 lg:absolute lg:left-1/2 lg:-translate-x-1/2'>
          <img src={logo} alt='Wooder Logo' className='h-8 w-auto' />
        </div>

        <p className='text-gray-400 text-sm order-2 lg:order-1'>
          © 2023 WOODER, CFD Circle
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='w-9 h-9 flex items-center justify-center rounded bg-gray-700 hover:bg-primary border-white border text-white transition duration-300 absolute right-10 top-1/2 -translate-y-1/2 lg:static lg:order-2 lg:translate-y-0'
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  )
}
