import { motion } from 'framer-motion'
import Avatar from '../components/Avatar'
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import { fadeIn } from '../variants'

const ANIMATION_VARIANTS = {
  title: fadeIn('down', 0.2),
  subtitle: fadeIn('down', 0.3),
  button: fadeIn('down', 0.4),
  avatar: fadeIn('up', 0.5),
}

const Home = () => (
  <div className="bg-primary/60 h-full relative">
    <BackgroundOverlay>
      <ContentContainer>
        <Title text="Преобразование идей в цифровую реальность" />
        <Subtitle text="Давайте вместе превратим ваши идеи в впечатляющие цифровые проекты с помощью решений 1С. Я специализируюсь на разработке уникальных приложений и автоматизации бизнес-процессов, что поможет оптимизировать вашу работу и достичь новых высот. В каждом проекте я вкладываю свою страсть и внимание к деталям, чтобы обеспечить вам конкурентное преимущество на рынке!" />
        <ButtonGroup />
      </ContentContainer>
    </BackgroundOverlay>

    <MainImageSection />
  </div>
)

const BackgroundOverlay = ({ children }) => (
  <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
    {children}
  </div>
)

const ContentContainer = ({ children }) => (
  <div className="container mx-auto h-full flex flex-col justify-center text-center xl:text-left xl:pt-40 pt-20">
    {children}
  </div>
)

const Title = ({ text }) => (
  <motion.h1
    variants={ANIMATION_VARIANTS.title}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="h1"
  >
    {text.split(' ').slice(0, 2).join(' ')} <br />
    <span className="text-accent">{text.split(' ').slice(2).join(' ')}</span>
  </motion.h1>
)

const Subtitle = ({ text }) => (
  <motion.p
    variants={ANIMATION_VARIANTS.subtitle}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="mb-10 xl:mb-16 max-w-sm xl:max-w-xl text-sm sm:text-base"
  >
    {text}
  </motion.p>
)

const ButtonGroup = () => (
  <>
    <div className="flex justify-center xl:hidden">
      <ProjectsBtn />
    </div>
    <motion.div
      variants={ANIMATION_VARIANTS.button}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden xl:flex"
    >
      <ProjectsBtn />
    </motion.div>
  </>
)

const MainImageSection = () => (
  <div className="w-[1200px] h-full absolute right-0 bottom-0">
    <div className="absolute w-full h-full bg-none xl:bg-explosion xl:bg-cover xl:bg-no-repeat xl:bg-right mix-blend-color-dodge translate-z-0"></div>
    <ParticlesContainer />
    <motion.div
      className="absolute w-full h-full max-w-[737px] max-h-[678px] -bottom-32 lg:bottom-0 lg:right-[8%]"
      variants={ANIMATION_VARIANTS.avatar}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Avatar />
    </motion.div>
  </div>
)

export default Home