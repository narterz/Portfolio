import 'animate.css';
import { Link } from 'react-scroll';

export const Nav = () => {

    const navItems = [
        { name: "Home", link: 'home' },
        { name: "About", link: 'about' },
        { name: "Projects", link: 'projects' },
        { name: "Contact", link: "contact" }
    ];

    return (
        <header className='h-[8vh]  bg-primary sticky top-0'>
            <nav className='relative flex flex-row items-center justify-between w-full h-full'>
                <div className='items-center justify-center w-1/4 h-full xsm:max-md:w-[30%] md:w-[40%] xsm:max-lg:flex'>
                    <Link
                        to='home'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-55}
                    >
                        <h1 className='font-bold text-center text-white cursor-pointer xxl:text-start xxl:ms-20 ms-10 xsm:ms-0 xsm:max-md:text-norm md:text-lg xl:text-xlg'><b className='text-secondary'>Shelton </b>Styles</h1>
                    </Link>
                </div>
                <div className='flex flex-row items-center w-1/3 md:w-[60%]  h-full xsm:w-[70%] justify-evenly'>
                    {navItems.map((item) => {
                        return (
                            <Link
                                to={item.link}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-55}
                                key={item.link}
                            >
                                <p className='text-white cursor-pointer nav-links font-regular xsm:max-md:text-xxsm xl:text-sm'>{item.name}</p>
                            </Link>
                        )
                    })}
                </div>
            </nav>
        </header>
    )
}