"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMediaQuery } from "@/app/hooks/use-mobile";
import { ModeToggle } from "@/components/theme-toggle";

export function BlogHeader() {
  const [showSearch, setShowSearch] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Blog Modern</span>
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground/80"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground/80"
                >
                  Artikel
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground/80"
                >
                  Kategori
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground/80"
                >
                  Tentang
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground/80"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          {showSearch ? (
            <div className="relative flex-1 md:w-80 md:flex-initial">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari artikel..."
                className="w-full pl-8 md:w-80"
                autoFocus
                onBlur={() => !isMobile && setShowSearch(false)}
              />
              <Button
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => setShowSearch(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Tutup pencarian</span>
              </Button>
            </div>
          ) : (
            <>
              <Button size="icon" onClick={() => setShowSearch(true)}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Cari</span>
              </Button>
            </>
          )}
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="#" className="hover:text-foreground/80">
                  Beranda
                </Link>
                <Link href="#" className="hover:text-foreground/80">
                  Artikel
                </Link>
                <Link href="#" className="hover:text-foreground/80">
                  Kategori
                </Link>
                <Link href="#" className="hover:text-foreground/80">
                  Tentang
                </Link>
                <Link href="#" className="hover:text-foreground/80">
                  Kontak
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
