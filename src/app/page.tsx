import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

import { Social } from '@/components/Social'
import { Photo } from '@/components/Photo'

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-xl">Software Development</span>
            <h1 className="h1 mb-6">
              Hello I&#39;m <br />{' '}
              <span className="text-primary">Ronald Assis</span>
            </h1>
            <p className="mb-9 max-w-lg text-white/80">
              Eu me destaco em criar experiências digitais elegantes e sou
              proficiente em várias linguagens de programação e tecnologias.
            </p>

            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                variant="outline"
                className="flex items-center gap-2 uppercase"
                size="lg"
              >
                <span>Download CV</span>
                <FiDownload />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-primary rounded-full flex items-center justify-center text-primary text-base hover:bg-primary hover:text-background hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}
