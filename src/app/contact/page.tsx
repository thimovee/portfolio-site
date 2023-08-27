import type { Metadata } from 'next'
import Heading from '@/components/ui/Heading'
import Paragraph from '@/components/ui/Paragraph'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ContactCards from '@/components/ContactCards'

export const metadata: Metadata = {
    title: 'Thimove | Contact',
    description: 'Reach out to me via email or social media.',
}

export default function Home() {
    return (
        <section className='pb-10 container max-w-7xl mx-auto w-full flex justify-between items-center flex-col'>
            <div className='flex flex-col gap-6 w-full mx-auto'>
                <Heading className="font-[900] text-left">Contact.</Heading>
                <Paragraph className="text-left max-w-fit" size="sm">Get in touch or shoot me an email directly at <Link href="mailto:thimove@gmail.com" className="font-bold text-white hover:cursor-pointer hover:underline hover:underline-offset-4">thimove@gmail.com</Link></Paragraph>
                <ContactCards />
                <Link className='group' href="/"><Paragraph className=" md:pb-0 flex hover:underline underline-offset-4 gap-2" size="sm"><ArrowLeft className='group-hover:-translate-x-1 transition-all' />Back to home</Paragraph></Link>
            </div>
        </section>
    )
}