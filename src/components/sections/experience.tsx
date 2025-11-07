import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Faculdade de Ciência da Computação",
        company: "Faculdade de Informática e Administração Paulista",
        period: "2025 - 2029",
        description: "Início da jornada acadêmica em Ciência da Computação, aprofundando conhecimentos em algoritmos, estruturas de dados e desenvolvimento de software."
    },
    {
        role: "Programação na Pandemia",
        company: "Ensino Fundamental",
        period: "2020 - 2021",
        description: "Primeiros contatos com desenvolvimento web, explorando HTML e Python para criar pequenos projetos e consolidar a paixão pela área."
    },
     {
        role: "Informática e Robótica",
        company: "Ensino Fundamental",
        period: "2017 - 2019",
        description: "Primeiros passos no mundo da tecnologia, com aulas de informática e robótica que despertaram a curiosidade e o interesse pela programação."
    }
]

export function Experience() {
  return (
    <section id="experience" className="container px-4 md:px-6 py-12 md:py-24">
       <div className="space-y-2 mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tighter flex items-center gap-2"><Briefcase className='w-7 h-7 text-primary'/>Minha Jornada em Ciência da Computação</h2>
            <p className="text-foreground/80 max-w-3xl">
                Uma breve história sobre minha paixão por <span className="text-accent">tecnologia</span> e meus objetivos como futura <span className="text-primary">desenvolvedora</span>.
            </p>
        </div>

        <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
            {experiences.map((exp, index) => (
                <div key={index} className="relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[39px] top-1"></div>
                    <p className="text-sm text-primary font-semibold">{exp.period}</p>
                    <h3 className="text-xl font-bold font-headline mt-1">{exp.role}</h3>
                    <p className="text-md text-foreground/80 font-semibold">{exp.company}</p>
                    <p className="text-foreground/70 mt-2">{exp.description}</p>
                </div>
            ))}
        </div>
    </section>
  );
}
