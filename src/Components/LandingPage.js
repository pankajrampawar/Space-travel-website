import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


export default function LandingPage() {

    const navigate = useNavigate();


    return <div className='realtive min-h-full'>

        <div className='absolute top-0 bottom-0 min-h-full w-screen z-0'>
            <img src='/assets/home/background-home-mobile.jpg' alt='background image for mobile' className='h-full z-0 sm:hidden w-full'/>
            <img src='/assets/home/background-home-tablet.jpg' alt='background image for tablet' className='min-h-full z-0 hidden sm:block md:hidden w-full'/>
            <img src='/assets/home/background-home-desktop.jpg' alt='bacground image for desktop' className='min-h-full z-0 hidden md:block w-full'/>
        </div>

        <header className='z-10 relative text-white'>
            <nav>
                <Navbar location={0}/>
            </nav>
        </header>

        <main className='relative text-white flex flex-col items-center mt-6 sm:mt-20 gap-16 sm:gap-40 md:flex-row md:mt-[20vh] md:justify-evenly'>

            <section className='text-lg text-center flex flex-col gap-6 md:text-left'>  
                <div>
                    <p className='tracking-widest mb-6 h5 dark md:text-2xl'>SO, YOU WANT TO TRAVEL TO SPACE</p>
                    <h1 className='text-8xl h1 white md:text-[150px]'> SPACE</h1>
                </div>
                <p className='text-[15px] para px-5 dark max-w-[350px]  md:max-w-[500px] md:px-0 md:text-lg'>
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                     outer space and not hover kind of on the edge of it. Well sit back, and relax 
                     because we’ll give you a truly out of this world experience!
                </p>
            </section>

            <section className='bg-white rounded-full aspect-square w-40 lg:w-60 text-black h1 text-2xl flex justify-center items-center drop relative'
                onClick={()=>{navigate('/destination')}}
            >
                EXPLORE
            </section>

        </main>
    </div>
}