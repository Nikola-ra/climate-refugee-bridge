
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Flag } from "lucide-react";

const CaseStudy = ({ title, location, year, description, imageUrl }: {
  title: string;
  location: string;
  year: string;
  description: string;
  imageUrl: string;
}) => (
  <Card className="overflow-hidden h-full">
    <div className="h-48 overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-ocean-dark">{location}</span>
        <span className="text-sm text-gray-500">{year}</span>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </CardContent>
  </Card>
);

const RefugeesSection = () => {
  return (
    <section id="refugees" className="py-16 md:py-24 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 bg-earth-light/20 text-earth-dark rounded-full text-sm font-medium mb-4">
            The Human Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Climate Refugees</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unlike political refugees, those displaced by climate change lack legal recognition under international law.
          </p>
        </div>

        <div className="mb-16">
          <div className="relative overflow-hidden rounded-xl">
            <div className="bg-ocean-dark p-8 md:p-12 rounded-xl text-white">
              <div className="max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Legal Gap</h3>
                <p className="mb-4">
                  The 1951 Refugee Convention does not recognize people fleeing climate disasters as "refugees," leaving millions without legal protection or assistance.
                </p>
                <p className="mb-6">
                  This gap in international law means those forced to relocate due to rising seas, recurring floods, or devastating hurricanes have no guaranteed right to resettle in safer areas.
                </p>
                <div className="flex items-center gap-4">
                  <Flag className="h-6 w-6" />
                  <p className="font-bold">By 2050, up to 1.2 billion people could be displaced by climate-related events.</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-wave-pattern bg-no-repeat bg-cover opacity-20 animate-wave"></div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-6">Real World Case Studies</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CaseStudy
            title="Hurricane Katrina"
            location="New Orleans, USA"
            year="2005"
            description="Over 400,000 people were displaced, with many unable to return to their communities. Environmental injustice was evident as low-income and minority populations were disproportionately affected."
            imageUrl="https://images.unsplash.com/photo-1559825481-12a05cc00344"
          />
          <CaseStudy
            title="Cyclone Idai"
            location="Mozambique"
            year="2019"
            description="Nearly 2 million people were affected, with hundreds of thousands displaced from their homes. The cyclone destroyed 90% of the city of Beira, making it one of Africa's worst climate disasters."
            imageUrl="https://images.unsplash.com/photo-1603766806347-544d70260dfa"
          />
          <CaseStudy
            title="Rising Sea Levels"
            location="Bangladesh"
            year="Ongoing"
            description="Up to 18 million Bangladeshis may be forced to move by 2050 due to sea level rise alone. Already, saltwater intrusion is making coastal farming impossible, forcing internal migration."
            imageUrl="https://images.unsplash.com/photo-1570847196714-ac9a34a6842b"
          />
        </div>
      </div>
    </section>
  );
};

export default RefugeesSection;
