"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { skills } from "@/lib/data"

gsap.registerPlugin(ScrollTrigger)

const SkillsPage = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null)

    const groupedSkills = skills.reduce<Record<string, typeof skills>>(
        (groups, skill) => {
            if (!groups[skill.type]) {
                groups[skill.type] = []
            }

            groups[skill.type].push(skill)
            return groups
        },
        {}
    )

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".skills-heading",
                { y: 32, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            )

            gsap.fromTo(
                ".skill-group",
                { y: 36, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".skills-grid",
                        start: "top 80%",
                    },
                }
            )

            gsap.fromTo(
                ".skill-box",
                { y: 28, opacity: 0, scale: 0.96 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.04,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".skills-grid",
                        start: "top 80%",
                    },
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="relative min-h-screen px-4 py-20 md:px-10"
        >
            <div className="mx-auto max-w-6xl space-y-10">
                <div className="skills-heading max-w-2xl space-y-3 opacity-0">
                    <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                        Technical Skills
                    </h1>

                    <p className="text-base leading-7 text-muted-foreground">
                        Technologies and tools I use to build responsive, modern, and
                        user-friendly web applications.
                    </p>
                </div>

                <div className="skills-grid grid gap-6 lg:grid-cols-2">
                    {Object.entries(groupedSkills).map(([type, items]) => (
                        <div
                            key={type}
                            className="skill-group space-y-4 rounded-xl  border-border/70 bg-card/40 p-5 opacity-0 shadow-sm backdrop-blur-md"
                        >
                            <div className="flex items-center gap-3">
                                <h2 className="text-xl font-semibold">{type}</h2>
                            </div>

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {items.map((skill) => (
                                    <Card
                                        key={skill.name}
                                        className="skill-box group border-border/70 bg-background/70 opacity-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:bg-primary/5 hover:shadow-lg"
                                    >
                                        <CardContent className="flex min-h-20 items-center justify-center p-4 text-center">
                                            <h3 className="text-base font-semibold leading-tight transition group-hover:text-primary">
                                                {skill.name}
                                            </h3>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsPage
