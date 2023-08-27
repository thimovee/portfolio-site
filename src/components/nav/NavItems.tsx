"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion";
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';
const NavItems = () => {
    const pathname = usePathname();
    return (
        <div className='hidden md:flex gap-4'>
            <Link href='/resume' className={`hover:rounded-full ${buttonVariants({ variant: 'nav' })}`}>
                Resume
                {pathname === '/resume' && (
                    <motion.span
                        layoutId="bubble"
                        className="absolute inset-0 z-10 bg-white mix-blend-difference"
                        style={{ borderRadius: 9999 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
            </Link>
            <Link href='/projects' className={`hover:rounded-full ${buttonVariants({ variant: 'nav' })}`}>
                Projects
                {pathname === '/projects' && (
                    <motion.span
                        layoutId="bubble"
                        className="absolute inset-0 z-10 bg-white mix-blend-difference"
                        style={{ borderRadius: 9999 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
            </Link>
            <Link href='/blog' className={`hover:rounded-full ${buttonVariants({ variant: 'nav' })}`}>
                Blog
                {pathname === '/blog' && (
                    <motion.span
                        layoutId="bubble"
                        className="absolute inset-0 z-10 bg-white mix-blend-difference"
                        style={{ borderRadius: 9999 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
            </Link>
            <Link href='/contact' className={`${buttonVariants({ variant: 'nav' })}`}>
                Contact
                {pathname === '/contact' && (
                    <motion.span
                        layoutId="bubble"
                        className="absolute inset-0 z-10 bg-white mix-blend-exclusion"
                        style={{ borderRadius: 9999 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
            </Link>
        </div>
    )
}

export default NavItems