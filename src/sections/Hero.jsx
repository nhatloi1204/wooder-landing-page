import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { useRef, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero1.jpg'
import hero3 from '../assets/hero1.jpg'

export default function HeroSection() {
  const slides = [
    { src: hero1, alt: 'Wooder Hero 1' },
    { src: hero2, alt: 'Wooder Hero 2' },
    { src: hero3, alt: 'Wooder Hero 3' },
  ]

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  useEffect(() => {
    // Fix navigation refs sau khi DOM render
    const timer = setTimeout(() => {
      if (prevRef.current && nextRef.current) {
        const swiperEl = document.querySelector('.swiper').swiper
        swiperEl.params.navigation.prevEl = prevRef.current
        swiperEl.params.navigation.nextEl = nextRef.current
        swiperEl.navigation.init()
        swiperEl.navigation.update()
      }
    })
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id='home' className='relative w-full h-screen overflow-hidden'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        loop
        pagination={{
          el: '.custom-pagination',
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} w-3 h-3 rounded-full inline-block mx-1 border border-primary"></span>`,
        }}
        className='w-full h-full z-10'
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className='w-full h-full'>
            <img
              src={slide.src}
              alt={slide.alt}
              className='w-full h-screen object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay text */}
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20'>
        <h1 className='font-bold text-4xl text-primary tracking-[0.2em] lg:text-8xl'>
          WOODER
        </h1>
        <button
          className='uppercase text-xs mt-4 py-3 lg:text-sm px-6 lg:py-4 lg:tracking-widest lg:mt-10 lg:px-14 
             border 
             hover:bg-primary hover:text-white hover:border-primary hover:cursor-pointer
             active:scale-95 transition-transform duration-150 active:bg-primary active:border-primary'
        >
          Learn more →
        </button>
      </div>

      {/* Custom navigation arrows */}
      <button
        ref={prevRef}
        className='absolute bottom-6 right-20 z-20 cursor-pointer p-3 bg-dark/50 rounded-full hover:bg-primary active:bg-primary transition'
      >
        <ArrowLeft className='w-5 h-5 text-white' />
      </button>
      <button
        ref={nextRef}
        className='absolute bottom-6 right-6 z-20 cursor-pointer p-3 bg-dark/50 rounded-full hover:bg-primary transition active:bg-primary '
      >
        <ArrowRight className='w-5 h-5 text-white' />
      </button>

      {/* Custom pagination (dots) */}
      <div className='custom-pagination absolute flex gap-2 p-2 z-20'></div>
    </section>
  )
}
