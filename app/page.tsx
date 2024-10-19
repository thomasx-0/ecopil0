"use client"
import React from "react"
import {Footer} from "./components/footer";
import {Navbar} from "./components/nav";
import {Content} from "./components/content";
import {Fadein} from "./components/fadein";

export default function Home() {

    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-8 px-2 sm:px-4 lg:px-6p-20 gap-7 text-base font-[family-name:var(--font-geist-sans)]">
            <Navbar/>
            <Fadein>
               <Content />
            </Fadein>
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center gap-7">
               <Footer/>
            </div>
        </main>
    );
}
