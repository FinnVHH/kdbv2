// src/app/contact/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Bericht verzonden! We nemen zo snel mogelijk contact met u op.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

const googleMapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=" +
  "!1m18!1m12!1m3!1d2510.6384074211516!2d3.5042453!3d51.0426338" +
  "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1" +
  "!3m3!1m2!1s0x47c374d7c8a6f44d%3A0xc3f8f10668d2b78d!2sManewaarde%2043%2C%209880%20Aalter%2C%20Belgi%C3%AB" +
  "!5e0!3m2!1snl!2sbe!4v1700000000000!5m2!1snl!2sbe";

  return (
    <div className="flex flex-col bg-black text-white">

      {/* HEADER */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl font-bold">Neem Contact Op</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Heeft u vragen of wilt u een offerte aanvragen? Neem vandaag nog
            contact op met KDB Pitch Care.
          </p>
        </div>
      </section>

      {/* FORM & INFO CARDS */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
            
            {/* STUUR ONS EEN BERICHT */}
            <Card className="w-full max-w-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Stuur Ons Een Bericht</CardTitle>
                <CardDescription className="text-muted-foreground">
                  We reageren zo snel mogelijk.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 max-w-md mx-auto"
                >
                  <div className="grid gap-1.5">
                    <Label htmlFor="name">Uw Naam</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Jan Janssen"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="email">Uw E-mailadres</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="uw@voorbeeld.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="phone">Telefoonnummer (Optioneel)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+32 4XX XXX XXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="message">Uw Bericht</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Vertel ons over uw pitch behoeften..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Bericht Verzenden
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* CONTACT INFORMATIE */}
            <Card className="w-full max-w-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Contact Informatie</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Vind ons of bel ons.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex flex-col items-center">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <a
                    href="mailto:debaerekristof1@hotmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    debaerekristof1@hotmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <a
                    href="tel:+32474831960"
                    className="hover:text-primary transition-colors"
                  >
                    +32 474 83 19 60
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <address className="not-italic text-center">
                    <p className="font-semibold">KDB Pitch Care Hoofdkantoor</p>
                    <p>Manewaarde 43</p>
                    <p>9880 Aalter, België</p>
                  </address>
                </div>
                <div className="w-full max-w-sm h-64 rounded-md overflow-hidden shadow-sm border border-border">
                  <iframe
                    src={googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="KDB Pitch Care Locatie"
                  />
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

    </div>
  );
}
