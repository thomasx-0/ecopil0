import React from 'react';

export const LoginButton = () => {
    return (
        <>
        <div className="z-10 max-w-5xl w-full items-center justify-between gap-y-5 text-sm font-mono lg:flex">
            <div className="flex flex-col w-full max-w-xs">
                <button
                    className="bg-black flex items-center font-sans rounded-full text-white dark:text-black justify-center gap-x-3  text-sm sm:text-base  dark:bg-white dark:border-zinc-900 dark:hover:bg-zinc-300 hover:bg-zinc-800 duration-300 transition-colors border px-8 py-2.5">
                    <p>Sign in with Google</p>
                </button>
            </div>
            <div>
                <a
                    className="pointer-events-none place-items-baseline p-8 lg:pointer-events-auto lg:p-0"
                    href="https://github.com/thomasx-0"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    By thomasx-0
                </a>
            </div>
        </div>
        </>

    )
}