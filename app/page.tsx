import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, FileDown } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import AboutSection from "./components/about-section"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-6 md:gap-10">
            <Link className="flex items-center space-x-2" href="/">
              <span className="font-bold text-xl">Thet.dev</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
                Projects
              </Link>
              <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Link href="/Thet_Myo_Naing_Resume.pdf" target="_blank" download>
              <Button variant="outline" size="sm" className="hidden md:flex">
                <FileDown className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none mb-6">
                Senior Software Developer
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-8">
                Highly motivated and passionate full stack developer with 9+ years of experience in designing,
                developing, testing, and deploying web applications and APIs using Agile methodologies.
              </p>
              <div className="flex gap-4">
                <Link href="https://github.com" target="_blank">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/thet-myo-naing" target="_blank">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:thetmyonaing1991@gmail.com">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">About Me</h2>
            <AboutSection />
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Banking API Integration"
                description="Developed and integrated core banking, digital on-boarding, tax payment, and bank-to-bank transfer using RESTful APIs at KBZ Bank."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={[".NET Core", "C#", "RESTful API", "React.js"]}
              />
              <ProjectCard
                title="Microservices Architecture"
                description="Implemented microservices architecture and Docker to improve application performance and scalability at D3-SG Pte. Ltd."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["Microservices", "Docker", ".NET Core", "React.js"]}
              />
              <ProjectCard
                title="API Management Platform"
                description="Designed and developed API proxies for banking APIs using Apigee Edge platform, implementing security policies and monitoring API traffic."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["Apigee Edge", "JavaScript", "API Management", "Security"]}
              />
            </div>
          </div>
        </section>

        <section id="tech-stack" className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">Tech Stack</h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">Get in Touch</h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 Thet.dev. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-sm text-muted-foreground hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm text-muted-foreground hover:underline underline-offset-4" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
