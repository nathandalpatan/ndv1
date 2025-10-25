import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

export default function Header() {
  return (
    <header className="fixed w-full py-5 z-10 bg-background font-bold">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6">
        <div>
          <Link href="/" className="link text-3xl">
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
      </div>
    </header>
  );
}
