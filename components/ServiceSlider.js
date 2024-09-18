import { memo } from 'react'
import { RxArrowTopRight } from 'react-icons/rx'
import { FreeMode, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { serviceData } from '../data/serviceData'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// Конфигурация Swiper
const swiperConfig = {
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 15 },
    640: { slidesPerView: 3, spaceBetween: 15 },
  },
  modules: [FreeMode, Pagination],
  pagination: { clickable: true },
}

// Компонент для отображения элемента слайда
const ServiceSliderItem = ({ icon, title, description }) => (
  <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
    <div className="text-4xl text-accent mb-4">{icon}</div>
    <div className="mb-8">
      <h3 className="mb-2 text-lg">{title}</h3>
      <p className="max-w-[350px] leading-normal">{description}</p>
    </div>
    <div className="text-3xl">
      <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
    </div>
  </div>
)

// Основной компонент слайдера
const ServiceSlider = () => (
  <Swiper
    breakpoints={swiperConfig.breakpoints}
    freeMode
    pagination={swiperConfig.pagination}
    modules={swiperConfig.modules}
    className="h-[240px] sm:h-[340px]"
  >
    {serviceData.map(({ icon, title, description }, index) => (
      <SwiperSlide key={index}>
        <ServiceSliderItem icon={icon} title={title} description={description} />
      </SwiperSlide>
    ))}
  </Swiper>
)

export default memo(ServiceSlider)