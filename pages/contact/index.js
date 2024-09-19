import { Circles } from '../../components/Circles'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Contact = () => {
  return (
    <section className="h-full bg-primary/30">
      <div className="container mx-auto py-32 flex justify-center items-center h-full">
        {/* Текст и форма */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* Заголовок */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let’s <span className="text-accent">connect.</span>
          </motion.h2>

          {/* Форма */}
          <motion.form
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col gap-6 w-full mx-auto"
            action=""
          >
            {/* Группа инпутов */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="Name" className="input" />
              <input type="email" placeholder="Email" className="input" />
            </div>
            <input type="text" placeholder="Subject" className="input" />
            <textarea name="message" placeholder="Message" className="textarea"></textarea>

            {/* Кнопка отправки */}
            <button className="btn rounded-full border border-white/40 max-w-[170px] px-8 flex items-center justify-center transition-all duration-300 group hover:border-accent relative overflow-hidden">
              <span className="transition-transform duration-500 group-hover:-translate-y-[150%] text-white/80">
                Let’s talk
              </span>
              <BsArrowRight className="ml-2 absolute opacity-0 transition-all duration-500 transform group-hover:translate-y-0 group-hover:opacity-100 text-[22px] text-accent" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact