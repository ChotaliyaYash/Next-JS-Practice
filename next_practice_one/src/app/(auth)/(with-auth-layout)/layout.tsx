"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type AuthLayoutProps = {
    children: React.ReactNode
}

const AuthLayout = (props: AuthLayoutProps) => {

    const { children } = props

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/login', label: 'Login' },
        { href: '/register', label: 'Register' },
    ]

    const currentPath = usePathname();

    
    return (
        <>
            <div className='flex'>
                {
                    navLinks.map((link, index) => {
                        const isActive = currentPath.startsWith(link.href);
                        
                        return <Link href={link.href} key={index} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>{link.label}</Link>
                    })
                }
            </div>
            {children}
            <Link href={"/forgot-password"}>Forgot Password</Link>
        </>
    )
}

export default AuthLayout