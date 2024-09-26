import React from 'react';
import Image from "next/image";

export const ServiceCard = () => {
    return (
        <>
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
        </div>
        </>
    )
}