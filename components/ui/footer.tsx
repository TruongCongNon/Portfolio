"use client"

import { HatGlasses, Link, Mail, MapPin, Phone } from "lucide-react"

import { navItems } from "@/lib/data"

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/TruongCongNon",
        icon: HatGlasses,
    },
    {
        label: "LinkedIn",
        href: "#",
        icon: Link,
    },
    {
        label: "Email",
        href: "#",
        icon: Mail,
    },
]

const FooterPage = () => {
    return (
        <footer className="relative left-1/2 w-screen -translate-x-1/2 border-t border-border/70 bg-background px-4 py-10 text-foreground sm:px-6 md:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">
                            Truong Cong Non
                        </h2>

                        <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                            Front-End Developer focused on building clean, responsive,
                            and user-friendly web applications with ReactJS, Next.js,
                            and Tailwind CSS.
                        </p>

                        <div className="mt-5 flex gap-3">
                            {socialLinks.map((item) => {
                                const Icon = item.icon

                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target={
                                            item.href.startsWith("http") ? "_blank" : undefined
                                        }
                                        rel={
                                            item.href.startsWith("http")
                                                ? "noreferrer"
                                                : undefined
                                        }
                                        aria-label={item.label}
                                        className="flex size-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition hover:-translate-y-1 hover:border-primary hover:text-primary"
                                    >
                                        <Icon className="size-4" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide">
                            Navigation
                        </h3>

                        <nav className="mt-4 grid gap-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="w-fit text-sm text-muted-foreground transition hover:text-primary"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide">
                            Contact
                        </h3>

                        <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                            <a
                                href="mailto:your-email@gmail.com"
                                className="flex items-center gap-3 transition hover:text-primary"
                            >
                                <Mail className="size-4" />
                                truongcongnon104@gmail.com
                            </a>

                            <a
                                href="tel:+84000000000"
                                className="flex items-center gap-3 transition hover:text-primary"
                            >
                                <Phone className="size-4" />
                                +84 372 338 033
                            </a>
                            <div className="flex items-center gap-3">
                                <MapPin className="size-4" />
                                Viet Nam
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-border/70 pt-5 text-center text-sm text-muted-foreground sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} Truong Cong Non. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default FooterPage
