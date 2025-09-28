import { useState } from 'react'
import Section from '../components/Section'
import { motion } from 'framer-motion'

// import news images
import news1 from '../assets/newsImg/news1.jpg'
import news2 from '../assets/newsImg/news2.jpg'
import news3 from '../assets/newsImg/news3.jpg'

// import carousel images
import carousel1 from '../assets/carouselImg/carousel1.jpg'
import carousel2 from '../assets/carouselImg/carousel2.jpg'
import carousel3 from '../assets/carouselImg/carousel3.jpg'
import carousel4 from '../assets/carouselImg/carousel4.jpg'

// fake data
const newsData = [
  {
    id: 1,
    title: 'Where does it come from?',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis natus illo consequuntur, quia eos soluta iure sunt cum a saepe sed harum, sint eius error sapiente ipsam nulla atque cumque?',
    image: news1,
    category: 'Technology',
  },
  {
    id: 2,
    title: 'There are many variations of passages',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam error perspiciatis quisquam neque optio culpa, saepe dolor at debitis beatae omnis tempora, praesentium cumque aut officia sapiente, reiciendis ea.',
    image: news2,
    category: 'Fashion',
  },
  {
    id: 3,
    title:
      'It is a long established fact that a reader It has roots in a piece of...',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, veritatis repudiandae, consequatur velit eos, quod ducimus facilis dignissimos a voluptates iste ut. Blanditiis obcaecati dolorum ratione quas doloribus repellat ex.',
    image: news3,
    category: 'Technology',
  },
]

const carouselImages = [carousel1, carousel2, carousel3, carousel4]

export default function News() {
  const [filter, setFilter] = useState('All')

  const filtered =
    filter === 'All' ? newsData : newsData.filter(n => n.category === filter)

  return (
    <>
      <Section id='news'>
        <div className='flex flex-col gap-8'>
          {/* Heading */}
          <h2 className='uppercase text-4xl font-extrabold tracking-wide'>
            News
          </h2>
          <p className='text-gray-600 lg:w-1/3'>
            We are a team of professionals in the wood processing and the
            creation of wooden furniture of the highest class
          </p>

          {/* Filter buttons */}
          <div className='flex gap-4'>
            {['All', 'Technology', 'Fashion'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1 uppercase font-semibold text-sm border-b-2 ${
                  filter === cat
                    ? 'border-primary text-primary'
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News Cards */}
          <div className='grid md:grid-cols-3 gap-6'>
            {filtered.map(item => (
              <div
                key={item.id}
                className='bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition flex flex-col'
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-48 object-cover'
                  loading='lazy'
                />

                {/* Content */}
                <div className='flex flex-col flex-grow p-4'>
                  <h3 className='text-lg line-clamp-2 lg:min-h-[3.5rem] uppercase font-extrabold'>
                    {item.title}
                  </h3>
                  <p className='text-gray-500 text-sm mt-2 flex-grow line-clamp-3'>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <div className='overflow-hidden relative mb-20'>
        <motion.div
          className='flex gap-6'
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {[...carouselImages, ...carouselImages].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`carousel-${i}`}
              className='w-auto h-[300px] lg:h-[400px] object-cover rounded-lg flex-shrink-0'
              loading='lazy'
            />
          ))}
        </motion.div>
      </div>
    </>
  )
}
