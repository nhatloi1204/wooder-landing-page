import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import ProductsSection from '../sections/Products'
import About from '../sections/About'
import Gallery from '../sections/Gallery'
import News from '../sections/News'

export default function HomePage() {
  return (
    <>
      <header className='absolute top-0 left-0 w-full z-50'>
        <Navbar />
      </header>
      <Hero />
      <ProductsSection />
      <About />
      <Gallery />
      <News />
    </>
  )
}
