import React, {useState} from 'react'

// import navigation data
import {navigation} from "../data";

// import icons
import {XIcon} from "@heroicons/react/outline";
import {MenuAlt3Icon} from "@heroicons/react/outline";

// import components
import Socials from "./Socials";

// import framer motion
import {motion} from 'framer-motion'

// import link
import {Link} from 'react-scroll'

const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    //framer motion variants
    const circleVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 180,
            transition: {
                type: 'spring',
                stiffness: 160,
                damping: 60,
            }
        }
    }

    const ultVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1
            }
        }
    }

    return (
        <nav className='relative'>
            {/*    meni icon    */}
            <div onClick={() => setIsOpen(true)} className='cursor-pointer text-white'>
                <MenuAlt3Icon className='w-8 h-8'/>
            </div>
            {/*    circle   */}
            <motion.div
                variants={circleVariants}
                initial='hidden'
                animate={isOpen ? 'visible' : 'hidden'}
                className='right-0 top-0 fixed bg-accent h-4 w-4 rounded-full'>
            </motion.div>

            {/*    menu     */}
            <motion.ul
                variants={ultVariants}
                initial='hidden'
                animate={isOpen ? 'visible' : 'hidden'}
                className={`${isOpen ? 'right-0' : '-right-full'} bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden top-0 fixed`}
            >
                {/*    clase icon       */}
                <div
                    onClick={()=>setIsOpen(false)}
                    className='cursor-pointer absolute top-8 right-8'>
                    <XIcon className='w-8 h-8' />
                </div>
                {
                    navigation.map((item, index)=>{
                        return <li key={index} className='mb-8' >
                            <Link to={item.name} smooth={true} duration={500} offset={-70} className='text-xl cursor-pointer capitalize'>{item.name}</Link>
                        </li>
                    })
                }
            </motion.ul>

        </nav>
    )
}

export default NavMobile;