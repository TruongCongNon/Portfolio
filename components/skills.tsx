"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { skills } from "@/lib/data"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useMemo, useRef, useState } from "react"
gsap.registerPlugin(ScrollTrigger)



const SkillsPage = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const [values, setValues] = useState(() => skills.map(() => 0))
    const [averageValue, setAverageValue] = useState(0)

    const stats = useMemo(() => {
        const average = Math.round(
            skills.reduce((total, skill) => total + skill.percent, 0) / skills.length
        )

        const strongest = skills.reduce((best, skill) =>
            skill.percent > best.percent ? skill : best
        )

        return {
            average,
            strongest,
            total: skills.length,
        }
    }, [])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".skills-heading", {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            })

            gsap.fromTo(
                ".skill-card",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.65,
                    stagger: 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    },
                }
            )

            gsap.fromTo(
                ".skill-row",
                { x: -20, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.04,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 65%",
                    },
                }
            )

            const progress = { value: 0 }

            gsap.to(progress, {
                value: 1,
                duration: 1.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 65%",
                    once: true,
                },
                onUpdate: () => {
                    setValues(
                        skills.map((skill) => Math.round(skill.percent * progress.value))
                    )

                    setAverageValue(Math.round(stats.average * progress.value))
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [stats.average])

    return (
        <section ref={sectionRef} className="min-h-screen px-4 py-20 md:px-10">
            <div className="mx-auto max-w-6xl space-y-8">
                <div className="skills-heading translate-y-8 space-y-3 opacity-0">
                    <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                        Technical Skills
                    </h1>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <Card className="skill-card">
                        <CardHeader>
                            <CardTitle className="text-sm text-muted-foreground">
                                Average
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-3xl font-bold tabular-nums">
                            {averageValue}%
                        </CardContent>
                    </Card>

                    <Card className="skill-card">
                        <CardHeader>
                            <CardTitle className="text-sm text-muted-foreground">
                                Strongest Skill
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-3xl font-bold">
                            {stats.strongest.name}
                        </CardContent>
                    </Card>

                    <Card className="skill-card">
                        <CardHeader>
                            <CardTitle className=" text-sm text-muted-foreground">
                                Total Skills
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-3xl font-bold">
                            {stats.total}
                        </CardContent>
                    </Card>
                </div>

                <Card className="skill-card">
                    <CardHeader>
                        <CardTitle>Skill Overview</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <div className="max-h-130 overflow-auto rounded-md border">
                            <Table>
                                <TableHeader className="sticky top-0 z-10 bg-background">
                                    <TableRow>
                                        <TableHead className="w-55">Skill</TableHead>
                                        <TableHead className="w-40">Type</TableHead>
                                        <TableHead>Progress</TableHead>
                                        <TableHead className="w-22.5 text-right">
                                            Level
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {skills.map((skill, index) => (
                                        <TableRow key={skill.name} className="skill-row opacity-0">
                                            <TableCell className="font-medium">
                                                {skill.name}
                                            </TableCell>

                                            <TableCell>
                                                <Badge variant="outline">{skill.type}</Badge>
                                            </TableCell>

                                            <TableCell>
                                                <Slider
                                                    value={[values[index]]}
                                                    max={100}
                                                    step={1}
                                                    className="pointer-events-none"
                                                />
                                            </TableCell>

                                            <TableCell className="text-right font-semibold tabular-nums">
                                                {values[index]}%
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default SkillsPage
