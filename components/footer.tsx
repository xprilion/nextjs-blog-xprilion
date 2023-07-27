import NextLink from "next/link";

export default function Footer() {
return (
    <div className={"horizontal-spread"} style={{width: "100%"}}>
        <div>&copy; Anubhav Singh</div>
        <div><NextLink href={"/sitemap.xml"}>Sitemap</NextLink></div>
    </div>
)
    }