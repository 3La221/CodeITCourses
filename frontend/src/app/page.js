"use client"
import Hero from "@/components/home/Hero";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [configFile, setConfigFile] = useState('');

  useEffect(() => {
    setIsVisible(true);

    const fetchConfigFile = async () => {
      const response = await fetch('/config.txt');
      if (response.ok) {
        const configFile = await response.text();
        setConfigFile(configFile);
      } else {
        console.error('Error fetching config file');
      }
    };

    fetchConfigFile();
  }, []);

  return (
    <div className={`fade-in-slide-up ${isVisible ? 'visible' : ''}`}>
      <Hero />
      {/* Use the config data as needed */}
      <pre>{configFile}</pre>
    </div>
  );
}
