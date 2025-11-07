import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const interests = ["Música", "Hipismo", "Viagens", "Jogos", "Fotografia", "Idiomas", "Artesanato", "Séries", "Leitura", "Empreendedorismo"];

export function Interests() {
  return (
    <Card className="bg-card/30 border-primary/20 sticky top-24 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02]">
        <CardHeader>
            <CardTitle className="font-headline text-lg text-center">Além do Código</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2 justify-center">
            {interests.map(interest => (
                <Badge key={interest} variant="default" className="bg-primary/80 text-primary-foreground hover:bg-primary/90 cursor-default px-3 py-1 text-sm">{interest}</Badge>
            ))}
        </CardContent>
    </Card>
  );
}
