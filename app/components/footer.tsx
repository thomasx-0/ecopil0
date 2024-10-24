import React, { useState } from "react";
import { Popup } from "./popup";
import Downloader from "./downloader";

interface FooterProps {}

export const Footer: React.FC<FooterProps>= () => {
    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);

    const showPopup = (): void => {
        setIsPopupVisible(true);
    };

    const hidePopup = (): void => {
        setIsPopupVisible(false);
    };
// FIXME: Popup does not display
  return (
      <>
            <footer>
                {isPopupVisible && <Popup onClose={hidePopup} />}
              <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="ml-4 flex justify-center gap-x-6 md:order-2">
                    <Downloader />
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-800">
                      <span className="sr-only">{item.name}</span>
                      <item.icon aria-hidden="true" className="h-6 w-6" onClick={showPopup}/>
                    </a>
                  ))}
                </div>
                <p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
                  &copy; 2024 Your Company, Inc. All rights reserved.
                </p>
              </div>
            </footer>
    </>
  )
}

const navigation = [
  {
    name: 'About',
    href: '#',
    icon: (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
      <button className={"mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0"}>
          About
      </button>
    ),
  }, {
    name: 'Contact',
    href: '#',
    icon: (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
      <button className={"mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0"}>
         Contact
      </button>
    ),},
]