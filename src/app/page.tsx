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
        <main className="flex min-h-screen flex-col justify-around p-20 gap-7">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                  git clone https://github.com/thomasx-0/eco-tracker.git
              </p>
              <div>
                  <a
                      className="pointer-events-none place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                      href="https://github.com/thomasx-0"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      By thomasx-0
                  </a>
              </div>
          </div>
            <div className="flex flex-row justify-around flex-wrap gap-x-7">
                <div className="card bg-base-100 w-96 shadow-xl dark:bg-gray-800">
                    <figure>
                        <Image
                            src="/eco-tracker.webp"
                            width={384}
                            height={322}
                            alt="Ecological poster"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Eco Tracker Application
                            <div
                                className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">NEW</div>
                        </h2>
                        <p>Eco-tracker application to help calculate your carbon footprint. Start by using the slider
                            below. You will be rewarded with a digital badge for your progress.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Ecology</div>
                        </div>
                    </div>
                </div>
            </div>
            {isLoginPopupVisible && <PopupLogin onClose={hideLoginPopup}/>}
            {isPopupVisible && <PopupHelp onClose={hidePopup}/>}
            <footer
                className="fixed bottom-0 gap-y-15 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> 2024
                    </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
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
