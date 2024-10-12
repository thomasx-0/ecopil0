"use client"
import React from "react"
import {Footer} from "@/app/components/footer";
import { Navbar } from "@/app/components/nav";
import { TwitterEmbed } from "@/app/components/xpost";
import {Blur} from "@/app/components/blur";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col justify-around p-20 gap-7 text-base font-[family-name:var(--font-geist-sans)]">
            <Navbar/>
            <div className={"flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center p-10 gap-7 font-sans text-4xl"}>
                <h1> Reduce and Reuse </h1>
            </div>
            <div
                className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center p-10 gap-7 font-sans">
                <TwitterEmbed/>
            </div>
            <Footer/>
            <Blur />
        </main>
    );
}
