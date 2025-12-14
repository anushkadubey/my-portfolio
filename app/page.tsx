"use client";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { MyProjects } from "@/components/MyProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <MyProjects />
      </div>
    </main>
  );
};

export default Home;
