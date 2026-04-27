"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

const developmentItems = [
    "Real-world project practice",
    "Front-End development",
    "Teamwork abilities",
    "Full-Stack direction",
]

const AboutPage = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const viewportRef = useRef<HTMLDivElement | null>(null)
    const trackRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia()

            gsap.fromTo(
                ".about-text",
                { y: 24, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.65,
                    stagger: 0.07,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    },
                }
            )

            mm.add("(min-width: 768px)", () => {
                const getScrollDistance = () => {
                    if (!trackRef.current || !viewportRef.current) return 0
                    return trackRef.current.scrollWidth - viewportRef.current.offsetWidth
                }

                gsap.fromTo(
                    sectionRef.current,
                    { scale: 0.92, borderRadius: "32px" },
                    {
                        scale: 1,
                        borderRadius: "0px",
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top bottom",
                            end: "top top",
                            scrub: 1,
                        },
                    }
                )

                gsap.to(trackRef.current, {
                    x: () => -getScrollDistance(),
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: () => `+=${getScrollDistance()}`,
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                })
            })

            return () => mm.revert()
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="about"
            ref={sectionRef}
            className="relative left-1/2 min-h-screen w-screen -translate-x-1/2 overflow-hidden bg-background"
        >
            <div ref={viewportRef} className="w-screen overflow-hidden md:h-screen">
                <div
                    ref={trackRef}
                    className="flex w-full flex-col will-change-transform md:h-screen md:w-max md:flex-row"
                >
                    <div className="grid min-h-screen w-screen grid-cols-1 items-center gap-8 px-4 py-16 sm:px-6 md:h-screen md:min-w-screen md:grid-cols-2 md:gap-10 md:px-12 md:py-0 lg:px-16 xl:px-24">
                        <div className="about-text relative flex min-h-80 w-full max-w-145 items-center justify-center justify-self-center rounded-2xl border bg-zinc-950 text-white shadow-xl sm:min-h-[360px] md:max-w-[620px] lg:max-w-[680px]">
                            <div className="absolute left-5 top-5 flex gap-2">
                                <span className="size-3 rounded-full bg-red-400" />
                                <span className="size-3 rounded-full bg-yellow-400" />
                                <span className="size-3 rounded-full bg-emerald-400" />
                            </div>

                            <div className="w-[90%] overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4 font-mono text-[10px] leading-6 sm:text-sm md:text-[13px] lg:text-sm [&_p]:whitespace-nowrap">
                                <p className="text-emerald-300">const dataUser = [</p>
                                <p className="pl-4 text-white/80">{"{"}</p>
                                <p className="pl-8 text-blue-400">
                                    username: "Truong Cong Non",
                                </p>
                                <p className="pl-8 text-white/80">
                                    role: "Front-End Developer",
                                </p>
                                <p className="pl-8 text-white/80">
                                    stack: "ReactJS / Next.js / TypeScript",
                                </p>
                                <p className="pl-8 text-white/80">
                                    goal: "Front-End Internship",
                                </p>
                                <p className="pl-8 text-white/80">
                                    mindset: "Learning by building"
                                </p>
                                <p className="pl-4 text-white/80">{"}"}</p>
                                <p className="text-emerald-300">]</p>
                            </div>
                        </div>

                        <div className="max-w-2xl space-y-4 sm:space-y-5">
                            <h1 className="about-text text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                                Building a strong Front-End foundation.
                            </h1>

                            <p className="about-text text-sm leading-7 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-emerald-500 sm:text-base md:text-lg md:leading-8">
                                As a graduate in Information Technology from the University of
                                Education, University of Danang, I am looking for a Front-End
                                internship opportunity to apply the knowledge I have gained in
                                real-world projects, enhance my development skills, and gain
                                valuable experience in a professional work environment.
                            </p>

                            <p className="about-text text-sm leading-7 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-emerald-500 sm:text-base md:text-lg md:leading-8">
                                Within the next year, I aim to become a professional developer
                                with a strong technical foundation, teamwork abilities, and a
                                solid grounding in Front-End development, with plans to advance
                                to Full-Stack development.
                            </p>
                        </div>
                    </div>

                    <div className="grid min-h-screen w-screen grid-cols-1 items-center gap-8 px-4 py-16 sm:px-6 md:h-screen md:min-w-screen md:grid-cols-2 md:gap-10 md:px-12 md:py-0 lg:px-16 xl:px-24">
                        <div className="max-w-2xl space-y-5">
                            <h2 className="about-text text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                                Educational Background
                            </h2>

                            <Card className="about-text transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500">
                                <CardContent className="space-y-3 p-5 sm:p-6">
                                    <h3 className="text-lg font-semibold transition-colors duration-300 hover:text-emerald-500 sm:text-xl md:text-2xl">
                                        Bachelor&apos;s Degree in Information Technology
                                    </h3>

                                    <p className="text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-emerald-500 sm:text-base">
                                        University of Science and Education - The University of Da
                                        Nang
                                    </p>

                                    <Badge variant="secondary">2021 - 2025</Badge>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="about-text grid grid-cols-1 gap-3">
                            {developmentItems.map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-4 rounded-lg border px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-500 sm:px-5 sm:py-4"
                                >
                                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white sm:size-9">
                                        {index + 1}
                                    </span>
                                    <p className="text-sm font-medium sm:text-base">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage
