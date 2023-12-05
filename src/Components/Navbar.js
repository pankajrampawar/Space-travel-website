import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar(location) {

    const atPage = location;

    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = ()=>{
        setIsMenuOpen(prev => !prev);
    }

    return <div>
        <nav>

            <div className='flex justify-between p-5 items-center md:p-16'>
                <span><img src='/assets/shared/logo.svg' alt='logo' /></span>
                <span onClick={toggleMenu}><img src='/assets/shared/icon-hamburger.svg' alt='menu icon' className='sm:hidden'/></span>
            </div>

            <div 
                className={`${isMenuOpen ? 'block' : 'hidden'} menu fixed sm:block
                    top-0 right-0 pt-24 px-7 h-screen w-2/3
                    sm:h-24 sm:pt-8 h5 white tracking-wider sm:absolute 
                    md:top-10
                `}
            > <img src='/assets/shared/icon-close.svg' className='fixed top-6 right-6 sm:hidden' onClick={toggleMenu}/>
                <ul
                    className='left-0 flex flex-col gap-4 sm:flex-row sm:justify-evenly'
                >
                    <li>
                        <span>
                            <span className='sm:hidden md:inline-block font-bold mr-2'>00 </span>
                            <span onClick={()=>{navigate('/')}}>HOME</span>
                        </span>
                    </li>
                    <li>
                        <span className='sm:hidden  md:inline-block font-bold mr-2'>01 </span>
                        <span onClick={()=>navigate('/destination')}>DESTINATION</span>
                    </li>
                    <li>
                        
                        <span className='sm:hidden md:inline-block font-bold mr-2'>02 </span>
                        <span onClick={()=>{navigate('/crew')}}>CREW</span>

                    </li>
                    <li>
                        <span className='sm:hidden md:inline-block font-bold mr-2'>03 </span>
                        <span onClick={()=>navigate('/technology')}>TECHNOLOGY</span>
                    </li>
                </ul>
            </div>

        </nav>
    </div>
}