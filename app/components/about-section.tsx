import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
          <p className="text-muted-foreground">
            Highly motivated and passionate developer with expertise in developing web applications with more than 9
            years' experience in both full stack and backend engineer roles. Experience in designing, developing,
            testing, and deploying web applications and web APIs using Agile methodologies. Adept at collaborating with
            cross-functional teams and delivering high-quality code on time.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">FPT Software (Vietnam)</h4>
                <span className="text-sm text-muted-foreground">Sep 2024 - Present</span>
              </div>
              <p className="text-sm font-medium mb-1">Senior Software Developer</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-1">
                <li>Designed and developed RESTful APIs and Web Applications using React.js, .NET Core and C#</li>
                <li>Implemented Docker to improve application performance and scalability</li>
                <li>Designed database schemas using Entity Framework Core and SQL Server with temporal tables</li>
                <li>Implemented authentication using OAuth, JWT token and Microsoft login</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">D3-SG Pte. Ltd. (Singapore)</h4>
                <span className="text-sm text-muted-foreground">May 2022 - Aug 2024</span>
              </div>
              <p className="text-sm font-medium mb-1">Senior Software Developer (Remote)</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-1">
                <li>Designed and developed RESTful APIs and Web Applications using React.js, .NET Core and C#</li>
                <li>Implemented microservices architecture and Docker for improved scalability</li>
                <li>Designed database schemas using Entity Framework Core and SQL Server</li>
                <li>Integrated third-party APIs and web services</li>
                <li>Implemented authentication using OAuth and JWT tokens</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">KBZ Bank</h4>
                <span className="text-sm text-muted-foreground">Oct 2016 - Apr 2022</span>
              </div>
              <p className="text-sm font-medium mb-1">Senior Full Stack Software Engineer</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-1">
                <li>Built complex web applications including card management and HR systems using .NET and React.js</li>
                <li>Developed core banking integrations, digital onboarding, and bank transfers using RESTful APIs</li>
                <li>Designed API proxies and implemented security policies on the Apigee Edge platform</li>
                <li>Participated in Agile development methodology</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Education & Certifications</h3>
          <div className="mb-4">
            <h4 className="font-medium">Bachelor of Computer Science</h4>
            <p className="text-sm text-muted-foreground">University of Computer Studies, Taungngu - September 2011</p>
          </div>
          <div className="space-y-2">
            <div>
              <h4 className="font-medium">Microsoft Certified: Power Platform Fundamentals</h4>
              <p className="text-sm text-muted-foreground">November 2024</p>
            </div>
            <div>
              <h4 className="font-medium">Microsoft Power Platform Functional Consultant</h4>
              <p className="text-sm text-muted-foreground">December 2024</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Strengths & Skills</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-1">
            <li>Quick adaptation to new technologies</li>
            <li>Creative and innovative problem-solving</li>
            <li>Thorough and efficient debugging</li>
            <li>Effective time management and task prioritization</li>
            <li>Effective communication with diverse, multi-cultural teams</li>
            <li>Collaborative work ethic with positive attitude</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
