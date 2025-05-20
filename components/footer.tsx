import Link from "next/link"
import { Mail, Phone, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 MOTADATA. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-teal-600">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-teal-600">
            Terms of Service
          </Link>
        </div>
      </div>
      <div className="container mt-4 flex flex-col md:flex-row justify-center gap-8 md:gap-12">
        <div className="flex items-center">
          <Mail className="mr-2 h-5 w-5 text-teal-600" />
          <span>cor22982@uvg.edu.gt</span>
        </div>
        <div className="flex items-center">
          <Phone className="mr-2 h-5 w-5 text-teal-600" />
          <span>+502 38731207</span>
        </div>
        <div className="flex items-center">
          <Github className="mr-2 h-5 w-5 text-teal-600" />
          <span>github.com/donmatthiuz/MOTADATA</span>
        </div>
      </div>
    </footer>
  )
}
