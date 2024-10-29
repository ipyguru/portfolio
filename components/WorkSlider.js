import Image from 'next/image'
import { memo } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import { workSlides } from '../data/workData'
import Link from 'next/link'

// Конфигурация Swiper
const swiperConfig = {
  spaceBetween: 10,
  modules: [Pagination],
  pagination: { clickable: true },
}

// Компонент для отображения элемента слайда
const WorkSliderItem = ({ slide }) => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
      {slide.images && slide.images.map((image, index) => {
        // Вынесение ссылки в переменную
        const imageLink = image.href ? (
          <Link
            href={image.href}
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center gap-x-0 text-[13px] tracking-[0.2em]'
          >
            <div className='delay-100 uppercase'>{image.title}</div>
            <div className='translate-y-[500%] group-hover:translate-y-0 transition-transform duration-300 delay-150'>.</div>
            <BsArrowRight className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-transform duration-300 delay-200' />
          </Link>
        ) : (
          <div className='flex items-center gap-x-0 text-[13px] tracking-[0.2em]'>
            <div className='delay-100 uppercase'>{image.title}</div>
            <div className='translate-y-[500%] group-hover:translate-y-0 transition-transform duration-300 delay-150'>.</div>
            <BsArrowRight className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-transform duration-300 delay-200' />
          </div>
        )

        return (
          <div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
            <div className='flex items-center justify-center relative overflow-hidden group'>
              <Image
                src={image.path}
                alt={image.title}
                width={500}
                height={300}
                className='object-cover' // Добавлено для обрезки изображения
              />
              {/* overlay gradient */}
              <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-opacity duration-700'></div>
              {/* title */}
              <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-transform duration-300'>
                {imageLink} {/* Использование переменной здесь */}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Основной компонент слайдера
const ServiceSlider = () => (
  <Swiper
    spaceBetween={swiperConfig.spaceBetween}
    pagination={swiperConfig.pagination}
    modules={swiperConfig.modules}
    className="h-[280px] sm:h-[480px]"
  >
    {workSlides.slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <WorkSliderItem slide={slide} />
      </SwiperSlide>
    ))}
  </Swiper>
)

export default memo(ServiceSlider)