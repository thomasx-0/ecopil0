import React, { useState } from "react";
import { Popup } from "@/app/components/popup";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);

    const showPopup = (): void => {
        setIsPopupVisible(true);
    };

    const hidePopup = (): void => {
        setIsPopupVisible(false);
    };

    return (
        <>
            {isPopupVisible && <Popup onClose={hidePopup} />}
            <footer className="fixed bottom-0 gap-y-15 left-0 z-20 w-full p-4 bg-white border-t border-zinc-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-zinc-900 dark:border-zinc-800 font-[family-name:var(--font-geist-sans)]">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          2024
        </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-zinc-500 dark:text-zinc-400 sm:mt-0 font-[family-name:var(--font-geist-sans)]">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">
                            About
                        </a>
                    </li>
                    <li>
                        <button onClick={showPopup} className="hover:underline">
                            Contact
                        </button>
                    </li>
                </ul>
            </footer>
        </>
    );
};