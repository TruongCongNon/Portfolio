"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

import { Button } from "@/components/ui/button"
import { Download, HatGlassesIcon } from "lucide-react"

export default function MainPage() {
    const mainRef = useRef<HTMLElement>(null)
    const nameRef = useRef<HTMLHeadingElement>(null)

    const description =
        "Focused on developing skills in building modern, user-friendly, and intuitive web interfaces."

    const techWords = [
        "ReactJS",
        "Next.js",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Tailwind",
        "Shadcn UI",
        "GSAP",
        "Node.js",
        "NestJS",
        "React Hook Form"
    ]

    useLayoutEffect(() => {
        let interval: number | undefined

        const ctx = gsap.context(() => {
            gsap.to(".tech-track-left", {
                xPercent: -50,
                duration: 100,
                ease: "none",
                repeat: -1,
            })

            gsap.to(".tech-track-right", {
                xPercent: 50,
                duration: 100,
                ease: "none",
                repeat: -1,
            })

            const titles = ["Truong Cong Non", "Front-end Developer", "Web Developer"]
            let index = 0

            const switchTitle = () => {
                if (!nameRef.current) return

                const titleTl = gsap.timeline({
                    defaults: {
                        ease: "power2.inOut",
                    },
                })

                titleTl
                    .to(nameRef.current, {
                        y: -10,
                        autoAlpha: 0,
                        duration: 0.55,
                    })
                    .call(() => {
                        index = (index + 1) % titles.length

                        if (nameRef.current) {
                            nameRef.current.textContent = titles[index]
                        }
                    })
                    .fromTo(
                        nameRef.current,
                        {
                            y: 10,
                            autoAlpha: 0,
                        },
                        {
                            y: 0,
                            autoAlpha: 1,
                            duration: 0.65,
                        }
                    )
            }

            const tl = gsap.timeline({
                defaults: { ease: "power3.out" },
                onComplete: () => {
                    interval = window.setInterval(switchTitle, 2800)
                },
            })

            tl.fromTo(
                ".hero-text",
                { y: 40, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.15 }
            ).fromTo(
                ".hero-action",
                { y: 24, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.12 },
                "-=0.25"
            )
        }, mainRef)

        return () => {
            if (interval) window.clearInterval(interval)
            ctx.revert()
        }
    }, [])

    return (
        <main
            ref={mainRef}
            className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 md:px-6"
        >
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 w-[180vw] -translate-x-1/5 -translate-y-1/2 rotate-[-24deg]">
                    <div className="tech-track-left flex w-max gap-8 whitespace-nowrap text-4xl font-bold uppercase text-foreground/4 sm:text-5xl md:text-7xl">
                        {[...techWords, ...techWords, ...techWords, ...techWords].map(
                            (word, index) => (
                                <span key={`left-${word}-${index}`}>{word}</span>
                            )
                        )}
                    </div>
                </div>

                <div className="absolute left-1/2 top-1/2 w-[180vw] -translate-x-1/2 -translate-y-1/2 rotate-24">
                    <div className="tech-track-right flex w-max -translate-x-1/2 gap-8 whitespace-nowrap text-4xl font-bold uppercase text-emerald-500/6 sm:text-5xl md:text-7xl">
                        {[...techWords, ...techWords, ...techWords, ...techWords].map(
                            (word, index) => (
                                <span key={`right-${word}-${index}`}>{word}</span>
                            )
                        )}
                    </div>
                </div>
            </div>

            <section className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
                <div className="hero-float">
                    <p className="hero-text invisible mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground opacity-0">
                        Hello, I&apos;m
                    </p>

                    <h1
                        ref={nameRef}
                        className="hero-text invisible min-h-[1.15em] whitespace-nowrap text-center text-[clamp(2.4rem,9vw,5.5rem)] font-bold leading-none tracking-tight text-foreground opacity-0"
                    >
                        Truong Cong Non
                    </h1>

                    <p className="hero-text invisible mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground opacity-0 md:text-lg">
                        {description.split(" ").map((word, index, words) => (
                            <span
                                key={`${word}-${index}`}
                                className="inline-block cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:text-emerald-400"
                            >
                                {word}
                                {index < words.length - 1 ? "\u00A0" : ""}
                            </span>
                        ))}
                    </p>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                    <Button
                        asChild
                        size="lg"
                        variant="ghost"
                        className="hero-action invisible rounded-full bg-foreground px-6 text-background opacity-0 hover:bg-foreground/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
                    >
                        <a href="/cv.pdf" download>
                            <Download className="mr-2 h-4 w-4" />
                            Download CV
                        </a>
                    </Button>

                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="hero-action invisible rounded-full border-border bg-background px-6 text-foreground opacity-0 hover:bg-accent hover:text-accent-foreground"
                    >
                        <a
                            href="https://github.com/your-github"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <HatGlassesIcon className="mr-2 h-4 w-4" />
                            GitHub
                        </a>
                    </Button>
                </div>
            </section>
        </main>
    )
}
