import React, {useEffect, useState} from 'react';

export const TwitterEmbed: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

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

    // Before the theme is set, do not render the blockquote
    if (theme === null) {
        return null;
    }

    return (
        <>
            <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Plastic waste is choking our planet, fueled by
                rampant
                overconsumption. 🌍 We must shift to sustainable practices and reduce single-use plastics to protect
                ecosystems like
                the Amazon and our oceans. Every small step counts! ♻️💚 <a
                    href="https://twitter.com/hashtag/PlasticWaste?src=hash&amp;ref_src=twsrc%5Etfw">#PlasticWaste</a>
                <a
                    href="https://twitter.com/hashtag/Overconsumption?src=hash&amp;ref_src=twsrc%5Etfw">#Overconsumption</a>
                <a
                    href="https://twitter.com/hashtag/Sustainability?src=hash&amp;ref_src=twsrc%5Etfw">#Sustainability</a>
                <a
                    href="https://t.co/CHORRNZKBI">pic.twitter.com/CHORRNZKBI</a></p>&mdash; Thomas Pennant
                (@pennant_th75216) <a
                    href="https://twitter.com/pennant_th75216/status/1845123143955849327?ref_src=twsrc%5Etfw">October
                    12, 2024</a>
            </blockquote>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </>
    );
};