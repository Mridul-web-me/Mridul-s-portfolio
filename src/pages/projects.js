import AnimatedText from'../components/AnimatedText'
import {GithubIcon} from'../components/Icons'
import Layout from '../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import project from '../../public/images/projects/project.png'
import project1 from '../../public/images/projects/project1.png'
import project2 from '../../public/images/projects/project2.png'
import project3 from '../../public/images/projects/project3.png'
import project4 from '../../public/images/projects/project4.png'
import project5 from '../../public/images/projects/project5.png'
import project6 from '../../public/images/projects/project6.png'
import project7 from '../../public/images/projects/project7.png'
import project8 from '../../public/images/projects/project8.png'
import project9 from '../../public/images/projects/project9.png'
import project10 from '../../public/images/projects/project10.png'
import project11 from '../../public/images/projects/project11.png'
import project12 from '../../public/images/projects/project12.png'
import project13 from '../../public/images/projects/project13.png'
import project14 from '../../public/images/projects/project14.png'
import project15 from '../../public/images/projects/project15.png'
import project16 from '../../public/images/projects/project16.png'
import project17 from '../../public/images/projects/project17.png'
import project18 from '../../public/images/projects/project18.png'
import project19 from '../../public/images/projects/project19.png'
import project20 from '../../public/images/projects/project20.png'
import project21 from '../../public/images/projects/project21.png'
import project22 from '../../public/images/projects/project22.png'
import project23 from '../../public/images/projects/project23.png'
import project24 from '../../public/images/projects/project25.png'
import project25 from '../../public/images/projects/project26.png'


import Image from 'next/image'
import { motion } from 'framer-motion'
import TransitionEffect from '../components/TransitionEffect'


const FramerImage = motion(Image)

const FeatureProject = ({
    type,
    title,
    summary,
    img,
    link,
    github
}) => {
    return (
        <article
            className='w-full felx items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] '/>
                     
            <Link
                href={link}
                target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full '>
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority 
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw, 
          50vw
          "
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className=' text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
                    {type}
                </span>
                <Link
                    href={link}
                    target='_blank'
                    className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center '>
                    <Link href={github} target='_blank' className='w-10 '>
                        <GithubIcon/>
                    </Link>
                    <Link
                        href={github}
                        target='_blank'
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light dark:border-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] '/>
            <Link
                href={link}
                target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg  '>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority 
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw, 
          50vw
          "
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className=' text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>
                    {type}
                </span>
                <Link
                    href={link}
                    target='_blank'
                    className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between '>
                <Link
                        href={link}
                        target='_blank'
                        className='text-lg font-semibold underline md:text-base'>
                        Visit
                    </Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6'>
                        <GithubIcon/>
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return ( 
    
    <> 
    <Head>
        <title>Mridul | Projects page</title>
        <meta name="description" content="any description"/>
    </Head> 
    <TransitionEffect/>
    < main className = 'w-full mb-16 flex flex-col items-center justify-center dark:text-light' > <Layout className='pt-16'>
        <AnimatedText text='Imagination Trumps Knowledge!' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl '/>

        <div className='grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>

                {/* <FeatureProject
                    title="Crypto Screener Application"
                    summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                local currency. React Portfolio Website
                A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                page transitions, cool background effects, unique design and it is mobile responsive."
                    link="/"
                    type="Feature Project"
                    img={project1}
                    github='/'/> */}

            </div>
            <div className='col-span-6 sm:col-span-12'>
                <Project
                title="Twitter Clone"
                link="https://papaya-choux-c5e592.netlify.app/"
                type="Project 1"
                img={project}
                github='https://github.com/Mridul-web-me/twitter-clone'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Portfolio Website"
                link="https://dazzling-boyd-cebdcc.netlify.app/"
                type="Project 2"
                img={project1}
                github='https://github.com/Mridul-web-me/tuhins-portfolio'
                />
            </div>

            {/* <div className='col-span-12'>
            <FeatureProject
                    title="Crypto Screener Application"
                    summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                local currency. React Portfolio Website
                A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth
                page transitions, cool background effects, unique design and it is mobile responsive."
                    link="/"
                    type="Feature Project"
                    img={project1}
                    github='/'/>
            </div> */}
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Travel Agency Website"
                link="https://ghuraghuri-web.netlify.app/"
                type="Project 3"
                img={project2}
                github='https://github.com/Mridul-web-me/ghuraghuri-client-side'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Bike Showroom Website"
                link="https://bike-mike.netlify.app"
                type="Project 4"
                img={project3}
                github='https://github.com/Mridul-web-me/bike-mike-client-side'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Portfolio Website"
                link="https://mridul-web.netlify.app/"
                type="Project 5"
                img={project4}
                github='https://github.com/Mridul-web-me/Bolby-portfolio'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Microlab"
                link="https://microlab-a152a.web.app/"
                type="Project 6"
                img={project25}
                github='https://github.com/Mridul-web-me/micro-lab'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="BR Artchitect"
                link="https://mridul-web-me.github.io/HTML-CSS-Website/"
                type="Project 7"
                img={project5}
                github='https://github.com/Mridul-web-me/HTML-CSS-Website'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Realstate Website"
                link="https://mridul-web-me.github.io/myrealstate/"
                type="Project 8"
                img={project6}
                github='https://github.com/Mridul-web-me/myrealstate'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Mridul's Portfolio"
                link="https://mridul-web-me.github.io/portfolio-1/"
                type="Project 9"
                img={project7}
                github='https://github.com/Mridul-web-me/portfolio-1'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="The Modernist"
                link="https://mridul-web-me.github.io/Modernist"
                type="Project 10"
                img={project8}
                github='https://github.com/Mridul-web-me/Modernist'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="UTOPIC FLOWERS"
                link="https://mridul-web-me.github.io/utopic/"
                type="Project 11"
                img={project9}
                github='https://github.com/Mridul-web-me/utopic'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Darkdelight"
                link="https://mridul-web-me.github.io/darkdelight-/"
                type="Project 12"
                img={project10}
                github='https://github.com/Mridul-web-me/darkdelight-'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Quize App"
                link="https://mridul-web-me.github.io/quiz-app/"
                type="Project 13"
                img={project12}
                github='https://github.com/Mridul-web-me/quiz-app'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Fashion Store"
                link="https://epic-roentgen-996f90.netlify.app/"
                type="Project 14"
                img={project13}
                github='https://github.com/Mridul-web-me/Online-store'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Apple Mac"
                link="https://dazzling-agnesi-8096df.netlify.app/"
                type="Project 15"
                img={project14}
                github='https://github.com/Mridul-web-me/apple-mac'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="HONDA CBR 150"
                link="https://practical-gates-af97c6.netlify.app/"
                type="Project 16"
                img={project15}
                github='https://github.com/Mridul-web-me/honda-cbr'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Calculator"
                link="https://mridul-web-me.github.io/calculator/"
                type="Project 17"
                img={project16}
                github='https://github.com/Mridul-web-me/calculator'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Pin Matcher"
                link="https://mridul-web-me.github.io/pin-matcher-master/"
                type="Project 18"
                img={project17}
                github='https://github.com/Mridul-web-me/pin-matcher-master'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Food Network"
                link="https://mridul-web-me.github.io/food-network/"
                type="Project 19"
                img={project18}
                github='https://github.com/Mridul-web-me/food-network'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Education"
                link="https://mridul-web-me.github.io/Education/"
                type="Project 20"
                img={project19}
                github='https://github.com/Mridul-web-me/Education'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Developer Community"
                link="https://keen-kare-119dfb.netlify.app/"
                type="Project 21"
                img={project20}
                github='https://github.com/Mridul-web-me/developer-community'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Baper Bank"
                link="https://mridul-web-me.github.io/Baap-er-bank/"
                type="Project 22"
                img={project21}
                github='https://github.com/Mridul-web-me/Baap-er-bank'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Arsha-Practice"
                link="https://mridul-web-me.github.io/Arsha-Practice/"
                type="Project 23"
                img={project22}
                github='https://github.com/Mridul-web-me/Arsha-Practice'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Football"
                link="https://mridul-web-me.github.io/Football/"
                type="Project 24"
                img={project23}
                github='https://github.com/Mridul-web-me/Football'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Burger House"
                link="https://mridul-web-me.github.io/Burger-House/"
                type="Project 25"
                img={project24}
                github='https://github.com/Mridul-web-me/Burger-House'
                />
            </div>
            <div className='col-span-6 sm:col-span-12'>
            <Project
                title="Management Studies Association"
                link="https://bu-mgt.netlify.app/"
                type="Project 26"
                img={project11}
                github='https://github.com/Mridul-web-me/MGT'
                />
            </div>
        </div>

    </Layout> 
    </main>
   </ >)
}

export default projects