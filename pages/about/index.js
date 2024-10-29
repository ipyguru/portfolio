import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
import { aboutData } from '../../data/aboutData' // Импорт данных

import CountUp from 'react-countup'
import { fadeIn } from '../../variants'
import { FaChevronDown } from 'react-icons/fa'

// Главный компонент страницы "Обо мне"
const About = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  // Проверка наличия данных
  if (!aboutData || !aboutData.length) {
    return <div>Loading...</div>
  }

  const statistics = [
    { label: 'Лет опыта', count: 20 },
    { label: 'Довольных работодателей', count: 4 },
    { label: 'Завершённых проектов', count: 100 },
    { label: 'Полученных наград', count: 3 }
  ]

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left ">
      <Circles />
      <AvatarSection />
      <MainContent
        statistics={statistics}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  )
}

// Компонент для отображения аватара
const AvatarSection = () => (
  <motion.div
    className="hidden xl:flex absolute bottom-0 -left-[240px]"
    variants={fadeIn('right', 0.2)}
    initial="hidden"
    animate="show"
    exit="hidden"
  >
    <Avatar opacity={0.75} />
  </motion.div>
)

// Основной контент страницы
const MainContent = ({ statistics, activeIndex, setActiveIndex }) => (
  <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 translate-z-0">
    <TextSection />
    <InfoSection
      statistics={statistics}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    />
  </div>
)

// Раздел с текстовым содержимым
const TextSection = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollProps = useSpring({
    transform: isScrolling ? 'translateY(-10px)' : 'translateY(0px)',
    config: { tension: 100, friction: 10 },
  })

  return (
    <div className="flex-1 flex flex-col justify-center relative" onMouseEnter={() => setIsScrolling(true)} onMouseLeave={() => setIsScrolling(false)}>
      <motion.h2
        className="h2"
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        Увлекательные <span className="text-accent">истории</span> рождают великолепные решения.
      </motion.h2>
      {/* Применение анимации к тексту */}
      <animated.p
        style={scrollProps} // Применение анимации
        className="w-full mb-6 xl:mb-12 px-2 xl:px-0 text-base md:text-lg lg:text-xl overflow-auto h-48 xl:h-[260px]"
      >
        Более 20 лет назад, когда я начинал программировать на 1С, я не предполагал, насколько это изменит мою жизнь. С тех пор я накопил обширный опыт в разработке и автоматизации бизнес-процессов. Моя цель — создавать эффективные решения, которые помогают клиентам оптимизировать их работу. Я работал над проектами различной сложности и всегда стремлюсь находить уникальные подходы к каждой задаче.

        <span className='block mb-4 md:hidden'>Технологии — это моя страсть, и я готов помочь вам реализовать ваши идеи.</span>
        <span className='block mb-4 hidden md:block'>Я верю в силу технологий и их способность преобразовывать идеи в реальность. Каждый проект для меня — это возможность не только применить свои знания, но и внести вклад в развитие бизнеса клиентов. Моя страсть к программированию и стремление к совершенству помогают мне находить уникальные решения для каждого из моих клиентов.</span>
        <span className='block mb-4 hidden md:block'>На этой странице вы можете узнать больше о моем опыте, проектах и подходе к работе. Я всегда открыт для новых вызовов и готов помочь вам реализовать ваши идеи.</span>
      </animated.p>

      {/* Индикатор прокрутки */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-2 animate-bounce opacity-35">
        <FaChevronDown className="text-2xl text-white" />
      </div>
    </div>
  )
}

// Раздел с информацией и статистикой
const InfoSection = ({ statistics, activeIndex, setActiveIndex }) => (
  <div className="flex flex-col w-full xl:max-w-[48%] h-[480px] mt-4">
    <Tabs
      data={aboutData}
      activeIndex={activeIndex}
      onTabClick={setActiveIndex}
    />
    <Statistics statistics={statistics} />
    <InfoDetails data={aboutData[activeIndex]} />
  </div>
)

// Компонент для отображения вкладок
const Tabs = ({ data, activeIndex, onTabClick }) => (
  <div className="flex gap-x-4 xl:gap-x-14 mx-auto xl:mx-0 mb-4">
    {data.map((item, index) => (
      <Tab
        key={index}
        isActive={activeIndex === index}
        onClick={() => onTabClick(index)}
        title={item.title}
      />
    ))}
  </div>
)

// Компонент для отображения одной вкладки
const Tab = ({ isActive, onClick, title }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${isActive ? 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300' : ''}`}
  >
    {title}
  </div>
)

// Компонент для отображения статистики
const Statistics = ({ statistics }) => (
  <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
    <div className="flex flex-1 xl:gap-x-6">
      {statistics.map(({ label, count }, index) => (
        <Statistic
          key={index}
          count={count}
          label={label}
        />
      ))}
    </div>
  </div>
)

// Компонент для отображения одной статистики
const Statistic = ({ count, label }) => (
  <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
    <div className="text-2xl xl:text-4xl font-extrabold text-accent">
      <CountUp start={0} end={count} duration={5} delay={1} /> +
    </div>
    <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
      {label}
    </div>
  </div>
)

// Компонент для отображения информации
const InfoDetails = ({ data }) => (
  <div className="py-0 xl:py-0 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
    {data.info.map((item, index) => (
      <InfoItem
        key={index}
        title={item.title}
        stage={item.stage}
        icons={item.icons}
      />
    ))}
  </div>
)

// Компонент для отображения одной информационной записи
const InfoItem = ({ title, stage, icons }) => (
  <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 text-sm">
    <div className="font-light">{title}</div>
    <div className="flex gap-x-4">
      {icons?.map((Icon, index) => {
        // Если Icon - это компонент React, отрендерить его
        if (typeof Icon === 'function') {
          return <Icon key={index} className="text-2xl text-white" />
        }
        // Если это строка, отрендерить как картинку
        return <img key={index} src={Icon} alt="icon" className="w-6 h-6" />
      })}
    </div>
    {stage && (
      <>
        <div className="hidden md:flex">-</div>
        <div>{stage}</div>
      </>
    )}
  </div>
)

export default About