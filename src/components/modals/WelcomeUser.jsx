import React from 'react'
import { useAuthStore } from '../../store/useAuthStore'
import {motion} from 'framer-motion'

export default function WelcomeUser() {
    const {user} = useAuthStore();
    const variants = {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
      };

      
  return (
    <motion.div 
  
    className='w-screen h-screen bg-black bg-opacity-80 grid place-items-center z-50'>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        className='bg-black text-white z-50 w-[500px] h-[200px] grid place-items-center rounded-2xl'>
                <h2 className='text-2xl text-center font-medium'>Welcome Back!<br />  Dear "{user?.email}"</h2>
        </motion.div>
    </motion.div>
  )
}