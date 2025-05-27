// src/app/about/page.tsx
import {
  Award,
  Target,
  Handshake,
  Users,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-black text-white">

      {/* Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">Over Ons</h1>
          <p className="mt-2 text-xl text-muted-foreground max-w-2xl mx-auto">
            Toegewijd aan excellentie in sportveldonderhoud, levert KDB Pitch Care
            ongeëvenaarde kwaliteit en betrouwbaarheid.
          </p>
        </div>
      </section>

      {/* Onze Missie */}
{/* Onze Missie */}
<section className="py-12">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Tekstblok */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold flex items-center">
          <Target className="h-8 w-8 text-primary mr-3" />
          Onze Missie
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl">
          Bij KDB Pitch Care is het onze missie om professionele belijningsdiensten
          te leveren die elk sportveld voorzien van scherpe, duidelijke lijnen
          volgens de officiële afmetingen.
        </p>
        <p className="text-lg text-muted-foreground max-w-xl">
          We werken met premium, weerbestendige belijningsverf en geavanceerde
          apparatuur zodat de lijnen langdurig helder blijven, ongeacht
          weersomstandigheden. Zo garanderen we optimale speelomstandigheden
          en een professionele uitstraling.
        </p>
      </div>

      {/* Visuele kaart */}
      <div className="flex justify-center">
        <Card className="w-full max-w-md bg-white/10">
          <CardContent className="p-8 text-center">
            <CardTitle className="text-2xl font-bold text-white">
              Onze Missie
            </CardTitle>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>

      {/* Waarom Voor Ons Kiezen */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl font-bold">Waarom Voor Ons Kiezen?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {/* Expertise */}
            <Card className="w-full max-w-xs p-6 bg-white/5">
              <Award className="h-10 w-10 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg font-semibold text-white">
                Expertise
              </CardTitle>
              <CardContent className="text-muted-foreground mt-2">
                Jarenlange ervaring in professioneel pitch onderhoud.
              </CardContent>
            </Card>
            {/* Precisie */}
            <Card className="w-full max-w-xs p-6 bg-white/5">
              <Sparkles className="h-10 w-10 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg font-semibold text-white">
                Precisie
              </CardTitle>
              <CardContent className="text-muted-foreground mt-2">
                Ongeëvenaarde nauwkeurigheid in maaien en belijning.
              </CardContent>
            </Card>
            {/* Betrouwbaarheid */}
            <Card className="w-full max-w-xs p-6 bg-white/5">
              <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg font-semibold text-white">
                Betrouwbaarheid
              </CardTitle>
              <CardContent className="text-muted-foreground mt-2">
                Consistente, on-demand service waarop u kunt vertrouwen.
              </CardContent>
            </Card>
            {/* Klantgericht */}
            <Card className="w-full max-w-xs p-6 bg-white/5">
              <Handshake className="h-10 w-10 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg font-semibold text-white">
                Klantgericht
              </CardTitle>
              <CardContent className="text-muted-foreground mt-2">
                Oplossingen op maat om aan uw specifieke behoeften te voldoen.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ons Team */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl font-bold flex justify-center items-center mx-auto">
            <Users className="h-8 w-8 text-primary mr-3" /> Ons Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ontmoet de mensen achter KDB Pitch Care, toegewijd aan het leveren
            van topkwaliteit service.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            <Card className="w-full max-w-xs p-6 bg-white/5">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="/kristof.png"
                  alt="Kristof De Baere"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardTitle className="text-lg font-semibold text-white">
                Kristof De Baere
              </CardTitle>
              <CardContent className="text-muted-foreground mt-2">
                Oprichter &amp; Hoofd Pitch Specialist <br />
                Kristof heeft een passie voor grasmatten en staat garant voor elk
                project.
              </CardContent>
            </Card>

            {/* Voeg hier indien gewenst extra teamleden toe */}
          </div>
        </div>
      </section>
    </div>
  );
}
