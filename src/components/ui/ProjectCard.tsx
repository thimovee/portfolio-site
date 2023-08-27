"use client"
import Image from "next/image";
import { FC } from "react";
import { BsGithub } from "react-icons/bs";
import { ArrowUpRight, Globe2, X } from "lucide-react";
import Link from "next/link";
import * as Dialog from '@radix-ui/react-dialog';
interface ProjectCardProps {
    project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    const heightOptions = ["350px", "400px", "300px"];
    const randomHeight = heightOptions[Math.floor(Math.random() * heightOptions.length)];
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <div aria-label={`${project.title} ${project.description}`} className="border-2 border-neutral-600 bg-neutral-600 hover:bg-neutral-300 hover:border-neutral-400 duration-300 my-[6px] w-full box-border inline-block hover:cursor-pointer rounded-md relative group" style={{ height: randomHeight }}>
                    <Image className="absolute top-0 left-0 rounded-md object-cover !w-full !h-full" width={800} height={1000} src={project.imageUrl} alt={project.imageUrl} />
                    <div className="z-[49] absolute top-0 left-0 w-full h-full rounded-md bg-gradient-to-t via-black/50 xl:via-transparent from-neutral-900/60  group-hover:via-black/50 to-transparent" />
                    <div className="z-50 absolute w-full h-full rounded-md opacity-100 xl:opacity-0 xl:translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col ">
                        <div className="w-full h-40 px-6 mt-auto mb-6 sm:mb-0 flex flex-col">
                            <h3 className="font-bold text-2xl text-white">{project.title}</h3>
                            <p className="text-zinc-300 my-2 font-medium">{project.subtitle}</p>
                            <div>
                                {project.tags.slice(0, 5).map((technology, index) => (
                                    <span key={index} className="mr-2 mt-2 inline-flex items-center  px-2.5 py-1 rounded-full border-2 border-neutral-700 text-xs font-medium bg-neutral-800">
                                        {technology}
                                    </span>
                                ))}
                                {project.tags.length > 5 && (
                                    <span className="mr-2 mt-2 inline-flex items-center  px-2.5 py-1 rounded-full border-2 border-neutral-800 text-xs font-medium bg-neutral-700">
                                        +{project.tags.length - 5}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
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

    );
}

export default ProjectCard;
