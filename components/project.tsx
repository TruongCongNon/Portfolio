"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog"
import { projects, type Project } from "@/lib/data"
import { Code2Icon, Eye, X } from "lucide-react"
import { Button } from "./ui/button"
gsap.registerPlugin(ScrollTrigger)



const rainDrops = [
    { left: "3%", top: "8%", width: 16, height: 44 },
    { left: "14%", top: "42%", width: 12, height: 58 },
    { left: "28%", top: "16%", width: 18, height: 64 },
    { left: "40%", top: "35%", width: 10, height: 30 },
    { left: "56%", top: "78%", width: 14, height: 46 },
    { left: "68%", top: "10%", width: 11, height: 34 },
    { left: "80%", top: "68%", width: 18, height: 80 },
    { left: "90%", top: "18%", width: 16, height: 42 },
    { left: "96%", top: "56%", width: 22, height: 62 },
    { left: "73%", top: "84%", width: 15, height: 54 },
]

const dropColors = [
    "linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(var(--muted-foreground)) 100%)",
    "linear-gradient(180deg, hsl(var(--accent-foreground)) 0%, hsl(var(--primary)) 100%)",
    "linear-gradient(180deg, hsl(var(--secondary-foreground)) 0%, hsl(var(--muted-foreground)) 100%)",
]



const ProjectPage = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const [previewProject, setPreviewProject] = useState<Project | null>(null)
    const [detailProject, setDetailProject] = useState<Project | null>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".project-card")
            const heading = gsap.utils.toArray<HTMLElement>(".project-heading")[0]

            const getOutsideX = (index: number) =>
                index % 2 === 0 ? -260 : 260

            gsap.set(heading, {
                x: -260,
                opacity: 0,
            })

            gsap.set(cards, {
                x: (index: number) => getOutsideX(index),
                opacity: 0,
            })

            const animateIn = () => {
                gsap.to(heading, {
                    x: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: "power4.out",
                    overwrite: "auto",
                })

                gsap.to(cards, {
                    x: 0,
                    opacity: 1,
                    duration: 1.6,
                    stagger: 0.22,
                    ease: "power4.out",
                    overwrite: "auto",
                })
            }

            const animateOut = () => {
                gsap.to(heading, {
                    x: -260,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.inOut",
                    overwrite: "auto",
                })

                gsap.to(cards, {
                    x: (index: number) => getOutsideX(index),
                    opacity: 0,
                    duration: 1.2,
                    stagger: 0.12,
                    ease: "power3.inOut",
                    overwrite: "auto",
                })
            }

            ScrollTrigger.create({
                trigger: ".project-list",
                start: "top 80%",
                end: "bottom 15%",
                onEnter: animateIn,
                onLeave: animateOut,
                onEnterBack: animateIn,
                onLeaveBack: animateOut,
            })

            gsap.to(".rain-drop", {
                height: (_index: number, target: Element) =>
                    Number((target as HTMLElement).dataset.longHeight),
                y: 260,
                opacity: 0.35,
                ease: "none",
                stagger: 0.05,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    end: "bottom top",
                    scrub: 1,
                },
            })

            gsap.to(".rain-drop", {
                yPercent: 18,
                repeat: -1,
                yoyo: true,
                duration: 2.6,
                ease: "sine.inOut",
                stagger: 0.12,
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative left-1/2 min-h-screen w-screen -translate-x-1/2 overflow-hidden bg-background px-4 py-20 text-foreground sm:px-6 md:px-10"
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {rainDrops.map((drop, index) => (
                    <span
                        key={index}
                        data-long-height={drop.height + 140}
                        className="rain-drop absolute rounded-full opacity-25 blur-[0.2px]"
                        style={{
                            left: drop.left,
                            top: drop.top,
                            width: drop.width,
                            height: drop.height,
                            background: dropColors[index % dropColors.length],
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="project-heading mx-auto mb-16 max-w-6xl space-y-5 opacity-0">
                    <h1 className="text-left text-3xl font-bold tracking-tight md:text-5xl">
                        Project completed
                    </h1>
                </div>

                <div className="project-list mx-auto flex max-w-6xl flex-wrap justify-center gap-6 pb-10">
                    {projects.map((project) => (
                        <Card
                            key={project.title}
                            className="project-card flex min-h-70 w-full max-w-92.5 flex-col border-border/70 bg-card/80 text-card-foreground opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/70 hover:shadow-xl sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]"
                        >
                            <CardHeader className="space-y-4">
                                <Badge variant="secondary" className="w-fit">
                                    {project.category}
                                </Badge>

                                <button
                                    type="button"
                                    onClick={() => setPreviewProject(project)}
                                    className="group overflow-hidden rounded-lg border bg-muted"
                                    aria-label={`Open preview for ${project.title}`}
                                >
                                    <Image
                                        className="aspect-video w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                        src={project.image}
                                        alt={project.title}
                                    />
                                </button>

                                <CardTitle className="text-2xl">
                                    {project.title}
                                </CardTitle>

                                <div className="text-sm flex space-x-4 font-medium text-muted-foreground">
                                    <p>{project.time}</p>
                                    <span className={project.status ? "text-green-300" : "text-yellow-500"}>
                                        {project.status ? "Successfully" : "In development"}
                                    </span>
                                </div>

                                <CardDescription className="text-base leading-7">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="flex-1">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((item) => (
                                        <Badge
                                            key={item}
                                            variant="outline"
                                            className="border-primary/40 text-primary"
                                        >
                                            {item}

                                        </Badge>

                                    ))}
                                    <span className={project.status ? "text-green-300" : "text-yellow-500"}>
                                        {project.status ? "" : "In development"}
                                    </span>
                                </div>
                            </CardContent>

                            <CardContent className="mt-auto flex gap-3 pt-2">
                                <Button
                                    type="button"
                                    onClick={() => setDetailProject(project)}
                                    className="h-10 flex-1 gap-2 rounded-lg bg-primary text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                                >
                                    <Eye className="size-4" />
                                    Xem chi tiết
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="h-10 flex-1 gap-2 rounded-lg border-primary/40 bg-background/60 transition hover:-translate-y-0.5 hover:border-primary hover:bg-primary/10"
                                >
                                    <a href={project.codeUrl ?? "#"} target="_blank">
                                        <Code2Icon className="size-4" />
                                        Code
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <Dialog
                open={Boolean(detailProject)}
                onOpenChange={(open) => !open && setDetailProject(null)}
            >
                <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-card p-0 text-card-foreground shadow-2xl sm:max-w-3xl">
                    {detailProject && (
                        <div>
                            <div className="relative aspect-video overflow-hidden rounded-t-lg bg-muted">
                                <Image
                                    src={detailProject.image}
                                    alt={`${detailProject.title} detail`}
                                    className="h-full w-full object-cover"
                                    priority
                                />
                            </div>

                            <div className="space-y-6 p-6">
                                <div className="space-y-3">
                                    <Badge variant="secondary" className="w-fit">
                                        {detailProject.category}
                                    </Badge>

                                    <DialogTitle className="text-2xl font-bold md:text-3xl">
                                        {detailProject.title}
                                    </DialogTitle>

                                    <div className="text-sm flex space-x-4 font-medium text-muted-foreground">
                                        <p>{detailProject.time}</p>
                                        <span className={detailProject.status ? "text-green-300" : "text-yellow-500"}>
                                            {detailProject.status ? "Successfully" : "In development"}
                                        </span>
                                    </div>

                                    <DialogDescription asChild>
                                        <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground">
                                            {detailProject.detail.map((item: any) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </DialogDescription>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                        Tech list
                                    </h3>

                                    <div className="flex flex-wrap gap-2">
                                        {detailProject.tech.map((item: any) => (
                                            <Badge
                                                key={item}
                                                variant="outline"
                                                className="border-primary/40 px-3 py-1 text-primary"
                                            >
                                                {item}
                                            </Badge>

                                        ))}
                                        <span className={detailProject.status ? "text-green-300" : "text-yellow-500"}>
                                            {detailProject.status ? "" : "In development"}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <Button
                                        type="button"
                                        onClick={() => setDetailProject(null)}
                                        variant="outline"
                                        className="h-11 flex-1"
                                    >
                                        Đóng
                                    </Button>

                                    <Button asChild className="h-11 flex-1 gap-2">
                                        <a href={detailProject.codeUrl ?? "#"} target="_blank">
                                            <Code2Icon className="size-4" />
                                            Xem code
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            <Dialog
                open={Boolean(previewProject)}
                onOpenChange={(open) => !open && setPreviewProject(null)}
            >
                <DialogContent className="fixed left-0 top-0 h-screen w-screen translate-x-0 translate-y-0 border-none bg-black/90 p-0 shadow-none max-w-none! data-[state=open]:animate-none data-[state=closed]:animate-none">
                    <DialogTitle className="sr-only">
                        {previewProject?.title ?? "Project image preview"}
                    </DialogTitle>

                    <DialogDescription className="sr-only">
                        Enlarged preview of the selected project image.
                    </DialogDescription>

                    <button
                        type="button"
                        onClick={() => setPreviewProject(null)}
                        className="absolute right-5 top-5 z-50 flex size-11 items-center justify-center rounded-full bg-white/15 text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-white/25"
                        aria-label="Close preview"
                    >
                        <X className="size-6" />
                    </button>

                    {previewProject && (
                        <div className="flex h-screen w-screen items-center justify-center p-4">
                            <Image
                                src={previewProject.image}
                                alt={`${previewProject.title} preview`}
                                className="h-full w-full object-contain"
                                priority
                            />
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    )
}

export default ProjectPage
