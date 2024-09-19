import { useRouter } from 'next/router'
import '../styles/globals.css'

import Layout from '../components/Layout'
import Transition from '../components/Transition'

// Framer Motion
import { AnimatePresence, motion } from 'framer-motion'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: true,
        defer: true,
      }}
    >
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </GoogleReCaptchaProvider>
  )
}

export default MyApp