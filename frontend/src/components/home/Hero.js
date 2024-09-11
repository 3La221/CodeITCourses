"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { CircleArrowOutUpRight, Send } from 'lucide-react';
import { RiArrowDownSLine } from "react-icons/ri";
import Socials from "./Socials";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-no-repeat bg-bottom dark:bg-none">
      <div className="flex justify-center"> 
      
      <div className="container mx-auto flex flex-col justify-center items-center h-full text-center">
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          {/* Title */}
          <div className="text-sm uppercase font-semibold mb-2 text-primary">CodeIT DZ</div>
          <h1 className="h1 mb-4">Master IT and Development with Us</h1>
          <p className="subtitle max-w-xl mb-8">
            At CodeIT DZ, we provide hands-on, in-person courses to help you excel in the IT and development fields. 
            Our expert-led programs are designed to equip you with the skills needed to succeed in today&apos;s tech-driven world.
          </p>
          {/* Buttons */}
          <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mb-6">
            <Link href='/register' passHref>
              <Button as="a" className="gap-x-2">
                Join Us <CircleArrowOutUpRight size={16} />
              </Button>
            </Link>
            <Link href='' passHref>
              <Button variant="secondary" className="gap-x-2">
                Contact Us <Send size={16} />
              </Button>
            </Link>
          </div>
          {/* Socials */}
          <Socials containerStyles='flex gap-x-3 justify-center' />
        </div>
        {/* Scroll Down Indicator */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bottom-16 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
      <img
    src="/hero/hero-light.svg"
    alt="hero"
    className="hidden xl:flex w-[600px] mb-12 mr-24  animate-slow-move"
  />
      </div>
      
    </section>
  );
};

export default Hero;