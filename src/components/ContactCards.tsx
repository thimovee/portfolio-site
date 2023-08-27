"use client"
import React, { useEffect } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
const Links = [
    { platform: 'Github', username: 'thimovee', url: 'https://github.com/thimovee', icon: Github },
    { platform: 'LinkedIn', username: 'thimove', url: '#', icon: Linkedin },
    { platform: 'Mail', username: 'thimove@gmail.com', url: 'mailto:thimove@gmail.com', icon: Mail },
]

const ContactCards = () => {
    useEffect(() => {
        const cards = Array.from(document.getElementsByClassName("cardEffect"));
        for (const card of cards) {
            (card as HTMLElement).onmousemove = e => {
                const rect = (card as HTMLElement).getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;
                (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
                (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
            };
        }
    }, []);
    return (
        <div id="cards" className="overflow-hidden bg-none grid w-full grid-cols-1 gap-8 mx-auto my-4 sm:mt-0 sm:grid-cols-2 md:grid-cols-3 lg:gap-4">
            {Links.map((link, index) => (
                <div style={{ animationDelay: `${0.15 * index}s`, animationFillMode: "backwards" }} id="card" key={link.platform} className={`animate-fade-right relative overflow-hidden before:blur-[100px]  before:absolute before:w-[150%] before:h-[150%] cardEffect bg-inherit bg-opacity-20 rounded-xl before:top-0 before:left-0 md:col-auto ${index === Links.length - 1 ? 'sm:col-span-2' : ''}`}>
                    <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-300/50 border-zinc-700 ">
                        <Link target="_blank" className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16" href={link.url}>
                            <span className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent" aria-hidden="true"></span>
                            <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                <link.icon className='w-5 h-5' />
                                <span className="sr-only">{link.platform}</span>
                            </span>
                            <div className="z-10 flex flex-col items-center">
                                <span className="text-xl font-medium duration-150 lg:text-xl  group-hoper:text-black text-zinc-200 group-hover:text-white font-display">{link.username}</span>
                                <span className="mt-4 text-sm text-center duration-1000 hover:text-neutral-600 text-zinc-400 group-hover:text-zinc-200">{link.platform}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactCards