import { motion } from 'framer-motion'

const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
}

// Calculate the reverse index for staggered delay
const reverseIndex = (totalSteps: number, index: number) => {
  return totalSteps - index - 1
}

export function Stairs() {
  const TOTAL_STEPS = 6
  return (
    <>
      {[...Array(TOTAL_STEPS)].map((_e, i) => (
        <motion.div
          key={i}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(TOTAL_STEPS, i) * 0.1,
          }}
          className="relative h-full w-full bg-primary"
        />
      ))}
    </>
  )
}
