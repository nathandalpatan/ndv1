import Link from "next/link";
import words from "@/constant/index";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-10">
      <h1 className="font-bold text-9xl">NATHAN DALPATAN</h1>
      <Link href="#about" className="link">
        ABOUT
      </Link>
      <Link href="#contact" className="link">
        CONTACT
      </Link>
    </div>
  );
}
