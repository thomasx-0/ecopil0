import React from 'react';

interface PopupPropsLogin {
  onClose: () => void;
}

export const PopupLogin: React.FC<PopupPropsLogin> = ({ onClose }) => {
    return (
        <>
            <section
                className="fixed gap-x-1 flex items-start text-left justify-between w-96 p-4 mx-auto bg-white border border-zinc-200 shadow-md dark:bg-zinc-800 left-12 bottom-24 dark:shadow-zinc-900 shadow-zinc-100 md:gap-x-4 dark:border-zinc-700 rounded-2xl">
                    <form className="w-full">
                        <div className="mb-10 space-y-3">
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="email">Email</label>
                                    <input
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="email" placeholder="mail@example.com" name="email"/>
                                </div>
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="email">Password</label>
                                    <input
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="password" placeholder="Password" name="password"/>
                                </div>
                                <button
                                    className="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 dark:bg-zinc-950 dark:hover:bg-zinc-850 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                    type="submit">Login
                                </button>
                        </div>
                    </form>
                <div className="text-left"> No account? <a className="text-blue-500" href="/signup">Create
                    one</a></div>
                <button
                    onClick={onClose}
                    className="flex items-center justify-center text-zinc-700 transition-colors duration-300 rounded-full shrink-0 dark:text-zinc-200 dark:hover:bg-zinc-700 w-7 h-7 focus:outline-none hover:bg-zinc-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                         className="w-5 h-5">
                        <path
                            d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
                    </svg>
                </button>
            </section>
        </>
    );
};