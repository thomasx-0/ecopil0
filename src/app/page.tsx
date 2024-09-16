"use client"
import Image from "next/image"
import React, {useState} from "react"
import {PopupHelp} from "@/app/PopupHelp";
import {PopupLogin} from "@/app/PopupLogin";


export default function Home() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false);

    const showLoginPopup = () => {
        setIsLoginPopupVisible(true);
    };

    const hideLoginPopup = () => {
        setIsLoginPopupVisible(false);
    };

    const showPopup = () => {
        setIsPopupVisible(true);
    };

    const hidePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <main className="flex min-h-screen flex-col justify-around p-20 gap-7 font-sans text-sm">
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
            <div className="flex flex-row justify-around flex-wrap gap-x-7">
                <div className="card bg-base-100 w-96 shadow-xl dark:bg-zinc-900">
                    <figure>
                        <picture>
                            <source srcSet="/Eco-tracker-dark.webp" media="(prefers-color-scheme: dark)"/>
                            <source srcSet="/eco-tracker.webp"
                                    media="(prefers-color-scheme: light)"/>
                            <Image
                                src="/eco-tracker.webp"
                                width={384}
                                height={322}
                                alt="Ecological poster"/>
                        </picture>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Ecopil: Rewards based Eco-tracker
                            <div
                                className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">NEW</div>
                        </h2>
                        <p>Eco-tracker application to help calculate your carbon footprint. Start by using the
                            slider
                            below. You will be rewarded with a digital badge for your progress.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Ecology</div>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto rounded-lg">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-900">
                            <th></th>
                            <th>Item per Year</th>
                            <th>Current</th>
                            <th>Improvement Indicator</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Hours of Flight time</td>
                            <td><input type="text"
                                       aria-describedby="helper-text-explanation"
                                       className="rounded-lg font-mono bg-white border-x-0 border-zinc-300 h-11 text-center text-black focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-black dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="00" required/>
                            </td>
                            <td>-</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hours of Commute Time</td>
                            <td><input type="text"
                                       aria-describedby="helper-text-explanation"
                                       className="rounded-lg font-mono bg-white border-x-0 border-zinc-300 h-11 text-center text-black focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-black dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="00" required/>
                            </td>
                            <td>-</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Number of Garbage Bags</td>
                            <td><input type="text"
                                       aria-describedby="helper-text-explanation"
                                       className="rounded-lg font-mono bg-white border-x-0 border-zinc-300 h-11 text-center text-black focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-black dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="00" required/>
                            </td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {isLoginPopupVisible && <PopupLogin onClose={hideLoginPopup}/>}
            {isPopupVisible && <PopupHelp onClose={hidePopup}/>}
            <footer
                className="fixed bottom-0 gap-y-15 left-0 z-20 w-full p-4 bg-white border-t border-zinc-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-zinc-900 dark:border-zinc-800">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> 2024
                    </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-zinc-500 dark:text-zinc-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <button onClick={showLoginPopup} className="hover:underline me-4 md:me-6">Login</button>
            </li>
            <li>
                            <button onClick={showPopup} className="hover:underline">Contact</button>
                        </li>
                    </ul>
                </footer>
        </main>
);
}
