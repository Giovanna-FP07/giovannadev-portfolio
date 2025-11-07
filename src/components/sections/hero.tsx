import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '../ui/badge';
import { Mail } from 'lucide-react';

export function Hero() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture-purple');

  return (
    <section id="home" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="p-6 md:p-10 rounded-lg bg-card/50 border border-primary/20">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4 text-center lg:text-left lg:col-span-2">
                <Badge variant="outline" className='border-primary text-primary'>
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/75 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Disponível para trabalho
                </Badge>
              <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
                Giovanna Fernandes 👋
              </h1>
              <p className="max-w-[600px] text-foreground/80 md:text-lg mx-auto lg:mx-0">
                Estudante de <span className="text-primary">Ciência da Computação</span> com paixão por <span className="text-accent">desenvolvimento, tecnologia</span> e o café que desperta ideias. Adoro dar vida a projetos digitais. 🚀
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start pt-2">
                <Button asChild size="lg">
                  <a href="mailto:giovannafernandes.work@gmail.com">
                    <Mail className="mr-2" /> Contate-me
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#about">
                    Sobre Mim
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
