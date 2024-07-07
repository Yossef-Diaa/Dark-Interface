import Navbar from "@/app/_components/Navbar";
import Image from "next/image";
import Hero from "./_components/Hero";
import Author from "./_components/Author";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Author/>
    </div>
  );
}
