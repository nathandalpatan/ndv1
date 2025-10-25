import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold">Contact Me</h1>
      <Link href="mailto:nathandalp@gmail.com" className="link">
        nathandalp@gmail.com
      </Link>
    </div>
  );
}
