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
              <span className="font-bold text-xl">Mr. Thet Myo Naing</span>
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
            <Link href="/Thet_Myo_Naing_Resume.pdf" download="Thet_Myo_Naing_Resume.pdf" target="_blank">
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
                Senior Software Engineer
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-8">
                Highly motivated and passionate full stack developer with 9+ years of experience in designing,
                developing, testing, and deploying web applications and APIs using Agile methodologies.
              </p>
              <div className="flex gap-4">
                <Link href="https://github.com/kothet2139" target="_blank">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/thet-myo-naing-51a465b5/" target="_blank">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
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
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">Featured Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Human Resource Management System (HRMS)"
                description="Collaborative, Innovative, Intelligent web-based HRMS with fingerprint attendance, leave management, and comprehensive reporting features. Led a team of 3 developers as Team Leader."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["C#", "MVC", "Entity Framework", "JavaScript", "SQL Server"]}
              />
              <ProjectCard
                title="Bill Aggregator System"
                description="Comprehensive bill payment system used in KBZ IBanking/mBanking/KBZPay supporting mobile top-up, gift cards, inter-bank transfers, tax payments, and electricity payments."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["C#", "MVC5", "Oracle", "SOAP Services", "APIs", "jQuery"]}
              />
              <ProjectCard
                title="eGiro Application (EDDA)"
                description="Electronic Direct Debit Authorisation system for Tokiomarine allowing customers to create/cancel/report EDDA through Giro and PayNow payments with DBS bank integration."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={[".NET Core", "React", "Web APIs", "Scheduler", "DBS Integration"]}
              />
              <ProjectCard
                title="Edulearn System (LMS)"
                description="Large-scale learning management system for Singapore schools including NAPFA sports assignment module and Online Consolidated Billing system for school fee payments."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["ASP.NET", "C#", "JavaScript", "jQuery", "SQL Server"]}
              />
              <ProjectCard
                title="Banking APIs & Payment Services"
                description="Comprehensive suite of REST APIs for bill payments (EPC, YCDC, Tax Payment, InterBank), gift cards, and money transfer services integrated with Apigee for authentication and management."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={[".NET Core", "Web API", "Apigee", "AWS Lambda", "EventBridge"]}
              />
              <ProjectCard
                title="System Center Configuration Manager (SCCM)"
                description="Application Manager system with client-server architecture allowing employees to download/install/uninstall applications from SCCM server with rating and review features."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["C#", ".NET 4.5", "Entity Framework", "Windows Metro", "MSSQL"]}
              />
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6">Additional Projects</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">HRDB System</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    HR system with Active Directory integration, payroll management, and employee records.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Node.js</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">React.js</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">AWS Lambda</span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">VJM Jewelry Management</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Sales management system for jewelry shops with multi-branch support and item transfers.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">C# .NET</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">MVC5</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">AngularJS</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">SQL Server</span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Job Portal System</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Online job search platform with CV generation and direct email application features.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">C#</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">.NET 4.5</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">MSSQL</span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">Football Live Report</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Web application for football news, live scores, and social media integration with troll features.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">AngularJS</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">C# .NET</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Entity Framework</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Football API</span>
                  </div>
                </div>
              </div>
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
            <p className="text-sm text-muted-foreground">© 2025 Thet.dev. All rights reserved.</p>
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
