import './style.css'
import {motion} from 'framer-motion';
import { useState } from 'react';

import React from 'react'

const PreviewData = () => {

const [isOpen, setIsOpen] = useState(false);
//const [userId, setUserId] = useState()


  return (
   <div className='Preview'>
       <motion.div transition={{layout:{duration: 1, type:"spring"}}} Layout onClick={() => setIsOpen(!isOpen)}className='card'>
           <motion.h2 Layout="position">Invitation</motion.h2>
           {isOpen && (
           <motion.div>
               <p>lorem </p>
               <p>lorem</p>
           </motion.div>
           )}
       </motion.div>
   </div>
   
  )
}

export default PreviewData