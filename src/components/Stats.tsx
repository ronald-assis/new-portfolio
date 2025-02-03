'use client'

import CountUp from 'react-countup'

const stats = [
  {
    num: 12,
    text: 'Anos de experiência',
  },
  {
    num: 26,
    text: 'Projetos concluídos',
  },
  {
    num: 8,
    text: 'Tecnologias dominadas',
  },
  {
    num: 500,
    text: 'códigos comitados',
  },
]

export function Stats() {
  return (
    <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {stats.map((stat, i) => {
            return (
              <div
                key={i}
                className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-4xl font-extrabold xl:text-6xl"
                />
                <p
                  className={`${stat.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
