'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
    const router = useRouter()
    return (
        <nav className="fixed top-0 left-0 right-0 shadow-lg p-4 flex justify-between items-center bg-black z-20">
            <div className="flex items-center">
                <div className="text-white font-bold text-xl hover:text-slate-400">
                    <Link href="/">
                        Music App
                    </Link></div>
            </div>
            <div className="flex items-center space-x-4">
                <button  type="button" onClick={() => router.push('/auth/sign-in')} className=" md:block text-white bg-transparent border border-white px-4 py-2 rounded-md hover:text-slate-400">Sign In</button>
                <button type="button" onClick={() => router.push('/auth/sign-up')} className=" md:block text-white bg-transparent border border-white px-4 py-2 rounded-md hover:text-slate-400">Sign Up</button>
            </div>
        </nav>
    )
}
