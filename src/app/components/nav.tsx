'use client';

import Link from 'next/link'
import React from "react";


const navItems = {
    '/': {
        name: 'home',
    },
    '/dashboard': {
        name: 'dashboard',
    },
    'https://studio.tailwindui.com/': {
        name: 'studio preview',
    },
}

interface DownloadButtonProps {
    fileUrl: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileUrl }) => {
    return (
        <div className="flex items-center">
            <button
                className="rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => window.location.href = fileUrl}
            >
                File Download
            </button>
        </div>
    );
};

export default DownloadButton;

export function Navbar() {
    return (
        <aside className="-ml-[8px] mb-16 tracking-tight">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                    id="nav"
                >
                    <div className="flex flex-row space-x-0 pr-10">
                        {Object.entries(navItems).map(([path, {name}]) => {
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                                >
                                    {name}
                                </Link>
                            )
                        })}
                        <DownloadButton fileUrl="https://github.com/tailwindlabs/tailwindcss/releases/download/v2.0.2/tailwindcss-v2.0.2.zip" />
                    </div>
                </nav>
            </div>
        </aside>
    )
}
