import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profile from "../../public/images/profile/Profileimage.png"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'
const AnimatedNumbers=({value})=>{
    const ref=useRef(null);
    const motionValue=useMotionValue(0);
    const springValue=useSpring(motionValue,{duration:3000});
    const isInView=useInView(ref,{once:true});
    useEffect(()=>{
        if(isInView){
            motionValue.set(value);
        }

    },[isInView,value,motionValue])
    useEffect(()=>{
        springValue.on("change",(latest)=>{
           if(ref.current&&latest.toFixed(0)<=value){
            ref.current.textContent=latest.toFixed(0);
           } 
        })
    },[springValue,value])

    return <span ref={ref}></span>
}
const about = () => {
  return (
    <>
    <Head>
        <title>Prashant | About Page</title>
        <meta name='description' content='any description'></meta>
    </Head>
    <TransitionEffect/>
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
        <AnimatedText text="Welcome To My Creative Space!" className='mb-16 !text-6xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
            <div className='col-span-3 flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About&nbsp;Me</h2>
            <p className='font-medium'>
            I have recently completed my Post Graduation Diploma in Advance Computing (PG-DAC) training at the Sunbeam Institute of Information Technology, Pune.
            </p>
            <p className='font-medium my-4'>
            Throughout this program, I've acquired knowledge in several technologies, including the MySQL database, Data Structures and Algorithms, Cloud Computing, DevOps, and programming languages such as Java, JavaScript, and C#.
            </p>
            <p className='font-medium'> I've also explored frameworks like Node.js, React, Spring Boot, and .NET, all in a short period with a strong understanding of these concepts.</p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
            '>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light '></div>
                <Image src={profile} alt="Prashant's Pic" className='w-full h-auto rounded-2xl' priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='md:text-6xl sm:text-5xl xs:text-4xl inline-block text-7xl font-bold'><AnimatedNumbers value={5}/>+</span>
                    <h2 className='xl:text-center md:text-lg sm:text-base xs:text-sm text-xl font-medium capitalize text-dark/75 dark:text-light'>Projects Completed</h2>
                </div>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='md:text-6xl sm:text-5xl xs:text-4xl inline-block text-7xl font-bold'><AnimatedNumbers value={3}/>+</span>
                    <h2 className='xl:text-center md:text-lg sm:text-base xs:text-sm text-xl font-medium capitalize text-dark/75 dark:text-light'>Frameworks</h2>
                </div>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='md:text-6xl sm:text-5xl xs:text-4xl inline-block text-7xl font-bold'><AnimatedNumbers value={10}/>+</span>
                    <h2 className='xl:text-center md:text-lg sm:text-base xs:text-sm text-xl font-medium capitalize text-dark/75 dark:text-light'>Skills</h2>
                </div>
            </div>
        </div>
        <Skills/>
        <Education/>
        </Layout>
    </main>

    </>
  )
}

export default about