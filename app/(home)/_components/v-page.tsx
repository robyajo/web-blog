import Link from "next/link"
import { ArrowRight, Calendar, Search, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FeaturedPost } from "@/components/layout/home/blog/featured-post" 
import { NewsletterForm } from "@/components/layout/home/blog/newsletter-form" 
import { VisitorCounter } from "@/components/layout/home/blog/visitor-counter"

export default function ViewHome() {
  return (
   
    <>
      {/* Hero Section */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
            Blog Terbaru
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Temukan artikel, tutorial, dan berita terbaru tentang teknologi, desain, dan pengembangan web.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <FeaturedPost />

      {/* Main Content */}
      <div className="flex flex-col gap-10 py-6 lg:flex-row">
        {/* Blog Posts */}
        <section className="flex-1 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Artikel Terbaru</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {[1, 2, 3, 4, 5, 6].map((post) => (
              <Card key={post} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=200&width=400&text=Blog+Post+${post}`}
                    alt={`Blog post ${post} thumbnail`}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>12 Mei 2025</span>
                    </div>
                    <VisitorCounter count={1000 + post * 123} />
                  </div>
                  <CardTitle className="line-clamp-2 text-lg">
                    <Link href={`/posts/artikel-${post}`} className="hover:underline">
                      Cara Membuat Website Modern dengan Next.js dan Tailwind CSS
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    Pelajari cara membuat website modern yang responsif menggunakan Next.js dan Tailwind CSS.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0">
                  <Button  size="sm" className="gap-1 px-0 text-primary" asChild>
                    <Link href={`/posts/artikel-${post}`}>
                      Baca Selengkapnya
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button  className="gap-2">
              Lihat Semua Artikel
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/3">
          <div className="space-y-6 lg:sticky lg:top-20">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle>Pencarian</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Cari artikel..." className="pl-8" />
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Kategori</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["Web Development", "UI/UX Design", "JavaScript", "React", "Next.js", "Tailwind CSS"].map(
                  (category) => (
                    <Link
                      key={category}
                      href="#"
                      className="flex items-center justify-between rounded-md p-2 text-sm hover:bg-muted"
                    >
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        <span>{category}</span>
                      </div>
                      <span className="rounded-full bg-muted px-2 py-0.5 text-xs">12</span>
                    </Link>
                  ),
                )}
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle>Artikel Populer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((post) => (
                  <div key={post} className="flex gap-3">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                      <img
                        src={`/placeholder.svg?height=100&width=100&text=Popular+${post}`}
                        alt={`Popular post ${post}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <Link
                        href={`/posts/popular-${post}`}
                        className="line-clamp-2 text-sm font-medium hover:underline"
                      >
                        10 Tren Terbaru dalam Pengembangan Web di Tahun 2025
                      </Link>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>10 Mei 2025</span>
                        <VisitorCounter count={5000 + post * 1234} size="sm" />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter */}
            <NewsletterForm />
          </div>
        </aside>
      </div>
    </>

    
  )
}
