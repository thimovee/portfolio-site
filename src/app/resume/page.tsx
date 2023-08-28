import type { Metadata } from 'next'
import Heading from '@/components/ui/Heading'
import Paragraph from '@/components/ui/Paragraph'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Thimove | Resume',
    description: 'My personal resume.',
}
export default function Home() {
    return (
        <section className='container max-w-7xl mx-auto w-full flex justify-between items-center flex-col'>
            <div className="w-full mx-auto">
                <Heading className="mb-6 font-[900] text-left">Resume.</Heading>
                <Paragraph className="text-left mb-8" size="sm">Reach out to me via my <Link href="/contact" className="text-white font-semibold hover:underline cursor-pointer">contact page,</Link> view or <span className="text-white font-semibold hover:underline cursor-pointer">download</span>  my resume</Paragraph>
                <article className="w-full min-h-screen bg-neutral-800 mx-auto">
                    {/* */}
                </article>
            </div>
        </section>
    )
}