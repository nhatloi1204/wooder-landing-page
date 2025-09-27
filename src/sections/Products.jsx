// ProductsSection.jsx
import Section from '../components/Section'
import furnitureImg from '../assets/furniture.jpg'
import decorImg from '../assets/decor.jpg'
import quality1 from '../assets/quality1.jpg'
import quality2 from '../assets/quality2.jpg'
import quality3 from '../assets/quality3.jpg'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import VideoSection from './VideoSection'

function ProductItem({ title, text, image, reverse = false }) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-12 mb-20 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Text block */}
      <div className={`lg:w-5/12 ${reverse ? 'text-right' : 'text-left'}`}>
        {/* HEADING */}
        <div
          className={`flex items-center gap-4 mb-6 ${
            reverse ? 'justify-end' : ''
          }`}
        >
          {!reverse && (
            <span className='lg:w-8 lg:h-[3px] lg:bg-primary lg:block hidden'></span>
          )}
          <h2 className='text-4xl lg:text-5xl font-extrabold'>{title}</h2>
          {reverse && (
            <span className='lg:w-8 lg:h-[3px] lg:bg-primary lg:block hidden'></span>
          )}
        </div>

        {/* BODY TEXT */}
        <p className='text-gray-600 leading-relaxed mb-8'>{text}</p>

        {/* Learn More btn */}
        <a
          href='#'
          className='group relative inline-flex items-center gap-2 font-semibold uppercase text-dark'
        >
          Learn More
          <span className='transition-transform duration-300 group-hover:translate-x-1'>
            →
          </span>
          <span className='absolute left-0 -bottom-1 h-[2px] w-6 bg-primary transition-all duration-300 group-hover:w-full'></span>
        </a>
      </div>

      {/* Image block */}
      <div className='lg:w-7/12'>
        <img
          src={image}
          alt={title}
          className='w-full rounded-lg transition-transform duration-300 hover:scale-105'
        />
      </div>
    </div>
  )
}

function QualityItem({ image, title }) {
  const [open, setOpen] = useState(false)

  return (
    <div className='flex flex-col items-center text-center'>
      {/* IMAGE */}
      <div
        className='w-40 h-40 overflow-hidden rounded-full mb-3 cursor-pointer group relative'
        onClick={() => setOpen(true)}
      >
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
        />
      </div>
      {/* GOLD BAR */}
      <span className='block w-8 h-[2px] bg-primary mb-4'></span>

      {/* TITLE */}
      <p className='font-normal'>{title}</p>

      {/* MODAL IMAGE */}
      <AnimatePresence>
        {open && (
          <motion.div
            className='fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.img
              src={image}
              alt={title}
              className='max-h-[80vh] max-w-[80vw] rounded-lg shadow-lg'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ProductsSection() {
  return (
    <>
      <Section id='products'>
        {/* Furniture */}
        <ProductItem
          title='FURNITURE'
          text='Wooder utilizes materials otherwise left behind, rendered useless in their original intent. By creating new pieces made one reclaimed barnwood.'
          image={furnitureImg}
        />

        {/* Decor */}
        <ProductItem
          title='DECOR'
          text='We make all types of wooden decor as per design given by Architect, Interior designer, contractor which is suitable your premises.'
          image={decorImg}
          reverse
        />

        {/* Quality */}
        <div className='text-center mt-24'>
          <h2 className='text-4xl lg:text-5xl font-extrabold mb-6'>
            WOODER – IS QUALITY
          </h2>
          <span className='block w-20 h-[3px] bg-primary mx-auto mb-6'></span>

          <p className='text-gray max-w-2xl mx-auto mb-12'>
            Wooder utilizes materials otherwise left behind, rendered useless in
            their original intent, drawing on pieces made reclaimed barnwood
            rendered useless in their original intent.
          </p>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <QualityItem image={quality1} title='Innovative Design' />
            <QualityItem image={quality2} title='High-level Skills' />
            <QualityItem image={quality3} title='Quality Products' />
          </div>
        </div>
      </Section>
      <VideoSection />
    </>
  )
}
