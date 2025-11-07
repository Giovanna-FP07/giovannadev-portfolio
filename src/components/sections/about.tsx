import { Briefcase, Heart, Rocket, Target } from "lucide-react";

export function About() {
  return (
    <section id="about">
      <div className="grid lg:grid-cols-1 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-headline tracking-tighter">Sobre Mim</h2>
          <div className="text-foreground/80 space-y-4 text-base font-medium">
            <div>
              <h3 className="font-semibold text-foreground text-lg mb-1 flex items-center gap-2"><Heart className="text-accent w-5 h-5"/> O Início da Paixão pela Tecnologia</h3>
              <p>Desde pequena, a curiosidade por como as coisas funcionam me guiava. Essa curiosidade floresceu em uma <span className="text-accent">paixão por tecnologia</span>, especialmente em como a <span className="text-primary">lógica de programação</span> pode criar soluções incríveis e interativas.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg mb-1 flex items-center gap-2"><Briefcase className="text-accent w-5 h-5" /> Foco no Desenvolvimento Front-End e UX</h3>
              <p>Durante a faculdade, descobri no <span className="text-primary">desenvolvimento front-end</span> a união perfeita entre lógica e criatividade. Fico fascinada em construir interfaces que não sejam apenas bonitas, mas também <span className="text-accent">intuitivas e acessíveis</span> para todos os usuários.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg mb-1 flex items-center gap-2"><Target className="text-accent w-5 h-5" /> Habilidades e Metas de Carreira</h3>
              <p>Estou constantemente aprendendo e aprimorando minhas habilidades em HTML, CSS, JavaScript e frameworks como <span className="text-primary">React</span>. Minha meta é me tornar uma <span className="text-accent">desenvolvedora front-end completa</span>, capaz de liderar projetos e criar experiências digitais memoráveis.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg mb-1 flex items-center gap-2"><Rocket className="text-accent w-5 h-5" /> O Que Vem a Seguir...</h3>
              <p>Busco oportunidades para aplicar meu conhecimento em <span className="text-accent">projetos desafiadores</span>, colaborar com equipes talentosas e continuar crescendo como profissional. Estou animada para ver onde essa jornada em tecnologia me levará!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
