import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
    {
        degree: "Bacharelado em Ciência da Computação",
        institution: "Faculdade de Informática e Administração Paulista",
        period: "Previsão de formatura em Fev/2029"
    },
    {
        degree: "Inglês Intermediário",
        institution: "Cultura Inglesa",
        period: "Até o 4º ano"
    }
];

export function Education() {
  return (
    <Card id="education" className="bg-card/30 border-primary/20 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="font-headline text-lg flex items-center gap-2"><GraduationCap /> Formação Acadêmica</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {education.map((edu, index) => (
            <div key={index} className="flex flex-col">
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-sm text-foreground/80">{edu.institution}</p>
                <p className="text-xs text-foreground/60">{edu.period}</p>
            </div>
        ))}
      </CardContent>
    </Card>
  );
}
