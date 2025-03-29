
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="action" className="py-16 md:py-24 bg-gradient-to-br from-ocean-light/30 to-earth-light/30">
      <div className="container px-4">
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
