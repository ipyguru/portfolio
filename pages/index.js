import { motion } from 'framer-motion'
import ProjectsBtn from '../components/ProjectsBtn'
import { fadeIn } from '../variants'

const ANIMATION_VARIANTS = {
  title: fadeIn('down', 0.2),
  subtitle: fadeIn('down', 0.3),
  button: fadeIn('down', 0.4),
}

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <BackgroundOverlay>
        <ContentContainer>
          <Title />
          <Subtitle />
          <MobileButton />
          <DesktopButton />
        </ContentContainer>
      </BackgroundOverlay>
    </div>
  )
}

const BackgroundOverlay = ({ children }) => (
  <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
    {children}
  </div>
)

const ContentContainer = ({ children }) => (
  <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
    {children}
  </div>
)

const Title = () => (
  <motion.h1
    variants={ANIMATION_VARIANTS.title}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="h1"
  >
    Transforming ideas <br /> Into{' '}
    <span className="text-accent">Digital reality</span>
  </motion.h1>
)

const Subtitle = () => (
  <motion.p
    variants={ANIMATION_VARIANTS.subtitle}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quia
    necessitatibus quasi odio? Facilis neque aspernatur fugit eveniet, ex sed
    accusamus at mollitia. Animi repellat nesciunt officia dolor tempore
    incidunt!
  </motion.p>
)

const MobileButton = () => (
  <div className="flex justify-center xl:hidden relative">
    <ProjectsBtn />
  </div>
)

const DesktopButton = () => (
  <motion.div
    variants={ANIMATION_VARIANTS.button}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="hidden xl:flex"
  >
    <ProjectsBtn />
  </motion.div>
)

export default Home