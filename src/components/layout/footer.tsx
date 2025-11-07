import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";

export function Footer() {
    return (
        <footer className="w-full py-8 mt-16 md:mt-24 border-t border-border/40 bg-background">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-foreground/60 text-center md:text-left">
                    &copy; {new Date().getFullYear()} Giovanna Fernandes. Todos os direitos reservados.
                </p>
                <div className="flex gap-2">
                    <Button asChild variant="ghost" size="icon" aria-label="GitHub">
                        <a href="https://github.com/Giovanna-FP07" target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5 hover:text-primary transition-colors" />
                        </a>
                    </Button>
                    <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
                        <a href="https://www.linkedin.com/in/giovannafernandesp/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
                        </a>
                    </Button>
                    <Button asChild variant="ghost" size="icon" aria-label="Email">
                        <a href="mailto:giovannafernandes.work@gmail.com">
                            <Mail className="h-5 w-5 hover:text-primary transition-colors" />
                        </a>
                    </Button>
                </div>
            </div>
        </footer>
    );
}
