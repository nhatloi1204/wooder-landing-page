import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import bgVideo from '../assets/bg-video.jpg'

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='relative w-full h-[500px] lg:h-[700px] overflow-hidden'>
        <img
          src={bgVideo}
          alt='Video Background'
          className='w-full h-full object-cover object-center'
        />
        <div className='absolute inset-0 bg-black/50'></div>

        {/* Overlay content */}
        <div className='absolute inset-0 flex flex-col items-start justify-center text-white px-8 lg:px-40 gap-4 '>
          <h2 className='text-primary text-3xl lg:text-5xl font-extrabold mb-4 max-w-3xl lg:w-[40%] uppercase tracking-widest'>
            We Do The Design of Any Complexity
          </h2>
          <p className='text-gray-200 max-w-2xl mb-6 lg:w-[40%] leading-relaxed'>
            Wooder utilizes materials otherwise left behind, rendered useless in
            their original intent. By creating new pieces made of reclaimed
            barnwood.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className='relative inline-flex items-center gap-2 px-8 py-3 font-semibold uppercase border border-white text-white hover:bg-primary  hover:text-white transition-all duration-300 active:scale-80'
          >
            Watch Video
          </button>
        </div>
      </div>

      {/* Popup Video */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed inset-0 bg-black/90 flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Video wrapper */}
            <motion.div
              className='relative w-full max-w-5xl aspect-video border-4 border-white rounded-lg overflow-hidden'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close button (nằm ở góc video) */}
              <button
                onClick={() => setIsOpen(false)}
                className='absolute top-0 right-0 px-3 py-2 bg-primary text-white hover:opacity-90 transition'
              >
                <X size={20} />
              </button>

              <iframe
                width='100%'
                height='100%'
                src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
                title='Video'
                allow='autoplay; encrypted-media'
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
