import TestimonialSlider from '../../components/TestimonialSlider'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Testimonials = () => {
  return (
    <section className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* Заголовок */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What clients <span className="text-accent">say</span> about us
          <span className="text-accent">.</span>
        </motion.h2>

        {/* Слайдер с отзывами */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials