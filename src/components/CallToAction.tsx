
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const ActionItem = ({ number, title, description }: { number: number; title: string; description: string }) => (
  <div className="border-l-4 border-earth-DEFAULT pl-4 py-2">
    <h4 className="text-lg font-bold mb-2">{number}. {title}</h4>
    <p className="text-gray-700">{description}</p>
  </div>
);

const CallToAction = () => {
  return (
    <section id="action" className="py-16 md:py-24 bg-gradient-to-br from-ocean-light/30 to-earth-light/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 bg-earth-DEFAULT/20 text-earth-dark rounded-full text-sm font-medium mb-4">
            Take Action Now
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of the Solution</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are all responsible for climate action. If we don't act now, more people will become refugees—not because of war, but because of a planet in crisis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Small Actions, Big Impact</h3>
            <div className="space-y-6">
              <ActionItem 
                number={1}
                title="Reduce Your Carbon Footprint"
                description="Choose public transport, reduce energy consumption, and consider your food choices to help reduce global emissions."
              />
              <ActionItem 
                number={2}
                title="Support Climate Policies"
                description="Vote for representatives who prioritize climate action and advocate for stronger environmental protections and refugee rights."
              />
              <ActionItem 
                number={3}
                title="Raise Awareness"
                description="Share information about climate displacement with your community and help others understand the human impact of climate change."
              />
              <ActionItem 
                number={4}
                title="Donate to Climate Action Organizations"
                description="Support organizations working on climate resilience, disaster relief, and advocacy for climate refugees."
              />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Join Our Newsletter</h3>
            <p className="mb-6">
              Stay informed about climate action initiatives, stories of climate refugees, and opportunities to make a difference.
            </p>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-DEFAULT"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-DEFAULT"
                  placeholder="your.email@example.com"
                />
              </div>
              <Button className="w-full bg-earth-DEFAULT hover:bg-earth-dark text-white">
                Subscribe
              </Button>
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <blockquote className="text-xl md:text-2xl italic font-medium mb-8 max-w-3xl mx-auto">
            "We are all responsible for climate action. The time to act is now."
          </blockquote>
          <Button variant="outline" size="lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ArrowUp className="mr-2 h-4 w-4" /> Back to Top
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
