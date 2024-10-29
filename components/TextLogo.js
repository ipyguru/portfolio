// TextLogo.js

// import Image from 'next/image'
// import Link from 'next/link'

const TextLogo = () => {
    return (

        // <Image src={'/logo.svg'} width={220} height={48} alt='logo' priority={true} />

        < p className="text-3xl sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-accent drop-shadow-md" >
            <span className="font-semibold tracking-tight">Буоц</span>
            <span className="ml-1.5">Владимир</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light font-extrabold text-4xl lg:text-5xl ml-1 drop-shadow-lg transition-transform transform hover:scale-125 duration-300 ease-in-out">.</span>
        </p >
    )
}

export default TextLogo