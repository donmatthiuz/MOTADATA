import Link from "next/link"
import { Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Droplets className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">MOTADATA</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-teal-600 transition-colors">
            About
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:text-teal-600 transition-colors">
           Demo
          </Link>
          {/* <Link href="/blog" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Blog
          </Link> */}
          <Link href="/contact" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button size="sm" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
