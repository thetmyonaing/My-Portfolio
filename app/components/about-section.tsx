import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
          <p className="text-muted-foreground">
            Highly motivated and passionate software engineer with over 9 years of experience in both 
full-stack and backend development. Skilled in designing, developing, testing, and deploying 
web applications and RESTful APIs using Agile methodologies. Proven ability to collaborate with cross-functional 
teams and consistently deliver high-quality code on time.  
Eager to contribute to organizations that offer a competitive and challenging environment, along with opportunities 
to grow technically and professionally. Seeking to apply my extensive experience and technical expertise to impactful 
and innovative projects, especially those involving the latest technologies and industry best practices.
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
                <li>Designed and developed RESTful APIs and web applications using React.js, .NET Core, and C#.</li>
                <li>Implemented and utilized Docker to enhance application performance, deployment, and scalability.</li>
                <li>Designed and implemented database schemas using Entity Framework Core and Microsoft SQL Server, 
including temporal tables for data versioning and history tracking.</li>
                <li>Developed secure authentication and authorization mechanisms using OAuth, JWT tokens, and 
Microsoft login integration.</li>
                <li>Troubleshot and resolved application bugs, defects, and performance issues to maintain system 
                stability and efficiency. </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">D3-SG Pte. Ltd. (Singapore)</h4>
                <span className="text-sm text-muted-foreground">May 2022 - Aug 2024</span>
              </div>
              <p className="text-sm font-medium mb-1">Senior Software Developer (Remote)</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-1">
                <li>Designed and developed RESTful APIs and web applications using React.js, .NET Core, and C#.</li>
                <li>Design and implement database schema using entity framework core and Microsoft SQL Server.</li>
                <li>Integrated third-party APIs and web services via RESTful APIs to extend application functionality.</li>
                <li>Developed secure authentication and authorization mechanisms using OAuth and JWT tokens.</li>
                <li>Participated in Agile development methodologies, including sprint planning and accurate estimation of 
                    user stories.</li>
                <li>Troubleshot and resolved application bugs, defects, and performance issues across the tech stack.</li>
                <li>Collaborated closely with the frontend team to ensure smooth and consistent integration between 
                    backend and frontend components.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">KBZ Bank</h4>
                <span className="text-sm text-muted-foreground">Oct 2016 - Apr 2022</span>
              </div>
              <p className="text-sm font-medium mb-1">Senior Full Stack Software Engineer</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-1">
                <li>Built and maintained complex web applications such as card management, billing aggregator, and HR 
                    management systems using .NET Frameworks (ASP.NET, MVC), .Net, React.js, Nodejs, Oracle Database, 
                    PostgreSQL and GraphQL using Hasura.</li>
                <li>Developed and integrated key financial services including core banking, digital onboarding, tax 
                    payment, and bank-to-bank transfers using RESTful APIs.</li>
                <li>Designed and developed API proxies for banking APIs and implemented custom logic using JavaScript. 
                    Configured API management tools such as reverse proxy, security policies, shared flows, API proxies, 
                    target servers, and Key Value Maps (KVM), while monitoring traffic on the Apigee Edge platform.</li>
                <li>Participated in Agile development practices, including daily stand-ups, sprint planning, and 
                    retrospectives.</li>
                <li>Implemented version control using Git from Subversion, and managed code repositories.</li>
                <li>Contributed to the creation of technical documentation and training materials for both new and 
                    existing applications.</li>
                <li>Collaborated with cross-functional, multicultural teams to ensure quality assurance and adherence to 
                    project timelines. </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">Myanmar High Society</h4>
                <span className="text-sm text-muted-foreground">Feb 2014 - Aug 2016</span>
              </div>
              <p className="text-sm font-medium mb-1">Web Developer</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-1">
                <li>Developed web applications such as Job Portal, E-commerce, Petrol Management System, HR Management System, and Learning Management System using ASP.NET MVC, C#, and SQL Server.</li>
                <li>Implemented authentication and authorization using ASP.NET Identity.</li>
                <li>Designed user interfaces with HTML, CSS, and JavaScript.</li>
                <li>Optimized application performance by leveraging Entity Framework.</li>
                <li>Contributed to building a mobile-responsive e-commerce website using ASP.NET MVC and C#.</li>
                <li>Maintained and enhanced existing web applications using ASP.NET, MVC, and Entity Framework.</li>
                <li>Troubleshot and resolved technical issues in existing systems.</li>
                <li>Collaborated with cross-functional development teams to design and implement new features.</li>
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
