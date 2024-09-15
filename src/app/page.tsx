import AboutMe from '@/components/about-me'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Malgorzata Szynkarczuk',
  description:
    'Business development, marketing, and product management, automotive industry, electric vehicles, and renewable energy.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl bg-black/95 ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar
          banner={
            <div className="flex items-center gap-1 rounded-full bg-white/80 px-3 py-0.5 text-sm/6 font-medium text-black/80 data-[hover]:bg-gray-100">
              Open for work
            </div>
          }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-white sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Hi, I&apos;m Małgorzata.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-normal text-white/80 sm:text-2xl/8">
            Automotive Industry Leader with 20+ Years of Proven Success in
            International Markets. Results-oriented professional with an
            extensive track record of driving business growth, cultivating
            strategic partnerships, and increasing revenue through effective
            business development and sales channel optimization.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#about" className="border-white">
              See more
            </Button>
            <Button
              variant="secondary"
              className="bg-white/80 hover:text-white/80"
              href="/cv/my_cv.pdf"
              download="CV_Malgorzata_Szynkarczuk.pdf"
              target="_blank"
            >
              Download CV
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <AboutMe />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
