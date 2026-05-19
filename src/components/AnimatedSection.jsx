import { useInView } from '../hooks/useInView'

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, inView] = useInView()

  const transforms = {
    up:    inView ? 'translateY(0)'   : 'translateY(32px)',
    down:  inView ? 'translateY(0)'   : 'translateY(-32px)',
    left:  inView ? 'translateX(0)'   : 'translateX(32px)',
    right: inView ? 'translateX(0)'   : 'translateX(-32px)',
    none:  'none',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: transforms[direction] || transforms.up,
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
