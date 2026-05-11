import Image from "next/image"
import Link from 'next/link'
const Nav = () => {
     const Links = [
    {
      link:'/',
      label:'Home'
    },
    {
      link:'/about',
      label:'About Us'
    },
    {
      link:'/products',
      label:'Products'
    },
    {
      link:'/projects',
      label:'Projects'
    },
    {
      link:'/resources',
      label:'Resources'
    },
    {
      link:'/blogs',
      label:'Blogs'
    }
  ]
    return (

        <nav className="flex justify-between items-center max-w-360 px-[80px] mx-auto py-5">
            <div>
                <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    height={200}
                    width={200}
                />
            </div>
            <ul className="flex gap-7 text-lg">
                {Links.map((link,index) => (
                    <li key={index}>
                        <Link href={link.link}>
                            {link.label}
                        </Link>
                    </li>

                ))}
            </ul>
            <div>
                <button className="bg-primary text-black px-4 py-2 rounded-md border border-black border-2xl">
                    Get in Touch
                </button>
            </div>
        </nav>
    )
}

export default Nav