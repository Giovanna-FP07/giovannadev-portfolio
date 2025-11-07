import { Github } from "lucide-react";
import { Button } from "../ui/button";

export function OpenSource() {
    return (
        <section className="container px-4 md:px-6 mt-16 md:mt-24">
            <div className="relative group overflow-hidden rounded-lg bg-gradient-to-r from-primary/80 to-accent/80 p-8 md:p-12 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                <div className="relative z-10 text-center">
                    <h3 className="text-3xl md:text-4xl font-headline font-bold text-primary-foreground">Gostou do design deste site?</h3>
                    <p className="text-lg text-primary-foreground/80 mt-2 max-w-2xl mx-auto">O código é totalmente aberto. Sinta-se à vontade para explorar, usar como base para o seu portfólio e contribuir!</p>
                    <Button asChild variant="outline" size="lg" className="mt-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2" /> Ver no GitHub
                        </a>
                    </Button>
                </div>
                <Github className="absolute -right-16 -bottom-16 w-64 h-64 text-primary-foreground/10 transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12" />
            </div>
        </section>
    )
}
