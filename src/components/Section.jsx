import { Container } from './Container'

export function Section({ children, className = '', id = '' }) {
  return (
    <section
      className={`py-[60px] md:py-[90px] lg:py-[120px] ${className}`}
      id={id}
    >
      <Container> {children} </Container>{' '}
    </section>
  )
}
