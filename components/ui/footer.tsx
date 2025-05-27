// src/components/ui/footer.tsx (No new changes, just for reference)
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background py-8">
      <div className="container flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">KDB Pitch Care</span>
          </Link>
        </div>
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground text-center">
          <Link href="/services" className="hover:text-primary transition-colors">
            Diensten
          </Link>
          <Link href="/portfolio" className="hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            Over Ons
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="text-sm text-muted-foreground text-center">
          © {currentYear} KDB Pitch Care. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}