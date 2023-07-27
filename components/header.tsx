"use client";

import {roboto_serif} from "@/app/fonts";
import {useTheme} from "@/components/theme-provider";
import {FiMoon, FiSun} from "react-icons/fi";
import NextLink from "next/link";

export default function Header() {

    const { theme, setTheme } = useTheme();

    return (
        <nav style={{width: "100%", marginBottom: "1rem"}}>
            <ul>
                <li><NextLink href={"/"}><h1 className={roboto_serif.className} style={{ fontWeight: "normal", fontSize: "x-large", margin: 0}}>xprilion&apos;s blog</h1></NextLink></li>
            </ul>
            <ul>
                <li><NextLink href="/posts">Posts</NextLink></li>&middot;
                <li><NextLink href="/talks">Talks</NextLink></li>&middot;
                <li><NextLink href="/publications">Publications</NextLink></li>&middot;
                <li onClick={(e) => {
                    e.preventDefault();
                    if(theme === "light"){
                        setTheme("dark")
                    } else if (theme === "dark") {
                        setTheme("light")
                    }
                }}>{ theme === "dark" ? <FiSun />
                    : <FiMoon />}</li>
            </ul>
        </nav>
    )
}