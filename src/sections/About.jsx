import Section from '../components/Section'
import aboutImg from '../assets/about.jpg'

export default function ProductItem() {
  return (
    <Section>
      <div className='flex flex-col lg:flex-row items-center gap-12 mb-20'>
        {/* Text block */}
        <div className='lg:w-5/12'>
          {/* HEADING */}
          <div className='flex items-center gap-4 mb-6'>
            <span className='lg:w-8 lg:h-[3px] lg:bg-primary lg:block hidden'></span>
            <h2 className='text-4xl lg:text-5xl font-extrabold uppercase'>
              About
            </h2>
          </div>

          {/* BODY TEXT */}
          <p className='text-gray-600 leading-relaxed mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            incidunt deleniti a ab provident optio assumenda, necessitatibus
            rerum obcaecati ex laboriosam? Commodi debitis accusamus obcaecati,
            dignissimos in soluta voluptate fugit.
          </p>

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
            src={aboutImg}
            alt='aboutImg'
            className='w-full rounded-lg transition-transform duration-300 hover:scale-105'
          />
        </div>
      </div>
    </Section>
  )
}
