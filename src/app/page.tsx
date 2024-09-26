"use client"
import React, {useState} from "react"
import {PopupHelp} from "@/app/components/PopupHelp";
import {PopupLogin} from "@/app/components/PopupLogin";
import {LoginButton} from "@/app/components/LoginButton";
import {ServiceCard} from "@/app/components/ServiceCard";


export default function Home() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // TODO: Remove the login popup feature, keep hook and link with Google cloud
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
            <LoginButton />
            <ServiceCard />
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
