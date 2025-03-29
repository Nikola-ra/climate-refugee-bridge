
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const PoemSection = () => {
  return (
    <section id="poem" className="py-16 md:py-24 bg-ocean-light/10">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block py-1 px-3 bg-ocean-dark/20 text-ocean-dark rounded-full text-sm font-medium mb-4">
              Poetic Connection
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Zephaniah's "We Refugees"
            </h2>
            <p className="text-lg mb-6">
              Benjamin Zephaniah's powerful poem "We Refugees" captures the experience of forced migration, including that caused by climate disasters.
            </p>
            <Card className="bg-white shadow-lg border-0 overflow-hidden mb-8">
              <CardContent className="p-6">
                <blockquote className="text-xl italic font-medium">
                  "I come from a beautiful place<br/>
                  Where the valley floods each year<br/>
                  And each year the hurricane tells us<br/>
                  That we must keep moving on."
                </blockquote>
                <footer className="mt-4 text-sm text-gray-600">
                  - Benjamin Zephaniah, "We Refugees"
                </footer>
              </CardContent>
            </Card>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Key Line Analysis</h3>
              <p>
                The poem highlights the paradox of being forced to flee from a place that is still considered "beautiful" despite becoming uninhabitable due to recurring natural disasters.
              </p>
              <p>
                The personification of the hurricane as something that "tells us to move on" emphasizes the agency that natural forces now have over human settlement patterns - a direct result of climate change.
              </p>
              <p>
                The recurring nature ("each year") reflects the increasingly predictable pattern of climate disasters affecting the same vulnerable regions repeatedly.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="Flooded area after hurricane" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold">Modern Relevance</h3>
                  <p className="text-white/90">
                    Today, communities from Bangladesh to Pacific Islands to Central America face the same forced migration due to rising waters and increasingly violent storms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoemSection;
