
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudRain, CloudSun, Leaf } from "lucide-react";

const StatCard = ({ icon, title, value, description, color, bgImage }: { 
  icon: React.ReactNode, 
  title: string, 
  value: string, 
  description: string,
  color: string,
  bgImage: string
}) => (
  <Card className={`climate-stat ${color} relative overflow-hidden`}>
    <div 
      className="absolute inset-0 z-0 opacity-20" 
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
    <CardHeader className="flex flex-row items-center gap-2 pb-2 relative z-10">
      {icon}
      <CardTitle className="text-lg font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent className="relative z-10">
      <p className="stat-value">{value}</p>
      <CardDescription className="text-white/80 mt-2">{description}</CardDescription>
    </CardContent>
  </Card>
);

const SDG13Section = () => {
  return (
    <section id="sdg13" className="py-16 md:py-24 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 bg-ocean-light/20 text-ocean-dark rounded-full text-sm font-medium mb-4">
            Sustainable Development Goal 13
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Climate Action</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            SDG 13 aims to take urgent action to combat climate change and its impacts, especially for vulnerable communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard 
            icon={<CloudRain className="h-6 w-6 text-white" />} 
            title="Rising Displacement" 
            value="21.5 million"
            description="People displaced annually due to climate disasters"
            color="bg-ocean-DEFAULT"
            bgImage="https://images.unsplash.com/photo-1630002931917-964bceb12126"
          />
          <StatCard 
            icon={<CloudSun className="h-6 w-6 text-white" />} 
            title="Temperature Rise" 
            value="1.5°C"
            description="Global temperature increase we must limit to avoid catastrophe"
            color="bg-storm-DEFAULT"
            bgImage="https://images.unsplash.com/photo-1534794048419-48e110dca88e"
          />
          <StatCard 
            icon={<Leaf className="h-6 w-6 text-white" />} 
            title="Most Affected" 
            value="80%"
            description="Of climate refugees come from the world's poorest regions"
            color="bg-earth-DEFAULT"
            bgImage="https://images.unsplash.com/photo-1504808902208-d7879232f67e"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Why Climate Action Matters</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-ocean-light mr-3 mt-1 flex-shrink-0">1</span>
              <p><strong>Increasing disasters:</strong> Climate change is intensifying hurricanes, floods, and wildfires, forcing communities to abandon their homes and livelihoods.</p>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-ocean-light mr-3 mt-1 flex-shrink-0">2</span>
              <p><strong>Rising sea levels:</strong> Coastal communities and small island nations face existential threats as oceans rise, with some projections showing complete submersion of inhabited areas.</p>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-ocean-light mr-3 mt-1 flex-shrink-0">3</span>
              <p><strong>Resource scarcity:</strong> Changing precipitation patterns and extreme weather lead to crop failures and water shortages, triggering mass migration.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SDG13Section;
