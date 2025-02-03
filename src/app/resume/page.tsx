'use client'

import { FaHtml5, FaCss3, FaJs, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import { motion } from 'framer-motion'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const about = {
  title: 'About Me',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  info: [
    {
      fieldName: 'Nome',
      fieldValue: 'Ronald Assis',
    },
    {
      fieldName: 'Tel.',
      fieldValue: '+55 11 9 97848-3897',
    },
    {
      fieldName: 'Experiência',
      fieldValue: '+3 anos',
    },
    {
      fieldName: 'Email',
      fieldValue: 'ronaldassis71@gmail.com',
    },
    {
      fieldName: 'GitHub/GitLab',
      fieldValue: 'ronald-assis',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Disponível',
    },
    {
      fieldName: 'Idiomas',
      fieldValue: 'Português, Inglês',
    },
  ],
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Experiência',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  items: [
    {
      company: 'Redmaxx',
      position: 'Desenvolvedor Fullstack',
      duration: '2021 - Atual',
    },
  ],
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Formação acadêmica',
  description: 'Formação acadêmica',
  items: [
    {
      institution: 'Univercidade Estácio',
      degree: 'Ciência da Computação',
      duration: '2024 - Atual',
    },
    {
      institution: 'Trybe',
      degree: 'Desenvolvimento de Software - Fullstack',
      duration: '2020 - 2021',
    },
    {
      institution: 'ASIMOV',
      degree: 'Introdução à Inteligência Artificial',
      duration: '1.5 horas',
    },
    {
      institution: 'Rockeseat',
      degree: 'DevOps',
      duration: '5 horas',
    },
  ],
}

const skills = {
  title: 'Habilidades',
  description: 'Habilidades técnicas',
  items: [
    {
      skill: 'HTML',
      icon: <FaHtml5 />,
    },
    {
      skill: 'CSS',
      icon: <FaCss3 />,
    },
    {
      skill: 'JavaScript',
      icon: <FaJs />,
    },
    {
      skill: 'Figma',
      icon: <FaFigma />,
    },
    {
      skill: 'Node.js',
      icon: <FaNodeJs />,
    },
    {
      skill: 'Tailwind CSS',
      icon: <SiTailwindcss />,
    },
    {
      skill: 'Next.js',
      icon: <SiNextdotjs />,
    },
  ],
}

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: 'easeIn' },
      }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vw] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                  <span className="text-primary">.</span>
                </h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {experience.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#262626] px-10 py-6 lg:items-start"
                      >
                        <span className="text-white/60">{item.duration}</span>
                        <h3 className="text-xl font-bold">{item.company}</h3>
                        <div>
                          <span></span>
                          <p className="text-white/60">{item.position}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              Sobre
            </TabsContent>
            <TabsContent value="education" className="w-full">
              Formação
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              Habilidades
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}
