import type { Metadata } from 'next'
import Heading from '@/components/ui/Heading'
import Projects from '@/lib/projects'
import ProjectCard from '@/components/ui/ProjectCard'
export const metadata: Metadata = {
    title: 'Thimove | Projects',
    description: 'List of projects I have worked on.',
}
export default function Home() {
    return (
        <section className='pb-32 container max-w-7xl mx-auto w-full flex justify-between items-center flex-col'>
            <div className="w-full mx-auto">
                <Heading className="mb-11 font-[900] text-left">Projects.</Heading>
                <div style={{ animationDelay: "0.15s", animationFillMode: "backwards" }} className='animate-fade-up w-full lg:columns-2 columns-1 gap-4'>
                    {Projects.projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}