import Link from 'next/link'
import { buttonVariants } from '../ui/Button'
import MobileNav from './MobileNav'
import NavItems from './NavItems';

const Navbar = () => {
    return (
        <header>
            <nav className='sticky backdrop-blur-sm z-50 top-0  h-32 flex items-center justify-between'>
                <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
                    <Link href='/' className={`hover:underline z-[101] ${buttonVariants({ variant: 'link' })}`}>
                        <svg width="40" height="27" viewBox="0 0 35 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-white" d="M8.34961 17H6.54785V6.19824H0.175781V4.39648H14.7217V6.19824H8.34961V17ZM29.4521 17H16.418V4.39648H29.4521V6.19824H18.2197V15.1982H29.4521V17ZM27.9229 11.6035H19.1162V9.80176H27.9229V11.6035ZM33.873 15.6465C33.873 15.834 33.835 16.0098 33.7588 16.1738C33.6885 16.3379 33.5918 16.4814 33.4688 16.6045C33.3457 16.7275 33.2021 16.8242 33.0381 16.8945C32.874 16.9648 32.7012 17 32.5195 17C32.332 17 32.1562 16.9648 31.9922 16.8945C31.834 16.8242 31.6934 16.7275 31.5703 16.6045C31.4473 16.4814 31.3506 16.3379 31.2803 16.1738C31.21 16.0098 31.1748 15.834 31.1748 15.6465C31.1748 15.4648 31.21 15.292 31.2803 15.1279C31.3506 14.9639 31.4473 14.8203 31.5703 14.6973C31.6934 14.5742 31.834 14.4775 31.9922 14.4072C32.1562 14.3369 32.332 14.3018 32.5195 14.3018C32.7012 14.3018 32.874 14.3369 33.0381 14.4072C33.2021 14.4775 33.3457 14.5742 33.4688 14.6973C33.5918 14.8203 33.6885 14.9639 33.7588 15.1279C33.835 15.292 33.873 15.4648 33.873 15.6465Z" fill="white" />
                        </svg>
                        <span className="sr-only">Site logo</span>
                    </Link>
                    <div>
                        <MobileNav />
                        <span className="sr-only">Toggle navigation menu</span>
                    </div>
                    <NavItems />
                </div>
            </nav>
        </header>
    )
}

export default Navbar