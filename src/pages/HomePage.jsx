import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'

export default function HomePage() {
  return (
    <>
      <header className='absolute top-0 left-0 w-full z-50'>
        <Navbar />
      </header>
      <Hero />
    </>
  )
}
