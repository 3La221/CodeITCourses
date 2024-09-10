"use client"
import Hero from "@/components/home/Hero";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  
  

  return (
    <div className={`fade-in-slide-up ${isVisible ? 'visible' : ''}`}>
      <Hero />
      {/* Use the config data as needed */}
     
    </div>
  );
}
