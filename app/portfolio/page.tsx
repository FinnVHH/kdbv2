// src/app/portfolio/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function PortfolioPage() {
  // Only the “Professioneel Voetbalveld Onderhoud” project remains
  const project = {
    name: "Professioneel Voetbalveld Onderhoud",
    description:
      "Uitgebreide zorg voor grote voetbalstadions, zodat optimale speelomstandigheden worden gegarandeerd.",
    images: [
      "/football-pitch-grass1.jpg",
      "/football-pitch-grass-with-trainers.jpg",
      "/football-pitch-grass-water.jpg",
      "/football-pitch-grass2.jpg",
    ],
  };

  return (
    <div className="flex flex-col">

      {/* Header */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        <h1 className="text-4xl font-bold text-white">Ons Portfolio</h1>
        <p className="mt-2 text-xl text-muted-foreground max-w-2xl mx-auto">
          De precisie en kwaliteit van KDB Pitch Care in elk project.
        </p>
      </section>

      {/* Single Project Card, perfectly centered */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center py-8">
        <Card className="w-full max-w-md overflow-hidden">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-white">{project.name}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">{project.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((src, idx) => (
                <div
                  key={idx}
                  className="relative w-full aspect-video overflow-hidden rounded-md"
                >
                  <Image
                    src={src}
                    alt={`${project.name} afbeelding ${idx + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Video Demo */}
      <section className="text-center space-y-6 py-12">
        <h2 className="text-3xl font-bold text-white">Zie Onze Technologie in Actie</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Ervaar de precisie en efficiëntie van onze geavanceerde pitch lijnmarkeringsrobot.
        </p>
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg border border-border">
          <video
            controls
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/pitch-robot-video.mp4"
            poster="/football-pitch-grass1.jpg"
          >
            Uw browser ondersteunt de videotag niet.
          </video>
        </div>
        <p className="text-sm text-muted-foreground">
          (Als de video op YouTube/Vimeo wordt gehost, kunt u deze hier in plaats daarvan insluiten met een <code>iframe</code>.)
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4 py-8">
        <Lightbulb className="h-10 w-10 text-primary mx-auto" />
        <h2 className="text-2xl font-bold text-white">Heeft u een project in gedachten?</h2>
        <p className="text-muted-foreground">
          We bespreken graag hoe KDB Pitch Care uw visie tot leven kan brengen.
        </p>
        <Link href="/contact" passHref>
          <Button size="lg">Neem Contact Op</Button>
        </Link>
      </section>
    </div>
  );
}
