
"use client"

const experiences = [
  {
    title: "AWS Student Builder Group Leader",
    organization: "AWS Community",
    period: "2023 - Present",
    description: "Spearheading a community of 500+ student developers. Orchestrating workshops on Cloud Architecture, Serverless, and DevOps practices.",
    color: "bg-[#8b5cf6]"
  },
  {
    title: "Cloud Infrastructure Intern",
    organization: "Tech Solutions Global",
    period: "Summer 2023",
    description: "Automated deployment pipelines for multi-region AWS environments, reducing manual intervention by 40% through IaC (Terraform).",
    color: "bg-[#ec4899]"
  },
  {
    title: "Community Initiative Lead",
    organization: "Women In Tech",
    period: "2022 - 2023",
    description: "Mentoring upcoming female engineers in cloud computing. Developed a curriculum for 'Cloud Foundations 101'.",
    color: "bg-[#22c55e]"
  },
  {
    title: "Volunteer Developer",
    organization: "OpenSource Fellowship",
    period: "2021 - 2022",
    description: "Contributed to core CLI tools for cloud management, focusing on usability and performance optimization.",
    color: "bg-primary"
  }
]

export function Timeline() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-code uppercase tracking-widest text-primary font-bold mb-4">
            Journey
          </h2>
          <h3 className="text-4xl font-bold tracking-tight">Professional Experience</h3>
        </div>

        <div className="space-y-12 relative">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0 group">
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-border group-last:h-0" />
              
              <div className="flex flex-col md:flex-row items-start md:items-center">
                {/* Desktop Left Side */}
                <div className={`hidden md:block w-1/2 pr-12 text-right ${index % 2 !== 0 ? 'order-last pl-12 pr-0 text-left' : ''}`}>
                  <span className="text-xs font-code font-bold text-primary mb-2 block">{exp.period}</span>
                  <h4 className="text-xl font-bold">{exp.title}</h4>
                  <p className="text-sm text-accent font-medium mb-2">{exp.organization}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-10 transition-transform group-hover:scale-125" 
                  style={{ backgroundColor: `hsl(var(--primary))` }} 
                />

                {/* Content Box */}
                <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-card p-6 rounded-xl border border-border shadow-sm group-hover:border-primary/30 transition-all duration-300">
                     <span className="md:hidden text-xs font-code font-bold text-primary mb-2 block">{exp.period}</span>
                     <h4 className="md:hidden text-lg font-bold mb-1">{exp.title}</h4>
                     <p className="md:hidden text-xs text-accent font-medium mb-3">{exp.organization}</p>
                     <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                     </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
