// src/app/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Paintbrush, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section (unchanged) */}
      <section className="relative h-[calc(100vh-64px)] overflow-hidden">
        <Image
          src="/football-pitch-grass-water.jpg"
          alt="Mooie gemaaide grasmat"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="brightness-50"
        />
        <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-center md:items-end px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg space-y-6 text-center md:text-right">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Precisie Pitch Onderhoud voor Ongeëvenaarde Prestaties
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light">
              KDB Pitch Care levert deskundige maai- en lijnentrekdiensten, zodat uw
              sportvelden altijd in topconditie zijn.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-end">
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/services">Onze Diensten</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact">Vraag een Offerte aan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section (card perfectly centered) */}
      <section className="bg-black py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
            Wat Wij Doen
          </h2>

          {/* Single-card wrapper with flex centering */}
          <div className="mt-8 flex justify-center">
            <Card className="flex flex-col items-center text-center max-w-sm p-6">
              <Paintbrush className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
              <CardTitle className="text-xl sm:text-2xl mb-2">
                Nauwkeurige Belijning
              </CardTitle>
              <CardContent className="text-sm sm:text-base text-muted-foreground">
                Scherpe, duidelijke en nauwkeurige belijningen voor elke sport, waardoor de bespeelbaarheid en het professionele uiterlijk worden verbeterd.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section (unchanged) */}
{/* Call to Action Section */}
<section className="bg-primary py-12 sm:py-16 text-center px-4">
  <Lightbulb className="h-10 w-10 sm:h-12 sm:w-12 text-primary-foreground mx-auto" />
  <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-primary-foreground">
    Klaar voor een Perfecte Grasmat?
  </h2>
  <p className="mt-2 text-base sm:text-xl text-primary-foreground/80 max-w-xl md:max-w-2xl mx-auto">
    Neem vandaag nog contact op met KDB Pitch Care voor een gratis consult en offerte.
  </p>
  <Link href="/contact" passHref>
    <Button
      size="lg"
      className="mt-6 bg-primary-foreground hover:bg-primary-foreground/90 text-primary"
    >
      Vraag een Offerte aan
    </Button>
  </Link>
</section>


    </div>
  );
}
