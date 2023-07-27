import Image from 'next/image'

export default function BioSection() {
    return (
        <>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", padding: "1.5rem 0"}}>
                <Image width={50} height={50} src={"https://github.com/xprilion.png"}  alt={"profile-pic"} className={"profile-pic"}/>
                <div>
                    <p>Hey, I&apos;m Anubhav Singh. I love building software, mixing stacks and making memes.</p>
                    <p>Co-founder @ Dynopii  & Google Dev Expert in GCP.</p>
                    <p>Twitter · GitHub · LinkedIn · Instagram</p>
                </div>
            </div>
            <hr className={"hr-full"} />
            <div style={{padding: "1rem"}}>
                <p>I lead the volunteer team at GDG Cloud Kolkata.</p>
                <p>I established DSC NSEC and Winter of Code.</p>
                <p>I run a support channel for GSoC aspirants at FossFlow since 2020.</p>
            </div>
        </>
    )
}