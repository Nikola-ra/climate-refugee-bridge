
import React from 'react';
import { Earth } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Earth className="h-6 w-6 text-ocean-light" />
            <span className="text-xl font-bold">Climate Bridge</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#sdg13" className="text-gray-300 hover:text-white transition-colors">
              SDG 13
            </a>
            <a href="#poem" className="text-gray-300 hover:text-white transition-colors">
              The Poem
            </a>
            <a href="#refugees" className="text-gray-300 hover:text-white transition-colors">
              Climate Refugees
            </a>
            <a href="#action" className="text-gray-300 hover:text-white transition-colors">
              Back to Top
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About SDG 13</h3>
              <p className="text-gray-400">
                Sustainable Development Goal 13 calls for urgent action to combat climate change and its impacts, recognizing that these impacts disproportionately affect the most vulnerable populations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">United Nations Climate Action</a></li>
                <li><a href="#" className="hover:text-white transition-colors">IPCC Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Climate Refugee Organizations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Benjamin Zephaniah's Poetry</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Climate Bridge. All rights reserved.</p>
            <p className="mt-2">A project to raise awareness about SDG 13 and climate refugees.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
