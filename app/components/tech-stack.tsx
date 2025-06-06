import { Card } from "@/components/ui/card"

// Update the technologies array with Thet's actual skills
const technologies = [
  {
    category: "Frontend",
    skills: ["React.js", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap", "Ajax"],
  },
  {
    category: "Backend",
    skills: ["C#", ".NET Core", "ASP.NET MVC", "Entity Framework", "WCF", "RESTful API"],
  },
  {
    category: "Database",
    skills: ["Microsoft SQL Server", "MySQL", "Oracle", "PostgreSQL", "Temporal Tables"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "AWS", "GitHub", "Azure DevOps", "Bitbucket", "Jira", "Swagger"],
  },
  {
    category: "Specialized",
    skills: ["Power Platform", "Apigee Edge", "OAuth", "JWT", "CI/CD", "Microservices"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6 h-full">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
