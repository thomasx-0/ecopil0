import React, {useEffect, useState} from 'react';

export const TwitterEmbed: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        if (typeof window !== 'undefined' && window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = () => {
                setTheme(mediaQuery.matches ? 'dark' : 'light');
            };

            setTheme(mediaQuery.matches ? 'dark' : 'light');
            mediaQuery.addEventListener('change', handleChange);

            return () => {
                mediaQuery.removeEventListener('change', handleChange);
            };
        }
    }, []);

    return (
        <>
            <blockquote className="twitter-tweet" data-theme={theme}>
                <p lang="en" dir="ltr">
                    Understanding your <em>personal carbon footprint</em> is the first step towards reducing
                    environmental impact 🌍.
                    From transportation to food choices has an effect. Small changes can add to improving
                    sustainability!
                    <a href="https://twitter.com/hashtag/ClimateAction?src=hash&amp;ref_src=twsrc%5Etfw">#ClimateAction</a>
                    <a href="https://twitter.com/hashtag/CarbonFootprint?src=hash&amp;ref_src=twsrc%5Etfw">#CarbonFootprint</a>
                    <a href="https://twitter.com/hashtag/Sustainability?src=hash&amp;ref_src=twsrc%5Etfw">#Sustainability</a>
                    <a href="https://twitter.com/hashtag/GreenTech?src=hash&amp;ref_src=twsrc%5Etfw">#GreenTech</a>
                    <a href="https://t.co/JlgtyaABae">pic.twitter.com/JlgtyaABae</a>
                </p>
                &mdash; Thomas Pennant
                (<a
                href="https://twitter.com/pennant_th75216/status/1842254477039898687?ref_src=twsrc%5Etfw">@pennant_th75216</a>)
                <a href="https://twitter.com/pennant_th75216/status/1842254477039898687?ref_src=twsrc%5Etfw">October 4,
                    2024</a>
            </blockquote>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </>
    );
};
