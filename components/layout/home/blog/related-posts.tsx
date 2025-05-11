import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { VisitorCounter } from "./visitor-counter" 

interface RelatedPostsProps {
  category: string
  currentPostSlug: string
}

export function RelatedPosts({ category, currentPostSlug }: RelatedPostsProps) {
  // Contoh data artikel terkait
  const relatedPosts = [
    {
      id: 1,
      title: "Optimasi Performa React dengan Hooks dan Memoization",
      slug: "optimasi-performa-react",
      date: "5 Mei 2025",
      category: "Web Development",
      image: "/placeholder.svg?height=200&width=400&text=Related+1",
      excerpt: "Pelajari cara mengoptimalkan aplikasi React Anda dengan menggunakan hooks dan teknik memoization.",
      visitors: 3245,
    },
    {
      id: 2,
      title: "Membangun API dengan Next.js Route Handlers",
      slug: "membangun-api-nextjs",
      date: "8 Mei 2025",
      category: "Web Development",
      image: "/placeholder.svg?height=200&width=400&text=Related+2",
      excerpt: "Panduan lengkap tentang cara membuat API yang kuat menggunakan Route Handlers di Next.js.",
      visitors: 2789,
    },
    {
      id: 3,
      title: "Styling Modern dengan Tailwind CSS dan CSS Variables",
      slug: "styling-modern-tailwind",
      date: "9 Mei 2025",
      category: "Web Development",
      image: "/placeholder.svg?height=200&width=400&text=Related+3",
      excerpt: "Teknik styling modern menggunakan Tailwind CSS dan CSS Variables untuk aplikasi web yang fleksibel.",
      visitors: 4123,
    },
  ]

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Artikel Terkait</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{post.date}</span>
                <VisitorCounter count={post.visitors} size="sm" />
              </div>
              <CardTitle className="line-clamp-2 text-lg">
                <Link href={`/post/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
            </CardHeader>
            <CardFooter className="p-4 pt-0">
              <Button  size="sm" className="gap-1 px-0 text-primary" asChild>
                <Link href={`/post/${post.slug}`}>
                  Baca Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
