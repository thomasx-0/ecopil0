"use client"
import React from "react"
import {Expocard} from "@/app/components/expocard";
import {Footer} from "@/app/components/footer";


export default function Home() {

    return (
        <main className="flex min-h-screen flex-col justify-around p-20 gap-7 font-sans text-sm">
            <Expocard />
           <Footer />
        </main>
    );
}
