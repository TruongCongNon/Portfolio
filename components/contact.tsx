"use client"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HatGlassesIcon, Link, Mail, MapPin, Phone, Send } from "lucide-react"

import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

const ContactPage = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".contact-heading", {
                y: 40,
                opacity: 0,
            })

            gsap.set(".contact-form", {
                x: -120,
                opacity: 0,
            })

            gsap.set(".contact-info", {
                x: 120,
                opacity: 0,
            })

            gsap.set(".contact-card", {
                y: 30,
                opacity: 0,
            })

            const animateIn = () => {
                gsap.to(".contact-heading", {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                })

                gsap.to(".contact-form", {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    delay: 0.15,
                })

                gsap.to(".contact-info", {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    delay: 0.25,
                })

                gsap.to(".contact-card", {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: "power3.out",
                    delay: 0.35,
                })
            }

            const animateOut = () => {
                gsap.to(".contact-heading", {
                    y: 40,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.inOut",
                })

                gsap.to(".contact-form", {
                    x: -120,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.inOut",
                })

                gsap.to(".contact-info", {
                    x: 120,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.inOut",
                })

                gsap.to(".contact-card", {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: "power3.inOut",
                })
            }

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 75%",
                end: "bottom 20%",
                onEnter: animateIn,
                onLeave: animateOut,
                onEnterBack: animateIn,
                onLeaveBack: animateOut,
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const name = formData.get("name")
        const email = formData.get("email")
        const message = formData.get("message")

        const subject = encodeURIComponent(`Portfolio contact from ${name}`)
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )

        window.location.href = `mailto:your-email@gmail.com?subject=${subject}&body=${body}`
    }

    return (
        <section id="contact"
            ref={sectionRef}
            className="relative left-1/2 min-h-screen w-screen -translate-x-1/2 overflow-hidden bg-background px-4 py-20 text-foreground sm:px-6 md:px-10"
        >
            <div className="relative z-10 mx-auto max-w-6xl">
                <div className="contact-heading mb-14 max-w-2xl">

                    <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                        Let&apos;s Work Together
                    </h1>

                    <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
                        Have a project, internship opportunity, or collaboration idea?
                        Send me a message and I will get back to you soon.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <form
                        onSubmit={handleSubmit}
                        className="contact-form rounded-lg border border-border/70 bg-card/80 p-6 shadow-lg backdrop-blur-md md:p-8"
                    >
                        <div className="grid gap-5">
                            <div className="grid gap-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium text-muted-foreground"
                                >
                                    Your name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    className="h-11 rounded-lg border border-border bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />
                            </div>

                            <div className="grid gap-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium text-muted-foreground"
                                >
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="h-11 rounded-lg border border-border bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />
                            </div>

                            <div className="grid gap-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium text-muted-foreground"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    placeholder="Write your message..."
                                    className="resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                                />
                            </div>

                            <Button type="submit" className="h-11 gap-2 rounded-lg">
                                <Send className="size-4" />
                                Send Message
                            </Button>
                        </div>
                    </form>

                    <div className="contact-info space-y-4">
                        <div className="contact-card rounded-lg border border-border/70 bg-card/80 p-5 shadow-lg backdrop-blur-md">
                            <div className="mb-3 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Mail className="size-5" />
                            </div>
                            <h3 className="font-semibold">Email</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                truongcongnon104email@gmail.com
                            </p>
                        </div>

                        <div className="contact-card rounded-lg border border-border/70 bg-card/80 p-5 shadow-lg backdrop-blur-md">
                            <div className="mb-3 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Phone className="size-5" />
                            </div>
                            <h3 className="font-semibold">Phone</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                +84 372338033
                            </p>
                        </div>

                        <div className="contact-card rounded-lg border border-border/70 bg-card/80 p-5 shadow-lg backdrop-blur-md">
                            <div className="mb-3 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <MapPin className="size-5" />
                            </div>
                            <h3 className="font-semibold">Location</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Viet Nam
                            </p>
                        </div>

                        <div className="contact-card flex gap-3">
                            <Button asChild variant="outline" className="h-11 flex-1 gap-2">
                                <a href="https://github.com/TruongCongNon" target="_blank" rel="noreferrer">
                                    <HatGlassesIcon className="size-4" />
                                    GitHub
                                </a>
                            </Button>

                            <Button asChild variant="outline" className="h-11 flex-1 gap-2">
                                <a href="https://www.facebook.com/?locale=vi_VN" target="_blank" rel="noreferrer">
                                    <Link className="size-4" />
                                    Facebook
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPage
