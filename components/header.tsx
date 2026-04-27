'use client'
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/lib/data";
import { Menu } from "lucide-react";
import Link from "next/link";

const HeaderPage = () => {
    return (

        <header className="sticky top-0 z-50 flex h-16 w-full items-center border-b bg-background/50 px-4 backdrop-blur-xl supports-backdrop-filter:bg-background/40 md:px-6">

            <Link href="/" className="mr-auto text-xl font-bold tracking-tight">
                NT.
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            <div className="ml-4 hidden md:block">
                <ThemeToggle />
            </div>

            <div className="ml-auto flex items-center gap-2 md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" aria-label="Mở menu">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-72">
                        <nav className="mt-8 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-base ml-5 font-medium text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
                <ThemeToggle />
            </div>
        </header>
    )
}

export default HeaderPage