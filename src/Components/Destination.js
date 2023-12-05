import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Destination() {

    const [innerLocation, setInnerLocation] = React.useState(4)


    const moonDetails = `  See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
    regain perspective and come back refreshed. While you’re there, take in some history 
    by visiting the Luna 2 and Apollo 11 landing sites.`;
    
    const moonDistance = `384,400 KM`;
    
    const moonTime = '3 DAYS'

    const marsDetails = ` Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
    the tallest planetary mountain in our solar system. It’s two and a half times 
    the size of Everest!`;
    const marsDistance = `225 mil. KM`;
    const marsTime = `9 MONTHS`;

    const europaDetails = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
    winter lover’s dream. With an icy surface, it’s perfect for a bit of 
    ice skating, curling, hockey, or simple relaxation in your snug 
    wintery cabin.`;
    const europaDistance = `628 mil. KM`;
    const europaTime = `3 YEARS`;

    const titanDetails = `  The only moon known to have a dense atmosphere other than Earth, Titan 
    is a home away from home (just a few hundred degrees colder!). As a 
    bonus, you get striking views of the Rings of Saturn.`;
    const titanDistance = `1.6 bil. KM`;
    const titanTime = `7 YEARS`;


    return (
        <div className='relative min-h-full'>

        <div className='absolute top-0 bottom-0 min-h-full h-screen w-screen z-0'>
            <img src='/assets/destination/background-destination-mobile.jpg' alt='background image for mobile' className='min-h-full h-screen z-0 sm:hidden w-full'/>
            <img src='/assets/destination/background-destination-tablet.jpg' alt='background image for tablet' className='min-h-full z-0 hidden sm:block md:hidden w-full'/>
            <img src='/assets/destination/background-destination-desktop.jpg' alt='bacground image for desktop' className='min-h-full h-screen object-fill z-0 hidden md:block w-full'/>
        </div>
            
        <header className='z-20 relative'>
            <Navbar/>
        </header>

        <main className='relative z-10 text-white sm:mt-6 md:mt-0 flex flex-col gap-4 items-center lg:flex-row lg:h-full lg:items-center pb-20 lg:px-6 lg:justify-center lg:gap-10'>
            
            <section className='flex flex-col items-center h5 white w-full lg:gap-8'>
                <p className='text-lg tracking-wider md:self-start md:text-xl px-6 '>
                    <span className='text-gray-500 mr-2 '>01</span>
                    PICK YOUR DESTINATION
                </p>
                <div className='aspect-square w-44 mt-6 md:w-80 lg:w-96'>
                    {innerLocation === 1 && <img src='assets/destination/image-moon.png' alt='moon image'/>}
                    {innerLocation === 2 && <img src='assets/destination/image-mars.png' alt='mars image'/>}
                    {innerLocation === 3 && <img src='assets/destination/image-europa.png' alt='mars image'/>}
                    {innerLocation === 4 && <img src='assets/destination/image-titan.png' alt='mars image'/>}
                </div>
            </section>

            <section className='flex flex-col gap-6 items-center mt-8 text-2xl max-w-[600px] lg:gap-12'>
                <div className='flex gap-4'>
                    <span className={`h5 dark relative ${innerLocation === 1 && 'white effect'}`} onClick={()=>setInnerLocation(1)}>MOON</span>
                    <span className={`h5 dark relative ${innerLocation === 2 && 'white effect'}`} onClick={()=>setInnerLocation(2)}>MARS</span>
                    <span className={`h5 dark relative ${innerLocation === 3 && 'white effect'}`} onClick={()=>setInnerLocation(3)}>EUROPA</span>
                    <span className={`h5 dark relative ${innerLocation === 4 && 'white effect' }`} onClick={()=>setInnerLocation(4)}>TITAN</span>
                </div>

                <div className='mx-6 pb-10 text-center border-b border-gray-700'>
                    <h1 className='h1 text-6xl white lg:pb-10'>
                       {innerLocation === 1 && 'MOON'}
                       {innerLocation === 2 && 'MARS'}
                       {innerLocation === 3 && 'EUROPA'}
                       {innerLocation === 4 && 'TITAN'}
                    </h1>
                    <p className='para dark mt-2 text-base tracking-wide'>
                        {innerLocation === 1 && moonDetails}
                        {innerLocation === 2 && marsDetails}
                        {innerLocation === 3 && europaDetails}
                        {innerLocation === 4 && titanDetails}
                    </p>
                </div>

                <div className='flex flex-col gap-6 text-center md:flex-row md:gap-24'>
                    <div>
                        <p className='h5 tracking-wider text-lg dark'>AVG. DISTANCE</p>
                        <p className='h1 text-2xl white'>
                            {innerLocation === 1 && moonDistance}
                            {innerLocation === 2 && marsDistance}
                            {innerLocation === 3 && europaDistance}
                            {innerLocation === 4 && titanDistance}
                        </p>
                    </div>

                    <div>
                        <p className='h5 tracking-wider text-lg dark'>EST. TRAVEL TIME</p>
                        <p className='h1 text-2xl white'>
                        {innerLocation === 1 && moonTime}
                        {innerLocation === 2 && marsTime}
                        {innerLocation === 3 && europaTime}
                        {innerLocation === 4 && titanTime}
                        </p>
                    </div>
                </div>
            </section>
        </main>
        </div>
    )
}