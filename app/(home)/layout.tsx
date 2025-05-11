import { BlogHeader } from "@/components/layout/home/blog/blog-header";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="min-h-screen">
        <BlogHeader />
        <main className="container px-4 py-6 md:py-10">{children}</main>
        {/* Footer */}
        <footer className="border-t bg-muted/40">
          <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
            <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Blog Modern. Semua hak
              dilindungi.
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Tentang Kami
              </Link>
              <Separator orientation="vertical" className="h-4" />
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Kontak
              </Link>
              <Separator orientation="vertical" className="h-4" />
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
