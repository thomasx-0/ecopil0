import React from 'react';
import Image from "next/image";

type CardProps = {
    title: string;
    description: string;
    imageSrcLight: string;
    imageSrcDark: string;
    badgeText: string;
    altText: string;
};

const Card: React.FC<CardProps> = ({ title, description, imageSrcLight, imageSrcDark, badgeText, altText }) => {
    return (
        <div className=" w-96 h-auto overflow-hidden rounded-lg bg-white dark:bg-zinc-900 shadow">
            <figure>
                <picture>
                    <source srcSet={imageSrcDark} media="(prefers-color-scheme: dark)"/>
                    <source srcSet={imageSrcLight} media="(prefers-color-scheme: light)"/>
                    <Image
                        src={imageSrcLight}
                        width={384}
                        height={322}
                        alt={altText}
                    />
                </picture>
            </figure>
            <div className="px-5 py-7">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{badgeText}</div>
                </div>
            </div>
        </div>
    );
};

export const Expocard: React.FC = () => {
    const cardProps: CardProps = {
        title: 'Ecopil: Rewards based Eco-tracker',
        description: `Eco-tracker application to help calculate your carbon footprint. Start by using the
                        slider below. You will be rewarded with a digital badge for your progress.`,
        imageSrcLight: '/eco-tracker.webp',
        imageSrcDark: '/Eco-tracker-dark.webp',
        badgeText: 'Ecology',
        altText: 'Ecological poster'
    };

    return (
        <div className="flex flex-row justify-around flex-wrap gap-x-7">
            <Card {...cardProps} />
        </div>
    );
};