import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const { register, handleSubmit } = useForm()
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [isLoading, setIsLoading] = useState(false)
  const [formStatus, setFormStatus] = useState('')

  const onSubmit = async (data) => {
    setIsLoading(true)

    if (!executeRecaptcha) {
      console.error('Ошибка загрузки reCAPTCHA!')
      setFormStatus('Ошибка загрузки reCAPTCHA!')
      setIsLoading(false)
      return
    }

    try {
      const token = await executeRecaptcha('submit')
      if (!token) {
        console.error('Ошибка reCAPTCHA, попробуйте еще раз.')
        setFormStatus('Ошибка reCAPTCHA, попробуйте еще раз.')
        setIsLoading(false)
        return
      }

      const formData = {
        ...data,
        recaptchaToken: token
      }

      const response = await axios.post('/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.data.success) {
        setFormStatus('Спасибо за ваше сообщение! ')
      } else {
        setFormStatus('Ошибка проверки reCAPTCHA!')
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error)
      setFormStatus('Ошибка при отправке формы. Попробуйте позже.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="h-full bg-primary/30">
      <div className="container mx-auto py-32 flex justify-center items-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          {formStatus ? (
            <p className="text-center mt-4">{formStatus}</p>
          ) : (
            <>
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 text-center mb-12"
              >
                Let’s <span className="text-accent">connect.</span>
              </motion.h2>

              <motion.form
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-col gap-6 w-full mx-auto"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex gap-x-6 w-full">
                  <input
                    {...register('name', { required: true })}
                    type="text"
                    placeholder="Name"
                    className="input"
                    required
                  />
                  <input
                    {...register('email', { required: true })}
                    type="email"
                    placeholder="* Email"
                    className="input"
                    required
                  />
                </div>
                <input
                  {...register('subject', { required: true })}
                  type="text"
                  placeholder="* Subject"
                  className="input"
                  required
                />
                <textarea
                  {...register('message', { required: true })}
                  placeholder="Message"
                  className="textarea"
                  required
                />

                <div className="flex items-center gap-x-0 w-full">
                  <input
                    {...register('consent', { required: true })}
                    type="checkbox"
                    id="consent"
                    className="mr-2 checkbox"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-400">
                    * Отправляя форму, я даю согласие на обработку персональных данных.
                  </label>
                </div>

                <button
                  type="submit"
                  className={`btn rounded-full border border-white/40 max-w-[170px] px-8 flex items-center justify-center transition-all duration-300 group hover:border-accent relative overflow-hidden ${isLoading ? 'opacity-50' : ''}`}
                  disabled={isLoading}
                >
                  <span
                    className={`transition-transform duration-500 group-hover:-translate-y-[150%] text-white/80`}
                  >
                    {isLoading ? 'Sending...' : 'Let’s talk'}
                  </span>
                  <BsArrowRight
                    className={`ml-2 absolute opacity-0 transition-all duration-500 transform group-hover:translate-y-0 group-hover:opacity-100 text-[22px] text-white/80`}
                  />
                </button>
              </motion.form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact