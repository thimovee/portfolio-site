"use client"
import { FC } from 'react';
import Projects from '@/lib/projects';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub } from "react-icons/bs";
import { ArrowUpRight, Globe2, X } from "lucide-react";
import * as Dialog from '@radix-ui/react-dialog';
interface FeaturedProjectsProps {

}

const FeaturedProjects: FC<FeaturedProjectsProps> = () => {
    return (
        <div style={{ animationDelay: `1s`, animationFillMode: "backwards" }} className='animate-fade-up w-full   mt-16 pb-8 xl:mt-0 max-w-fit mx-auto lg:flex-col sm:grid hidden grid-cols-4  lg:grid-cols-1 gap-3 my-auto'>
            {Projects.projects.map((project) => (
                <div key={project.title}>
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <div key={project.title} className='hover:cursor-pointer relative border-2 border-neutral-800 hover:border-white duration-300 ease-in-out h-32 w-32 rounded-md mx-auto'>
                                <Image alt={project.title} src={project.imageUrl} fill objectFit='cover' className='rounded-md' />
                            </div>
                        </Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Overlay className="bg-zinc-900/95 z-[200] data-[state=open]:animate-overlayShow fixed inset-0" />
                            <Dialog.Content className="border-2 border-neutral-800 z-[201] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%]  w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-900 p-[25px] focus:outline-none">
                                <Dialog.Title className="text-white  text-lg font-semibold">
                                    {project.title}
                                </Dialog.Title>
                                <span className=" text-slate-200">{project.subtitle}</span>
                                <Image src={project.imageUrl} alt={project.title} width={800} height={450} className="border border-neutral-700 my-6 rounded-[6px] object-cover" />
                                <h3 className="font-semibold text-white">About</h3>
                                <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                                    <span className="mt-3 text-slate-200 font-light">{project.description}</span>
                                </Dialog.Description>
                                <div className="flex flex-col gap-1 mt-8">
                                    <h3 className="font-semibold text-white">Technologies</h3>
                                    <div>
                                        {project.tags.map((technology, index) => (
                                            <span key={index} className="mr-2 mt-2 inline-flex items-center  px-2.5 py-1 rounded-full border-2 border-neutral-700 text-xs font-medium bg-neutral-800">
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-full grid grid-cols-2 gap-2 mt-16">
                                    <Link target="_blank" className="group font-semibold flex gap-3 items-center bg-neutral-200 hover:bg-neutral-100 py-2 px-4 rounded-md text-zinc-800 duration-300 ease-in-out hover:text-black leading-7 text-sm" href={project.liveUrl}>
                                        <Globe2 className="w-5 h-5" />
                                        <span>Website</span>
                                        <ArrowUpRight className="ml-auto w-4 h-4 group-hover:rotate-45 duration-300 ease-in-out" />
                                    </Link>
                                    <Link target="_blank" className="group font-semibold duration-300 ease-in-out hover:text-white hover:bg-neutral-700 flex gap-3 items-center text-zinc-200 py-2 px-4 rounded-md bg-neutral-800 leading-7 text-sm" href={project.githubUrl}>
                                        <BsGithub className="w-5 h-5" />
                                        <span>Github</span>
                                        <ArrowUpRight className="ml-auto w-4 h-4 group-hover:rotate-45 duration-300 ease-in-out" />
                                    </Link>
                                </div>
                                <Dialog.Close asChild>
                                    <button
                                        className="absolute top-[25px] right-[25px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full "
                                        aria-label="Close"
                                    >
                                        <X />
                                    </button>
                                </Dialog.Close>
                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>
                </div>
            ))}
            <Link href="/projects" style={{ animationDelay: "1.2s", animationFillMode: "backwards" }} className='p-1 animate-fade-right flex gap-1 mx-auto items-center text-sm group hover:text-white '>View all projects<ArrowRight className='group-hover:-rotate-45 duration-200 w-4 h-4' /></Link>
        </div>
    );
}

export default FeaturedProjects;
