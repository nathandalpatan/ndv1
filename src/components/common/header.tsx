import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center p-5 gap-6 font-bold">
      <Link href="#home" className="nav-link">
        HOME
      </Link>
      <Link href="#about" className="nav-link">
        ABOUT
      </Link>
      <Link href="/contact" className="nav-link">
        CONTACT
      </Link>
    </header>
  );
}
