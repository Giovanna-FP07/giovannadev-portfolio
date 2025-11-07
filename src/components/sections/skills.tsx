import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, GitBranch, Globe, Paintbrush, PenTool, Terminal, FileCode, Coffee } from 'lucide-react';

const techSkills = [
  { name: "HTML", icon: <Code className="text-primary" /> },
  { name: "CSS", icon: <Paintbrush className="text-primary" /> },
  { name: "Git", icon: <GitBranch className="text-primary" /> },
  { name: "GitHub", icon: <Globe className="text-primary" /> },
  { 
    name: "Python", 
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-accent">
        <title>Python</title>
        <path d="M12.44 2.2a.5.5 0 00-.88 0l-3.33 6.05a.5.5 0 00.1.65l5.83 4.43a.5.5 0 010 .84l-5.83 4.43a.5.5 0 00-.1.65l3.33 6.05a.5.5 0 00.88 0l3.33-6.05a.5.5 0 00-.1-.65L9.74 13.2a.5.5 0 010-.84l5.83-4.43a.5.5 0 00.1-.65z" fill="#3776AB"/>
        <path d="M11.56 21.8a.5.5 0 00.88 0l3.33-6.05a.5.5 0 00-.1-.65l-5.83-4.43a.5.5 0 010-.84l5.83-4.43a.5.5 0 00.1-.65L12.44 2.2a.5.5 0 00-.88 0L8.23 8.25a.5.5 0 00.1.65l5.83 4.43a.5.5 0 010 .84l-5.83 4.43a.5.5 0 00-.1.65z" fill="#FFD43B"/>
      </svg>
    )
  },
  { name: "Java", icon: <Coffee className="text-accent" /> },
  { name: "VSCode", icon: <Terminal className="text-accent" /> },
  { name: "UX/UI", icon: <PenTool className="text-accent" /> },
  { name: "Linguagem C", icon: <FileCode className="text-accent" /> }
];


export function Skills() {
  return (
    <Card id="skills" className="bg-card/30 border-primary/20 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="font-headline text-lg flex items-center gap-2"><Code className="text-primary" /> Minha Stack de Tecnologias</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2 flex-grow">
        {techSkills.map((skill) => (
          <Badge key={skill.name} variant="secondary" className="bg-secondary/50 text-secondary-foreground cursor-default flex items-center gap-1.5">
            {skill.icon}
            {skill.name}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}
