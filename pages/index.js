import { motion } from 'framer-motion'
import ProjectsBtn from '../components/ProjectsBtn'

import { fadeIn } from '../variants'

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* Text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* Title */}
          <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className='h1'>
            Transforming ideas <br /> Into <span className='text-accent'>Digital reality</span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden' className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quia necessitatibus quasi odio? Facilis neque aspernatur fugit eveniet, ex sed accusamus at mollitia. Animi repellat nesciunt officia dolor tempore incidunt!
          </motion.p>
          {/* btn mob */}
          <div className='flex justify-center xl:hidden relative'><ProjectsBtn /></div>
          {/* btn xl */}
          <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex'>
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* Image */}
    </div>
  )
}

export default Home
