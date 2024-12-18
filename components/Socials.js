import Link from 'next/link'
import { socialLinks } from '../data/socialLinks'


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl">
      {socialLinks.map(({ href, icon: Icon }, index) => (
        <Link key={index} href={href} target="_blank" rel="noopener noreferrer">
          <Icon className="hover:text-accent transition-all duration-300" />
        </Link>
      ))}
    </div>
  )
}

export default Socials