import { useRouter } from 'next/router'
import '../styles/globals.css'
import Layout from '../components/Layout'
import Transition from '../components/Transition'
// Framer Motion
import { AnimatePresence, motion } from 'framer-motion'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const isContactPage = router.pathname === '/contact'

  const recaptchaProvider = isContactPage ? (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
      container={{
        parameters: {
          badge: 'left', // Optional, can be 'right' as well
          theme: 'dark', // Optional
        }
      }}
    >
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  ) : (
    <Component {...pageProps} />
  )

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          {recaptchaProvider}
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp