// src/app/services/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">

      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src="/football-pitch-grass-2.jpg"    // rename your file to remove spaces
          alt="Grasmat met belijning"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="brightness-50"
        />
        <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white text-center">
            Onze Diensten: Nauwkeurige Belijning
          </h1>
          <p className="mt-2 text-base sm:text-lg md:text-xl font-light text-white text-center">
            KDB Pitch Care is gespecialiseerd in het aanbrengen van perfecte belijningen voor al uw sportvelden.
          </p>
        </div>
      </section>

      {/* Main Service Content */}
      <section className="bg-black text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            De Kunst van Nauwkeurige Belijning
          </h2>
          <div className="max-w-3xl mx-auto text-muted-foreground text-base sm:text-lg space-y-4 text-center">
            <p>
              Bij KDB Pitch Care begrijpen we dat nauwkeurige belijning essentieel is voor eerlijk spel en een professionele uitstraling van uw sportvelden. Of het nu gaat om voetbal, hockey, rugby of andere sporten, wij zorgen ervoor dat elke lijn scherp, helder en perfect volgens de officiële afmetingen wordt aangebracht.
            </p>
            <p>
              We gebruiken hoogwaardige, milieuvriendelijke belijningsverf en geavanceerde technieken om consistente resultaten te garanderen die lang meegaan en bestand zijn tegen diverse weersomstandigheden. Onze experts werken efficiënt en met minimale verstoring, zodat uw velden snel weer klaar zijn voor gebruik.
            </p>
            <p>
              Investeer in de details die het verschil maken. Laat KDB Pitch Care zorgen voor uw belijning en ervaar het verschil van precisie en professionaliteit.
            </p>
          </div>

          {/* Features / Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-muted p-6 sm:p-8 rounded-lg shadow-sm text-center space-y-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                Scherpte & Duidelijkheid
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Onze belijning staat garant voor ongeëvenaarde scherpte, waardoor spelers en scheidsrechters altijd duidelijkheid hebben op het veld.
              </p>
            </div>
            <div className="bg-muted p-6 sm:p-8 rounded-lg shadow-sm text-center space-y-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                Duurzaamheid
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We gebruiken weerbestendige verf die lang meegaat, zelfs onder intensief gebruik en wisselende weersomstandigheden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-foreground py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <Lightbulb className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Klaar voor perfecte belijning?
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-xl md:max-w-2xl mx-auto">
            Neem vandaag nog contact op met KDB Pitch Care voor een gratis consult en offerte voor belijning.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4 sm:mt-6">
            <Link href="/contact">Vraag een Offerte aan</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
