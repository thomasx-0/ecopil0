"use client"
import React from "react"
import {Footer} from "@/app/components/footer";
import { Navbar } from "@/app/components/nav";
import { TwitterEmbed } from "@/app/components/xpost";


export default function Home() {

    return (
        <main className="flex min-h-screen flex-col justify-around p-20 gap-7 font-sans text-base">
            <Navbar />
            <div className="flex flex-row justify-around p-20 gap-7 font-sans">
               <TwitterEmbed />
            </div>
           <Footer />
        </main>
    );
}
