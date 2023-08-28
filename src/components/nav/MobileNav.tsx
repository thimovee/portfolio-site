'use client'
import { AlignJustify, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { usePathname } from 'next/navigation'
const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    useEffect(() => {
        if (isOpen) { document.body.classList.add('stop-scroll') }
        else { document.body.classList.remove('stop-scroll') }
    }, [isOpen])


    return (
        <div className="md:hidden flex">
            <Button onClick={() => setIsOpen(!isOpen)} className="z-[101] hover:bg-transparent transition-all" variant="ghost">
                {isOpen ? <X className="w-7 h-7 text-zinc-200" /> : <AlignJustify className="w-7 h-7 text-zinc-200" />}
            </Button>
            {isOpen && <div className="inset-0 absolute top-0 left-0 w-[100dvw] h-screen">
                <div className={`fixed top-0 left-0 w-full h-screen bg-zinc-950 overflow-auto px-8 pt-48 ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col w-full">
                        <a style={{ animationDelay: `0.15s`, animationFillMode: "backwards" }} href="/resume" className={" animate-fade-down px-4 py-8 border-b " + (pathname.startsWith("/resume") ? 'border-white text-white' : 'border-zinc-600 text-slate-200')}>
                            Resume
                        </a>
                        <a style={{ animationDelay: `0.25s`, animationFillMode: "backwards" }} href="/projects" className={"animate-fade-down px-4 py-8 border-b " + (pathname.startsWith("/projects") ? 'border-white text-white' : 'border-zinc-600 text-slate-200')}>
                            Projects
                        </a>
                        <a style={{ animationDelay: `0.35s`, animationFillMode: "backwards" }} href="/blog" className={"animate-fade-down px-4 py-8 border-b " + (pathname.startsWith("/blog") ? 'border-white text-white' : 'border-zinc-600 text-slate-200')}>
                            Blog
                        </a>
                        <a style={{ animationDelay: `0.45s`, animationFillMode: "backwards" }} href="/contact" className={"animate-fade-down px-4 py-8 border-b " + (pathname.startsWith("/contact") ? 'border-white text-white' : 'border-zinc-600 text-slate-200')}>
                            Contact
                        </a>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default MobileNav;