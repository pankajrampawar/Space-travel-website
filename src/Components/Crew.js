import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Crew() {

    const [crewNumber, setCrewNumber] = React.useState(1);

    const crewMembers = {
        1: {
            img:'/assets/crew/image-douglas-hurley.png',
            position: 'COMMANDER',
            name: 'DOUGLAS HURLEY',
            details: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot  and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        },
    
        2: {
            img: '/assets/crew/image-mark-shuttleworth.png',
            position: 'MISSION SPECIALIST', 
            name: 'MARK SHUTTLEWORTH', 
            details: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        },
    
        3: {
            img: '/assets/crew/image-victor-glover.png',
            position: 'PILOT',
            name: 'VICTOR GLOVER',
            details: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
        },
    
        4: {
            img: '/assets/crew/image-anousheh-ansari.png',
            position: 'FLIGHT ENGINEER',
            name: 'ANOUSHEH ANSARI',
            details: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        }
    }
   

    const selectedMember = crewMembers[crewNumber];
    console.log(selectedMember.position)


    return(<div className='relative min-h-full lg:h-screen'>

        <div className='absolute top-0 bottom-0 min-h-full h-screen w-screen z-0'>
            <img src='/assets/crew/background-crew-mobile.jpg' alt='background image for mobile' className='min-h-full h-screen z-0 sm:hidden w-full'/>
            <img src='/assets/crew/background-crew-tablet.jpg' alt='background image for tablet' className='min-h-full z-0 hidden sm:block md:hidden w-full'/>
            <img src='/assets/crew/background-crew-desktop.jpg' alt='bacground image for desktop' className='min-h-full h-screen object-fill z-0 hidden md:block w-full'/>
        </div>

        <header className='relative z-20'>
            <nav>
                <Navbar/>
            </nav>
        </header>

        <main className='lg:absolute relative z-10 white flex flex-col items-center px-5 gap-6 
                        lg:items-start lg:flex-wrap lg:justify-evenly  lg:bottom-0 lg:w-5/6 lg:left-0 lg:right-0 lg:m-auto'>
            
            <section className='text-lg h5 tracking-widest md:order-1 md:self-start sm:pt-4'>
                <p><span className='text-gray-500 mr-2'>02</span>MEET YOUR CREW`</p>
            </section>

            <section className='w-full border-b flex justify-center border-gray-700 h-56 md:h-[380px] items-end md:order-3 
                        lg:absolute lg:border-0 lg:right-0 lg:w-96'>
                <div className='md:flex justify-center bottom-0'>
                    <img src={selectedMember.img} alt='douglas-hurley' className=' w-40 md:w-1/2 lg:w-[300px]'/>
                </div>
            </section>

            <section className='w-full flex flex-col items-center text-center gap-6 md:order-2 max-w-[450px] lg:text-left lg:items-start lg:mt-24 lg:mb-32'>

                <div className='flex gap-4 md:order-2'>
                    <div className={`aspect-square h-2 cursor-pointer md:h-3 ${crewNumber === 1 ? 'bg-white' : 'bg-gray-600'} rounded-full`} onClick={()=>{setCrewNumber(1)}}></div>
                    <div className={`aspect-square h-2 cursor-pointer md:h-3 ${crewNumber === 2 ? 'bg-white' : 'bg-gray-600'} rounded-full`} onClick={()=>{setCrewNumber(2)}}></div>
                    <div className={`aspect-square h-2 cursor-pointer md:h-3 ${crewNumber === 3 ? 'bg-white' : 'bg-gray-600'} rounded-full`} onClick={()=>{setCrewNumber(3)}}></div>
                    <div className={`aspect-square h-2 cursor-pointer md:h-3 ${crewNumber === 4 ? 'bg-white' : 'bg-gray-600'} rounded-full`} onClick={()=>{setCrewNumber(4)}}></div>
                </div>

                <div className='flex flex-col h1 md:order-1'>
                 <h2 className='text-lg md:text-2xl text-gray-500'>{selectedMember.position}</h2>
                 <h1 className='text-2xl md:text-4xl mt-1'>{selectedMember.name}</h1>
                 <p className=' text-base md:text-xl para dark mt-2 h-[150px]'>{selectedMember.details}</p>
                </div>
            </section>
        </main>
    </div>)
}