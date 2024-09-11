import Link from 'next/link'
import { RiGithubLine, RiVkLine, RiYoutubeLine } from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-2xl'>
      <Link href={''} className='' target='_blank'>
        <RiYoutubeLine className='hover:text-accent transition-all duration-300' />
      </Link>
      <Link href={''} className='' target='_blank'>
        <RiVkLine className='hover:text-accent transition-all duration-300' />
      </Link>
      <Link href={''} className='' target='_blank'>
        <RiGithubLine className='hover:text-accent transition-all duration-300' />
      </Link>
      {/* more */}
    </div>
  )
}

export default Socials
