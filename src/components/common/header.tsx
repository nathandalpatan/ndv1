import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

export default function Header() {
  return (
    <header className="fixed w-full flex justify-between items-center px-32 py-5 z-10 bg-background font-bold">
      <div>
        <Link href="/" className="link">
          nD
        </Link>
      </div>
      <nav className="flex gap-10">
        <Link href="/blogs" className="link">
          BLOGS
        </Link>
        <Link href="/projects" className="link">
          PROJECTS
        </Link>
        <Link href="/leetcode" className="link">
          LEETCODE
        </Link>
      </nav>
      <ThemeToggle />
    </header>
  );
}
