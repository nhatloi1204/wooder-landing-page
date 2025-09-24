import { Disclosure } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Container from './Container'
import { useState, useEffect } from 'react'
import logo from '../assets/logo.svg'

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'Products', id: 'products' },
  { name: 'About', id: 'about' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'News', id: 'news' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }, // section phải chiếm >=60% viewport mới được tính là "active"
    )

    navLinks.forEach(link => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <Disclosure as='header' className='sticky top-0 z-50 bg-dark text-white'>
      {({ open }) => (
        <>
          {/* Desktop + Mobile bar */}
          <Container className='flex justify-between h-16'>
            {/* Logo */}
            <a href='#home' className='flex items-center'>
              <img src={logo} alt='Wooder Logo' className='h-8 w-auto' />
            </a>

            {/* Toggle button (mobile) */}
            <Disclosure.Button className='md:hidden p-2 text-white z-50'>
              {open ? <X size={28} /> : <Menu size={28} />}
            </Disclosure.Button>

            {/* Desktop menu */}
            <nav className='hidden md:flex gap-10 md:font-bold md:items-end md:pb-2'>
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative pb-1 transition-colors ${
                    activeSection === link.id
                      ? 'text-primary'
                      : 'hover:text-primary'
                  }`}
                >
                  {link.name.toUpperCase()}

                  {/* underline vàng */}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId='underline'
                      className='absolute left-0 bottom-0 w-full h-[2px] bg-primary'
                    />
                  )}
                </a>
              ))}
            </nav>
          </Container>

          {/* Mobile overlay menu */}
          <AnimatePresence>
            {open && (
              <Disclosure.Panel static>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className='fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 text-2xl font-bold z-40'
                >
                  {navLinks.map(link => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`relative pb-1 transition-colors ${
                        activeSection === link.id
                          ? 'text-primary'
                          : 'hover:text-primary'
                      }`}
                    >
                      {link.name.toUpperCase()}

                      {activeSection === link.id && (
                        <motion.span
                          layoutId='underline-mobile'
                          className='absolute left-0 bottom-0 w-full h-[2px] bg-primary'
                        />
                      )}
                    </a>
                  ))}
                </motion.div>
              </Disclosure.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  )
}
