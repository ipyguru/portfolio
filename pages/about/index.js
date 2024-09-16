import { motion } from 'framer-motion'
import React, { useState } from 'react'

import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
import { aboutData } from '../../data/aboutData' // Импорт данных

import CountUp from 'react-countup'
import { fadeIn } from '../../variants'

// Главный компонент страницы "Обо мне"
const About = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  // Проверка наличия данных
  if (!aboutData || !aboutData.length) {
    return <div>Loading...</div>
  }

  const statistics = [
    { label: 'Years of experience', count: 10 },
    { label: 'Satisfied clients', count: 250 },
    { label: 'Finished projects', count: 650 },
    { label: 'Winning awards', count: 6 }
  ]

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
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
    className="hidden xl:flex absolute bottom-0 -left-[170px]"
    variants={fadeIn('right', 0.2)}
    initial="hidden"
    animate="show"
    exit="hidden"
  >
    <Avatar />
  </motion.div>
)

// Основной контент страницы
const MainContent = ({ statistics, activeIndex, setActiveIndex }) => (
  <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
    <TextSection />
    <InfoSection
      statistics={statistics}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    />
  </div>
)

// Раздел с текстовым содержимым
const TextSection = () => (
  <div className="flex-1 flex flex-col justify-center">
    <motion.h2
      className="h2"
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      Captivating <span className="text-accent">stories</span> birth magnificent designs.
    </motion.h2>
    <motion.p
      className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
      variants={fadeIn('right', 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      10 years ago, I began freelancing as a developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum corporis, voluptatem inventore eum quibusdam magnam dolorum possimus id consequatur minus laudantium earum, architecto excepturi provident ea quod libero quia!
    </motion.p>
  </div>
)

// Раздел с информацией и статистикой
const InfoSection = ({ statistics, activeIndex, setActiveIndex }) => (
  <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
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
  <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
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
  <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
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
  <div className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
    <div className="font-light">{title}</div>
    {stage && (
      <>
        <div className="hidden md:flex">-</div>
        <div>{stage}</div>
      </>
    )}
    <div className="flex gap-x-4">
      {icons?.map((Icon, index) => (
        <Icon key={index} className="text-2xl text-white" />
      ))}
    </div>
  </div>
)

export default About