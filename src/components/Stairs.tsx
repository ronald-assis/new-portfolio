import { motion } from 'framer-motion'

const stairAnimation = {
  initial: {
    top: 0,
  },
  animate: {
    top: 100,
  },
  exit: {
    top: [100, 0],
  },
}

// Calculate the reverse index for staggered delay
const reverseIndex = (index: number) => {
  const TOTAL_STEPS = 6

  console.log(index, 'hello')
  return TOTAL_STEPS - index - 1
}

const newArray = [0, 1, 2, 3, 4, 5]

export function Stairs() {
  console.log(newArray)
  reverseIndex(9)
  return (
    <div>
      {[
        ...newArray.map((_e, i) => (
          <motion.div
            key={i}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              delay: reverseIndex(i) * 0.1,
            }}
            className="relative h-full w-full bg-primary-foreground"
          />
        )),
      ]}
    </div>
  )
}
