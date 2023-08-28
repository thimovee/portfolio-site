import type { Metadata } from 'next'
import Heading from '@/components/ui/Heading'
import Link from 'next/link'
import { ArrowRight, Blocks, Code2, Database, Hammer, Sparkle } from 'lucide-react'
import FeaturedProjects from '@/components/FeaturedProjects'

export const metadata: Metadata = {
  title: 'Thimove | Home',
  description: 'Portfolio website to contact me, see my projects and more',
}

const frameworkTools = [
  { icon: <Blocks className='w-5 h-5' />, title: 'Frameworks', text: 'Next.js • React • Laravel • ASP.NET • Pandas' },
  { icon: <Hammer className='w-5 h-5' />, title: 'Tools', text: 'Jest • Postman • Cypress • Git • Prisma • Drizzle • Zustand • Redux' },
  { icon: <Sparkle className='w-5 h-5' />, title: 'Styling', text: 'TailwindCSS • Shadcn • RadixUI • Tremor' },
  { icon: <Database className='w-5 h-5' />, title: 'Databases', text: 'Planetscale • Redis • SQLite • Firebase • MongoDB' }
]

export default function Home() {
  return (
    <section className=' sm:px-8 md:px-20 lg:px-24 xl:px-28 2xl:px-0 container max-w-7xl mx-auto w-full flex justify-between items-center flex-col'>
      <div className='flex w-full flex-col lg:flex-row'>
        <div className="w-full  lg:px-0 lg:w-7/12 xl:1/2 justify-center">
          <Heading style={{ animationDelay: "0.15s", animationFillMode: "backwards" }} className="animate-fade-down mb-6 font-[900] text-left">hey, I&apos;m Thimo 👋</Heading>
          <p style={{ animationDelay: "0.25s", animationFillMode: "backwards" }} className='animate-fade-up max-w-2xl text-sm sm:text-base'>
            I&apos;m a 19-year-old fullstack web developer based in the Netherlands 🇳🇱. My passion lies in JavaScript and the latest technologies to create dynamic web projects.
            This website is my portfolio where you can find my <Link href="/resume" className='text-white font-bold hover:text-blue-400 duration-300'>resume</Link>, <Link href="/projects" className='text-white font-bold hover:text-blue-400 duration-300'> projects</Link>, a way to <Link href="/contact" className='text-white font-bold hover:text-blue-400 duration-300'>contact me</Link> and read my <Link href="/blog" className='text-white font-bold hover:text-blue-400 duration-300'>blog</Link>.
          </p>
          <div className='my-10'>
            <h2 style={{ animationDelay: "0.45s", animationFillMode: "backwards" }} className='animate-fade-right text-white font-semibold mb-1'>Programming Languages</h2>
            <p style={{ animationDelay: "0.6s", animationFillMode: "backwards" }} className='text-sm sm:text-base animate-fade-down flex gap-2 items-center'>
              <Code2 className='w-5 h-5' />
              <span className='sr-only'>Programming Languages</span>
              <span>Typescript • C# • Python • PHP • SQL • HTML, CSS & Javascript</span>
            </p>
          </div>
          <div>
            <h2 style={{ animationDelay: "0.8s", animationFillMode: "backwards" }} className='animate-fade-right text-white font-semibold mb-2'>Frameworks & Tools</h2>
            <div className='flex flex-col gap-4'>
              {frameworkTools.map((tool, index) => (
                <div style={{ animationDelay: `${0.95 + 0.15 * index}s`, animationFillMode: "backwards" }} key={tool.title} className='text-sm sm:text-base animate-fade-down flex gap-2 items-center'>
                  {tool.icon}
                  <span className='sr-only'>{tool.title}</span>
                  <p>{tool.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <FeaturedProjects />
      </div>
    </section>
  )
}
