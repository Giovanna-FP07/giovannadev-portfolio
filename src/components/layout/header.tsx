"use client";
import Link from 'next/link';
import { Menu, Github, Linkedin, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useTheme } from 'next-themes';

const navItems = [
  { label: 'Início', href: '#home' },
  { label: 'Jornada', href: '#experience' },
  { label: 'Sobre', href: '#about' },
];

export function Header() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="#home" className="mr-6 flex items-center space-x-2">
          <span className="font-headline font-bold text-2xl tracking-wider">G<span className="text-primary">F</span></span>
        </Link>
        
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center justify-end gap-2">
            <Button asChild variant="ghost" size="icon" aria-label="GitHub">
                <a href="https://github.com/Giovanna-FP07" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
                <a href="https://www.linkedin.com/in/giovannafernandesp/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                </a>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>


        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0 bg-background">
              <Link href="#home" className="mr-6 flex items-center space-x-2 p-4 border-b">
                 <span className="font-headline font-bold text-xl tracking-wider">G<span className="text-primary">F</span></span>
              </Link>
              <div className="flex flex-col space-y-2 mt-6">
                {navItems.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-lg font-medium transition-colors hover:text-primary text-left"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
