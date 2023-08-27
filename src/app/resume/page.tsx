import type { Metadata } from 'next'
import Heading from '@/components/ui/Heading'

export const metadata: Metadata = {
    title: 'Thimove | Resume',
    description: 'My personal resume.',
}
export default function Home() {
    return (
        <section className='container max-w-7xl mx-auto w-full flex justify-between items-center flex-col'>
            <div className="w-full mx-auto">
                <Heading className="mb-6 font-[900] text-left">Resume.</Heading>
                <div />
            </div>
        </section>
    )
}