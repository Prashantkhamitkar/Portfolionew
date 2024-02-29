import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Projectimg from '../../public/images/projects/agrimain.png'
import Projectimg1 from '../../public/images/projects/agrihome.png'
import Projectimg2 from '../../public/images/projects/agriregi.png'
import Studproject1 from '../../public/images/projects/studlog.png'
import Studproject2 from '../../public/images/projects/studhome.png'
import Studproject3 from '../../public/images/projects/studerec.png'
import chartproject1 from '../../public/images/projects/barom.png'
import chartproject2 from '../../public/images/projects/chartom.png'
import retailproject from '../../public/images/projects/retail.png'
import wonder1 from '../../public/images/projects/wonderfirst.png'
import wonder2 from '../../public/images/projects/wonderhome.png'
import wonder3 from '../../public/images/projects/wonderregi.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
const FramerImage=motion(Image);
const FeaturedProject=({type,title,summary,img,github,link})=>{
    return(<article className='w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] dark:bg-light bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'></div>
                
        <Link href={link} target={'_blank'}
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
        >
            <FramerImage src={img} alt={title} className='w-full h-auto'
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
        </Link>
        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base '>{type}</span>
            <Link href={link} target={'_blank'} className='hover:underline underline-offset-2'>
           <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
        <Link href={github} target={'_blank'} className='w-10'>
            <GithubIcon/></Link> 
            <Link href={github} target={'_blank'} className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
              Source Code  </Link>
        </div>
        </div>
    </article>)
}
const Project=({title,type,img,link,github})=>{
    return (<article className='w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid dark:border-light  border-dark bg-light p-6 relative dark:bg-dark xs:p-4 '>
         <div className='absolute dark:bg-light top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'></div>
        
        <Link href={link} target={'_blank'}
        className='w-full cursor-pointer overflow-hidden rounded-lg'
        >
            <FramerImage src={img} alt={title} className='w-full h-auto'
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
        </Link>
        <div className='w-full flex flex-col items-start justify-between mt-4'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
            <Link href={link} target={'_blank'} className='hover:underline underline-offset-2'>
           <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>{title}</h2>
        </Link>
        
        <div className='mt-2 flex items-center'>
        <Link href={github} target={'_blank'} className='w-8 md:w-6'>
            <GithubIcon/></Link> 
            
        </div>
        </div>
    </article>)
}
const projects = () => {
  return (
    <>
     <Head>
        <title>Prashant | Projects Page</title>
        <meta name='description' content='any description'></meta>
    </Head>
    <TransitionEffect/>
    <main className='w-full bt-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Welcome to My Projects Gallery!" className='mb-16  lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
        <div className='grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
                <FeaturedProject
                title="The Agriculture Portal"
                summary="The Agriculture Portal for Selling and Buying All Types of Equipment is an
                online platform designed to facilitate the buying and selling of agricultural
                equipment and machinery. The project aims to provide a centrelized
                marketplace where farmers, equipment manufacturers, and buyers can
                connect, transact, and meet their agricultural equipment needs efficiently.
                Technology - {Spring Boot (J2EE),ReactJs,Mysql}"
               link="https://github.com/Prashantkhamitkar/AgriculturePortal"
               github="https://github.com/Prashantkhamitkar/AgriculturePortal"
               type="Featured Project"
               img={Projectimg}
               />
            </div>
            <div className='col-span-6 sm:col-span-12'><Project title="Home Page"
                link="https://github.com/Prashantkhamitkar/AgriculturePortal"
               github="https://github.com/Prashantkhamitkar/AgriculturePortal"
               type="Featured Project"
               img={Projectimg1}/></div>
            <div className='col-span-6 sm:col-span-12'><Project title="Registration Page"
                link="https://github.com/Prashantkhamitkar/AgriculturePortal"
               github="https://github.com/Prashantkhamitkar/AgriculturePortal"
               type="Featured Project"
               img={Projectimg2}/></div>
            <div className='col-span-12'> <FeaturedProject
                title="Student Management"
                summary="Student Managementis a web-based application that enables students to
                view, purchase, and manage their course enrollments. It incorporates secure
                user authentication using JWT tokens, allows students to add and update their
                address details, and supports image uploads via multipart files. This project
                provides a seamless and secure user experience for managing educational
                pursuits. Technology - {Spring Boot (J2EE),ReactJs,Mysql}"
                 link="https://github.com/Prashantkhamitkar/StudentManagement"
               github="https://github.com/Prashantkhamitkar/StudentManagement"
               type="Featured Project"
               img={Studproject1}
               /></div>
            <div className='col-span-6 sm:col-span-12'><Project title="Home Page"
                link="https://github.com/Prashantkhamitkar/StudentManagement"
               github="https://github.com/Prashantkhamitkar/StudentManagement"
               type="Featured Project"
               img={Studproject2}/></div>
            <div className='col-span-6 sm:col-span-12'><Project title="Student Dashboard"
                link="https://github.com/Prashantkhamitkar/StudentManagement"
               github="https://github.com/Prashantkhamitkar/StudentManagement"
               type="Featured Project"
               img={Studproject3}/></div>
               
               <div className='col-span-12'> <FeaturedProject
                title="Charts Dashboard"
                summary="The Charts Dashboard is a data visualization tool that utilizes Chart.js and React to display key
                variables such as Intensity, Likelihood, Relevance, Year, Country, Topics, Region, and City. It includes
                multiple filters like End Year, Topics, Sector, Region, PEST, Source, SWOT, Country, and City,
                enabling focused analysis and exploration of data. Built with MySQL, Spring Boot, and React for a
                powerful backend, it empowers users to make informed decisions backed by insightful visualizations. Technology - {Spring Boot (J2EE),ReactJs,Mysql}"
                 link="https://github.com/Prashantkhamitkar/ChartApplication"
               github="https://github.com/Prashantkhamitkar/ChartApplication"
               type="Featured Project"
               img={chartproject1}
               /></div>
            <div className='col-span-6 sm:col-span-12'><Project title="Bar Charts Dashboard"
                link="https://github.com/Prashantkhamitkar/ChartApplication"
               github="https://github.com/Prashantkhamitkar/ChartApplication"
               type="Featured Project"
               img={chartproject1}/></div>
            <div className='col-span-6 sm:col-span-12'><Project title="Pie Charts Dashboard"
                link="https://github.com/Prashantkhamitkar/ChartApplication"
               github="https://github.com/Prashantkhamitkar/ChartApplication"
               type="Featured Project"
               img={chartproject2}/></div>
               <div className='col-span-12'> <FeaturedProject
                title="Retail management system"
                summary="Retail Management System is a comprehensive retail analytics platform designed to empower
                businesses in optimizing their advertising strategies and maximizing sales performance. Leveraging
                intuitive data visualizations including double bar charts, donut charts, and side bar charts, this
                application offers detailed insights into display advertisements, sponsored brand campaigns, and
                promotional activities across various retail channels. Technology - {NodeJs,AntDesign,ReactJs}"
                 link="https://github.com/Prashantkhamitkar/Retailoptimisation"
               github="https://github.com/Prashantkhamitkar/Retailoptimisation"
               type="Featured Project"
               img={retailproject}
               /></div>
                <div className='col-span-12'> <FeaturedProject
                title="Wonderlust Diaries"
                summary="Wonderlust Diaries is a full-stack microservices-based web application developed to create a vibrant
                vlogging community. The project utilizes Spring Boot for the backend, incorporating MySQL for data
                storage, and React for the frontend. The microservices architecture is implemented using Spring Eureka
                Server for service registry and Eureka clients.Technology - {Spring Boot (J2EE),ReactJs,Mysql}"
                 link="https://github.com/Prashantkhamitkar/Wonderlust-Diaries"
               github="https://github.com/Prashantkhamitkar/Wonderlust-Diaries"
               type="Featured Project"
               img={wonder1}
               /></div>
            <div className='col-span-6 sm:col-span-12'><Project title="Home Page"
                link="https://github.com/Prashantkhamitkar/Wonderlust-Diaries"
               github="https://github.com/Prashantkhamitkar/Wonderlust-Diaries"
               type="Featured Project"
               img={wonder2}/></div>
            <div className='col-span-6 sm:col-span-12'><Project title="User Registration"
                link="https://github.com/Prashantkhamitkar/Wonderlust-Diaries"
               github="https://github.com/Prashantkhamitkar/Wonderlust-Diaries"
               type="Featured Project"
               img={wonder3}/></div>
        </div>
        </Layout>

    </main>
    </>
  )
}

export default projects