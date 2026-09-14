import Link from "next/link";
import Button from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-around w-full h-16 border-b border-black">
      <Link href="/">Le Rucher de Marquefave</Link>
      <nav className="flex items-center">
        <ul className="flex gap-4">
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/nos-miels">Nos miels</Link>
          </li>
          <li>
            <Link href="/le-rucher">Le Rucher</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Button>Commander</Button>
    </header>
  );
}
