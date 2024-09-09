// fonts
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700']
})

// Components
import Header from '../components/Header'
import Nav from '../components/Nav'
import TopLeftImg from '../components/TopLeftImg'

const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${roboto.variable} font-roboto relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  )
}

export default Layout
