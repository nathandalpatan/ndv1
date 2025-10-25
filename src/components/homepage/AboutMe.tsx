import Image from "next/image";
import babyMe from "@/assets/babyMe.webp";

export default function AboutMe() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="font-bold text-6xl">ABOUT ME</h1>
      <p className="text-center font-mono">
        Hi I&apos;m Nathan, a computer science and IT management student at the
        University of Auckland!
        <br /> Outside of school, I like to stay active and work on not sucking
        at baking...
      </p>
      <Image src={babyMe} alt="Nathan" width={200} height={200} />
    </div>
  );
}
