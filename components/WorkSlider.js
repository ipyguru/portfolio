import Image from 'next/image'
import { memo } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import { workSlides } from '../data/workData'

// Конфигурация Swiper
const swiperConfig = {
  spaceBetween: 10,
  modules: [Pagination],
  pagination: { clickable: true },
}

// Компонент для отображения элемента слайда
const WorkSliderItem = ({ slide }) => (
  <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer '>
    {slide.images && slide.images.map((image, index) => (
      <div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
        <div className='flex items-center justify-center relative overflow-hidden group'>
          <Image src={image.path} alt={image.title} width={500} height={300} />
          {/* overlay gradient */}
          <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
          {/* title */}
          <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
            <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
              {/* title part 1 */}
              <div className='delay-100'>LIVE</div>
              {/* title part 2 */}
              <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
              {/* title part 3 */}
              <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

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