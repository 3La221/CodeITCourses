"use client"
import Hero from "@/components/home/Hero";
import Image from "next/image";
import { useState ,useEffect} from "react";




export default function Home() {

  const [isVisible, setIsVisible] = useState(false)

useEffect(() => {
  setIsVisible(true);
}, []);
  return (
   
    
    <div className={`fade-in-slide-up ${isVisible ? 'visible' : ''}`}>
          <Hero/>

      </div>

  );
}
