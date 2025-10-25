import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <h1 className="font-bold text-center text-6xl">CONTACT ME</h1>
      <Link href="mailto:nathandalp@gmail.com" className="link font-mono">
        nathandalp@gmail.com
      </Link>
    </div>
  );
}
