// testimonial data
import { testimonialData } from '../data/testimonialData'

import Image from 'next/image'
import { memo } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

// Конфигурация Swiper
const swiperConfig = {
  modules: [Navigation, Pagination],
  pagination: { clickable: true },
}

// Компонент для отображения элемента слайда
const TestimonialSliderItem = ({ person }) => (
  <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
    {/* Avatar, name, position */}
    <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
      <div className='flex flex-col justify-center text-center'>
        {/* Avatar */}
        <div>
          <Image
            src={person.image}
            alt={person.name}
            width={100}
            height={100}
            className='mb-2 mx-auto rounded-full'
          />
        </div>
        {/* name */}
        <div className='text-lg'>{person.name}</div>
        {/* Position */}
        <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
      </div>
    </div>
    {/* quote & message */}
    <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
      {/* quote icon */}
      <div className='mb-4'>
        <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
      </div>
      {/* message */}
      <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
    </div>
  </div>
)

// Основной компонент слайдера
const TestimonialSlider = () => (
  <Swiper
    navigation={true}
    pagination={swiperConfig.pagination}
    modules={swiperConfig.modules}
    className="h-[400px]"
  >
    {testimonialData.map((person, index) => (
      <SwiperSlide key={index}>
        <TestimonialSliderItem person={person} />
      </SwiperSlide>
    ))}
  </Swiper>
)

export default memo(TestimonialSlider)
