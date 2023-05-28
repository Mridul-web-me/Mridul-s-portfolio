import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink,time, address, work}) =>{
   
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%] '>
            <LiIcon reference={ref} />
           
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 0.5, type: 'spring'}}
            >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}&nbsp; 
                <a href={companyLink} 
                target='_blank' 
                className='text-primary capitalize dark:text-primaryDark'>
                @{company}
                </a> 
                </h3>
            <span 
            className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} |  {address}
            </span>
            <p className='font-medium w-full md:text-sm'>{work}</p>
            </motion.div>
        </li>
    )
}


const Experience = () => {
    const ref = useRef(null); 
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center center "]
        }
    )

  return (
    <div className='my-64'>
        <h2 className='font-semibold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full '>
           
            <motion.div
            style={{scaleY: scrollYProgress }}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]  '/>

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2 '>
               <Details
                position='Web Developer' 
                company='NexyOxy'
                companyLink="https://www.nextoxy.com/"
                time="Jan 2023-Feb 2023" 
                address="1st floor, Aziz super market, Lalon Shah Rd, Kushtia, Bangladesh"
                work="Worked on a team responsible for developing new features for clients, 
                including improving the accuracy and relevance of search results and 
                developing new tools for web development and visualization."
               />
               <Details
              position='Freelancer' company='Fiverr'
              companyLink="https://www.fiverr.com/mridulislam23?up_rollout=true"
               time="2020-Present" address="fiverr.com"
               work="Worked on a team responsible for developing new features for clients, 
               including improving the accuracy and relevance of search results and 
               developing new tools for web development and visualization."
               />
               <Details
              position='Freelancer' company='Upwork'
              companyLink="https://www.upwork.com/freelancers/~016afea256c5f63751"
               time="2022-Present" address="upwork.com"
               work="Worked on a team responsible for developing new features for clients, 
               including improving the accuracy and relevance of search results and 
               developing new tools for web development and visualization."
               />
            </ul>
        </div>
    </div>
  )
}

export default Experience