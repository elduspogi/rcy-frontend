import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

export const isScrolled = (height) => {
    const [ scrolled, setScrolled ] = useState(false);

    const handleScroll = () => {
        window.scrollY > height ? setScrolled(true) : setScrolled(false);
    }

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrolled;
}

export const goToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
}