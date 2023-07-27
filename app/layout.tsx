"use client";

import '@/styles/globals.css'
import '@picocss/pico'
import Header from "@/components/header";
import {roboto_serif} from "@/app/fonts";
import { ThemeProvider, ThemeContext } from "@/components/theme-provider";
import Footer from "@/components/footer";
import 'highlight.js/styles/github.css';
import Head from "next/head";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider>
            <ThemeContext.Consumer>
                {(theme) => {
                    return (
                        <>
                            <html lang="en" data-theme={theme?.theme}>
                            <head>
                                <title>
                                    Anubhav Singh | xprilion&apos;s blog
                                </title>
                                <link rel="icon" href={"/favicon.ico"} />
                                <link rel="shortcut icon" type="image/x-icon" href={"/favicon.ico"} />
                                <link rel="apple-touch-icon" sizes="180x180" href={"/logo.png"} />
                                <meta name="theme-color" content="#7b46f6" />

                                <meta charSet="utf-8" />
                                <meta name="viewport" content="width=device-width, initial-scale=1" />

                                <meta itemProp="name" content="linkborg" />
                                <meta itemProp="description" content={"Hey, I'm Anubhav Singh. I love building software, mixing stacks and making memes."} />
                                <meta itemProp="image" content={"/logo.png"} />
                                <meta name="description" content={"linkborg"} />
                                <meta property="og:title" content={"linkborg"} />
                                <meta property="og:description" content={"linkborg"} />
                                <meta property="og:image" content={"/logo.png"}/>
                                <meta property="og:type" content="website" />

                                <meta name="twitter:card" content="summary_large_image" />
                                <meta name="twitter:site" content="@xprilion" />
                                <meta name="twitter:creator" content="@xprilion" />
                                <meta name="twitter:title" content={"linkborg"} />
                                <meta name="twitter:description" content={"linkborg"} />
                                <meta name="twitter:image" content={"/logo.png"} />
                            </head>
                            <body className={roboto_serif.className}>
                            <main className="container" style={{minHeight: "100vh", width: "100vw"}}>
                                <Header />
                                <hr className={"hr-full"} />
                                <div className={"content-container"}>
                                    {children}
                                </div>
                                <hr className={"hr-full"} />
                                <Footer />
                            </main>
                            </body>
                            </html>
                        </>
                    )
                }}
            </ThemeContext.Consumer>
        </ThemeProvider>
    )
}
