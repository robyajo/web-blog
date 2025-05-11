"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, MessageSquare, Search, Tag, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CommentSection } from "@/components/layout/home/blog/comment-section" 
import { RelatedPosts } from "@/components/layout/home/blog/related-posts" 
import { ShareButtons } from "@/components/layout/home/blog/share-buttons" 
import { Input } from "@/components/ui/input"
import { NewsletterForm } from "@/components/layout/home/blog/newsletter-form"
import { VisitorCounter } from "@/components/layout/home/blog/visitor-counter" 
import { useEffect, useState } from "react"

export default function ViewDetalPosts({ params }: { params: { slug: string } }) {
  // State untuk menghitung jumlah pengunjung
  const [visitorCount, setVisitorCount] = useState(0)

  // Simulasi penghitungan pengunjung saat halaman dimuat
  useEffect(() => {
    // Dalam aplikasi nyata, ini akan mengambil data dari database atau API
    // Untuk demo, kita akan menggunakan nilai acak berdasarkan slug
    const baseCount = 1500
    const slugHash = params.slug.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
    const randomCount = baseCount + (slugHash % 10000)

    // Simulasi penambahan pengunjung saat halaman dimuat
    setVisitorCount(randomCount)

    // Simulasi penambahan pengunjung (dalam aplikasi nyata, ini akan memanggil API)
    const incrementVisitor = async () => {
      // Tunggu sebentar untuk simulasi pemanggilan API
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // Tambahkan 1 pengunjung
      setVisitorCount((prev) => prev + 1)
    }

    incrementVisitor()
  }, [params.slug])

  // Dalam aplikasi nyata, Anda akan mengambil data post berdasarkan slug
  const post = {
    title: "Panduan Lengkap Membangun Website Modern dengan Next.js 15 dan React 19",
    slug: params.slug,
    date: "12 Mei 2025",
    author: "Admin",
    category: "Web Development",
    readTime: "8 menit",
    commentCount: 12,
    image: "/placeholder.svg?height=600&width=1200&text=Featured+Image",
    content: `
      <p class="lead">
        Next.js 15 dan React 19 telah membawa perubahan signifikan dalam cara kita membangun aplikasi web modern. Artikel ini akan membahas fitur-fitur terbaru dan bagaimana Anda dapat memanfaatkannya untuk proyek Anda.
      </p>
      
      <h2>Pengenalan Next.js 15</h2>
      
      <p>
        Next.js 15 hadir dengan peningkatan performa yang signifikan dan fitur-fitur baru yang memudahkan pengembang untuk membangun aplikasi yang cepat dan responsif. Salah satu fitur utamanya adalah peningkatan pada Partial Prerendering (PPR) yang memungkinkan aplikasi Anda memuat dengan sangat cepat.
      </p>
      
      <p>
        Dengan PPR, Next.js dapat merender sebagian halaman secara statis sementara bagian dinamis dirender secara streaming. Ini memberikan pengalaman pengguna yang lebih baik karena pengguna dapat melihat konten statis dengan cepat sementara konten dinamis dimuat.
      </p>
      
      <h2>React 19 dan Fitur Terbaru</h2>
      
      <p>
        React 19 membawa perubahan besar dengan pengenalan fitur-fitur baru seperti React Compiler dan peningkatan pada Server Components. React Compiler secara otomatis mengoptimalkan kode React Anda untuk performa yang lebih baik tanpa perlu mengubah kode Anda.
      </p>
      
      <p>
        Server Components memungkinkan Anda menulis komponen yang dirender di server, mengurangi ukuran JavaScript yang dikirim ke browser dan meningkatkan performa aplikasi Anda.
      </p>
      
      <h2>Memulai Proyek Baru</h2>
      
      <p>
        Untuk memulai proyek baru dengan Next.js 15, Anda dapat menggunakan perintah berikut:
      </p>
      
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>
        Ini akan membuat proyek Next.js baru dengan konfigurasi default. Anda dapat memilih untuk menggunakan TypeScript, ESLint, dan Tailwind CSS selama proses instalasi.
      </p>
      
      <h2>Menggunakan Server Components</h2>
      
      <p>
        Server Components adalah salah satu fitur utama yang membedakan Next.js dari framework lainnya. Dengan Server Components, Anda dapat menulis komponen yang dirender di server, mengurangi ukuran JavaScript yang dikirim ke browser.
      </p>
      
      <p>
        Berikut adalah contoh sederhana Server Component:
      </p>
      
      <pre><code>// app/page.tsx
export default async function Page() {
  const data = await fetchData();
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}</code></pre>
      
      <p>
        Perhatikan bahwa kita menggunakan kata kunci <code>async</code> pada fungsi komponen, yang memungkinkan kita untuk mengambil data secara langsung di dalam komponen tanpa perlu menggunakan hooks seperti <code>useEffect</code>.
      </p>
      
      <h2>Kesimpulan</h2>
      
      <p>
        Next.js 15 dan React 19 membawa perubahan signifikan dalam cara kita membangun aplikasi web. Dengan fitur-fitur baru seperti Partial Prerendering dan peningkatan pada Server Components, kita dapat membangun aplikasi yang lebih cepat dan lebih responsif.
      </p>
      
      <p>
        Jika Anda belum mencoba Next.js 15 dan React 19, sekarang adalah waktu yang tepat untuk memulai. Dengan ekosistem yang terus berkembang dan dukungan komunitas yang kuat, Next.js dan React tetap menjadi pilihan utama untuk membangun aplikasi web modern.
      </p>
    `,
  }

  return (
    <>
      
        <div className="mb-6">
          <Button  size="sm" asChild className="gap-1 pl-0">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="mx-auto ">
          <header className="mb-8 space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge >{post.category}</Badge>
              <Badge>{post.readTime} membaca</Badge>
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Oleh {post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span>{post.commentCount} komentar</span>
              </div>
              <VisitorCounter count={visitorCount} />
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8 overflow-hidden rounded-lg">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-auto w-full object-cover" />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Buttons */}
          <div className="my-8">
            <div className="flex items-center gap-2">
              <span className="font-medium">Bagikan:</span>
              <ShareButtons url={`https://yourblog.com/post/${post.slug}`} title={post.title} />
            </div>
          </div>

          <Separator className="my-8" />

          {/* Tags */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "Web Development", "JavaScript", "Frontend"].map((tag) => (
                <Badge key={tag}>
                  <Link href={`/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}>{tag}</Link>
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Info */}
          <Card className="mb-8 p-6">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <img
                    src="/placeholder.svg?height=100&width=100&text=Author"
                    alt="Author"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{post.author}</h3>
                <p className="text-muted-foreground">
                  Seorang pengembang web dengan pengalaman lebih dari 5 tahun dalam membangun aplikasi web modern
                  menggunakan React dan Next.js.
                </p>
                <div className="mt-2">
                  <Button size="sm">
                    Lihat Semua Artikel
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </article>

        {/* Comments Section */}
        <div className="mx-auto ">
          <CommentSection postSlug={post.slug} />
        </div>

        {/* Related Posts */}
        <div className="container mx-auto max-w-6xl py-10">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="lg:w-2/3">
              <RelatedPosts category={post.category} currentPostSlug={post.slug} />
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-1/3">
              <div className="space-y-6 lg:sticky lg:top-20">
               

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

                {/* Newsletter */}
                <NewsletterForm />
              </div>
            </aside>
          </div>
        </div>
      </>
  )
}
