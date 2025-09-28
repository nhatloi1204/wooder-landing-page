import { useState } from 'react'
import Section from '../components/Section'
import { ZoomIn, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import img1 from '../assets/galleryImg/gallery1.jpg'
import img2 from '../assets/galleryImg/gallery2.jpg'
import img3 from '../assets/galleryImg/gallery3.jpg'
import img4 from '../assets/galleryImg/gallery4.jpg'
import img5 from '../assets/galleryImg/gallery5.jpg'

function GalleryItem({ src, alt, onClick, className = '' }) {
  return (
    <div
      className={`relative group overflow-hidden rounded-lg cursor-pointer ${className}`}
      onClick={() => onClick(src, alt)}
    >
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
        loading='lazy'
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
        <ZoomIn size={40} className='text-white' />
      </div>
    </div>
  )
}

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null)

  const images = [
    { src: img1, alt: 'Gallery 1' },
    { src: img2, alt: 'Gallery 2' },
    { src: img3, alt: 'Gallery 3', big: true },
    { src: img4, alt: 'Gallery 4' },
    { src: img5, alt: 'Gallery 5' },
  ]

  return (
    <Section id='gallery' className='bg-black'>
      <div className='flex flex-col gap-8'>
        {/* Heading */}
        <h1 className='text-white uppercase text-4xl font-extrabold tracking-wide'>
          Gallery
        </h1>
        <div className='text-gray-300 lg:w-1/3 lg:text-justify'>
          We are a team of professionals in the wood processing and the creation
          of wooden furniture of the highest class
        </div>
        <div
          className='
           grid gap-4
          grid-cols-2 auto-rows-[200px]
          lg:grid-cols-3 lg:auto-rows-[250px]
        '
        >
          {images.map(({ src, alt, big }, i) => (
            <GalleryItem
              key={i}
              src={src}
              alt={alt}
              onClick={setSelectedImg}
              className={big ? 'row-span-2' : ''}
            />
          ))}
        </div>
      </div>

      {/* Modal Image */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className='fixed inset-0 bg-black/90 flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImg(null)}
              className='absolute top-6 right-6 p-2 bg-primary text-white rounded hover:scale-110 transition'
            >
              <X size={28} />
            </button>

            {/* Large Image */}
            <motion.img
              key={selectedImg}
              src={selectedImg}
              alt='Selected'
              className='w-auto h-auto max-w-[90vw] max-h-[70vh] object-contain border-4 border-white'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}

export default Gallery
