'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import photo from '@/public/assets/photo.png'

export function Photo() {
  return (
    <div className="relative h-full w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 2, ease: 'easeIn' },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2, ease: 'easeInOut' },
          }}
          className="absolute h-[298px] w-[298px] mix-blend-lighten xl:h-[498px] xl:w-[498px]"
        >
          <Image
            src={photo}
            alt="Foto de Ronald Assis"
            priority
            quality={100}
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.svg
          className="h-[300px] w-[300px] xl:h-[506px] xl:w-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#f43f5e"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}
