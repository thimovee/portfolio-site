import type { Metadata } from 'next'
import Heading from '@/components/ui/Heading'
import Posts from '@/components/BlogPosts'

export const metadata: Metadata = {
    title: 'Thimove | Blog',
    description: 'Blog where I write about my projects and skills.',
}
export default function Home() {
    return (
        <section className='container max-w-7xl mx-auto w-full flex justify-between items-center flex-col'>
            <div className="w-full mx-auto">
                <Heading className="mb-6 font-[900] text-left">Blog.</Heading>
                <Posts />
            </div>
        </section>
    )
}