import { motion } from 'framer-motion'

// Desc: Transition variant for page transitions
const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: 0,
    width: '100%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
}

// Конфигурация для каждого слоя анимации
const layersConfig = [
  { color: 'bg-[#2e2257]', delay: 0.2, zIndex: 'z-30' },
  { color: 'bg-[#3b2d71]', delay: 0.4, zIndex: 'z-20' },
  { color: 'bg-[#4b3792]', delay: 0.6, zIndex: 'z-10' },
]

// Компонент для анимации слоя
const AnimatedLayer = ({ color, delay, zIndex }) => (
  <motion.div
    className={`fixed top-0 bottom-0 right-full w-screen h-screen ${color} ${zIndex}`}
    variants={transitionVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ delay, duration: 0.6, ease: 'easeInOut' }}
  />
)

// Компонент для анимации перехода
const Transition = () => (
  <>
    {layersConfig.map((layer, index) => (
      <AnimatedLayer key={index} {...layer} />
    ))}
  </>
)

export default Transition
