import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VisitorCounter } from "./visitor-counter" 

export function FeaturedPost() {
  return (
    <section className="py-6">
      <h2 className="mb-4 text-2xl font-bold tracking-tight">Artikel Pilihan</h2>
      <Card className="overflow-hidden">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="aspect-video overflow-hidden md:aspect-auto md:h-full">
            <img
              src="/placeholder.svg?height=600&width=800&text=Featured+Post"
              alt="Featured post thumbnail"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge >Terbaru</Badge>
                  <Badge >Web Development</Badge>
                </div>
                <CardTitle className="text-2xl font-bold leading-tight lg:text-3xl">
                  <Link href="/post/panduan-nextjs-15" className="hover:underline">
                    Panduan Lengkap Membangun Website Modern dengan Next.js 15 dan React 19
                  </Link>
                </CardTitle>
                <CardDescription className="text-base">
                  Pelajari cara memanfaatkan fitur terbaru dari Next.js 15 dan React 19 untuk membangun website yang
                  cepat, responsif, dan modern. Artikel ini mencakup semua yang perlu Anda ketahui untuk memulai.
                </CardDescription>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>12 Mei 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Oleh Admin</span>
                </div>
                <VisitorCounter count={8765} />
              </div>
            </div>
            <CardFooter className="px-0 pb-0 pt-6">
              <Button className="gap-2" asChild>
                <Link href="/posts/panduan-nextjs-15">
                  Baca Artikel
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </section>
  )
}
