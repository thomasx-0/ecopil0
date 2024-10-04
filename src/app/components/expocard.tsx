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
        <div className="card bg-base-100 w-96 shadow-xl dark:bg-zinc-900">
            <figure>
                <picture>
                    <source srcSet={imageSrcDark} media="(prefers-color-scheme: dark)" />
                    <source srcSet={imageSrcLight} media="(prefers-color-scheme: light)" />
                    <Image
                        src={imageSrcLight}
                        width={384}
                        height={322}
                        alt={altText}
                    />
                </picture>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        NEW
                    </div>
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