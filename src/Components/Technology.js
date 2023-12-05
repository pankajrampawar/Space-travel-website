import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Technology() {

    const [selectedTechnology, setSelectedTechnology] = React.useState(1);

    const technologies = {
        1: {
            img: '/assets/technology/image-launch-vehicle-landscape.jpg',
            imgB: '/assets/technology/image-launch-vehicle-portrait.jpg',
            title: 'LAUNCH VEHICLE',
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },

        2: {
            img: '/assets/technology/image-spaceport-landscape.jpg',
            imgB: '/assets/technology/image-spaceport-portrait.jpg',
            title: 'SPACEPORT',
            description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },

        3: {
            img: '/assets/technology/image-space-capsule-landscape.jpg',
            imgB: '/assets/technology/image-space-capsule-portrait.jpg',
            title: 'SPACE CAPSULE',
            description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    }

    const technologyDisplay = technologies[selectedTechnology]

    return <div className='relative min-h-full'>

        <div className='absolute min-h-full h-screen w-screen '>
            {<img src='/assets/technology/background-technology-mobile.jpg' className='sm:hidden min-h-full min-w-full'/>}
            {<img src='/assets/technology/background-technology-tablet.jpg' className='hidden sm:flex lg:hidden min-h-full min-w-full'/>}
            {<img src='/assets/technology/background-technology-desktop.jpg' className='hidden lg:flex min-h-full min-w-full'/>}
        </div>
        
        <header className='relative z-20'>
            <nav>
                <Navbar location={4}/>
            </nav>
        </header>

        <main className='relative z-10 white flex flex-col items-center gap-6 md:gap-10 sm:mt-10 md:pb-20 md:w-full'>

            <section className='h5 text-xl tracking-widest sm:self-start px-10 lg:text-2xl xl:text-3xl lg:ml-16'>
                <span className='text-gray-500 mr-2'>03</span>
                SPACE LAUNCH 101
            </section>

            <article className='flex flex-col items-center text-center gap-6 md:gap-10 md:flex-row md:justify-between lg:pl-24 md:relative md:w-full'>

                <section className='md:order-3'>
                    <img src={technologyDisplay.img} alt='space craft' className='md:hidden'/>
                    <img src={technologyDisplay.imgB} alt='space craft' className='hidden md:block'/>
                </section>

                <section className='flex gap-6 h1 md:flex-col md:order-1 md:text-2xl'>
                    <div className={`${selectedTechnology === 1 ? 'bg-white text-black' : 'bg-transparent text-white'} aspect-square h-8 sm:h-12 lg:h-16 rounded-full flex justify-center items-center border border-gray-600`} onClick={()=>setSelectedTechnology(1)}>1</div>
                    <div className={`${selectedTechnology === 2 ? 'bg-white text-black' : 'bg-transparent text-white'} aspect-square h-8 sm:h-12 lg:h-16 rounded-full flex justify-center items-center border border-gray-600`} onClick={()=>setSelectedTechnology(2)}>2</div>
                    <div className={`${selectedTechnology === 3 ? 'bg-white text-black' : 'bg-transparent text-white'} aspect-square h-8 sm:h-12 lg:h-16 rounded-full flex justify-center items-center border border-gray-600`} onClick={()=>setSelectedTechnology(3)}>3</div>
                </section>

                <section className='flex flex-col gap-6 px-5 md:order-2 md:text-left'>
                    <p className='text-base dark'>THE TERMINOLOGY...</p>
                    <h1 className='text-3xl h1 lg:text-4xl xl:text-6xl'>{technologyDisplay.title}</h1>
                    <p className='para dark max-w-[450px] lg:text-xl'>{technologyDisplay.description}</p>
                </section>

            </article>
            
        </main>
    </div>
}