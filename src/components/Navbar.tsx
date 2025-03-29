
import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Earth } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Earth className="h-6 w-6 text-ocean-dark" />
          <span className="text-xl font-bold tracking-tight">Climate Bridge</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#sdg13" className="text-sm font-medium hover:text-ocean-dark transition-colors">
            SDG 13
          </a>
          <a href="#poem" className="text-sm font-medium hover:text-ocean-dark transition-colors">
            The Poem
          </a>
          <a href="#refugees" className="text-sm font-medium hover:text-ocean-dark transition-colors">
            Climate Refugees
          </a>
          <a href="#action" className="text-sm font-medium hover:text-ocean-dark transition-colors">
            Take Action
          </a>
        </nav>
        <div>
          <Button className="bg-earth-DEFAULT hover:bg-earth-dark text-white">
            Act Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
