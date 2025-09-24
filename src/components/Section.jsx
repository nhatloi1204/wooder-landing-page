import { Container } from './Container'

export function Section({ children, className = '' }) {
  return (
    <section className={`py-[60px] md:py-[90px] lg:py-[120px] ${className}`}>
      <Container> {children} </Container>{' '}
    </section>
  )
}
