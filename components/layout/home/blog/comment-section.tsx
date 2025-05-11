"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"


interface Comment {
  id: number
  author: string
  avatar: string
  date: string
  content: string
  replies?: Comment[]
}

interface CommentSectionProps {
  postSlug: string
}

export function CommentSection({ postSlug }: CommentSectionProps) {
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
 

  // Contoh data komentar
  const comments: Comment[] = [
    {
      id: 1,
      author: "Budi Santoso",
      avatar: "/placeholder.svg?height=40&width=40&text=BS",
      date: "10 Mei 2025",
      content:
        "Artikel yang sangat informatif! Saya baru saja mulai belajar Next.js dan ini sangat membantu. Terima kasih atas penjelasannya yang detail.",
    },
    {
      id: 2,
      author: "Siti Rahayu",
      avatar: "/placeholder.svg?height=40&width=40&text=SR",
      date: "11 Mei 2025",
      content:
        "Saya sudah mencoba menggunakan Server Components dan memang sangat mempercepat loading time aplikasi saya. Apakah ada rekomendasi cara terbaik untuk menggabungkannya dengan state management seperti Redux?",
      replies: [
        {
          id: 3,
          author: "Admin",
          avatar: "/placeholder.svg?height=40&width=40&text=A",
          date: "11 Mei 2025",
          content:
            "Terima kasih atas pertanyaannya, Siti! Untuk Server Components, sebaiknya gunakan Context API atau Zustand untuk state management karena lebih kompatibel dengan arsitektur React yang baru. Redux masih bisa digunakan tapi perlu penyesuaian untuk bekerja dengan baik dengan Server Components.",
        },
      ],
    },
  ]

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment.trim()) return

    setIsSubmitting(true)

    // Simulasi pengiriman komentar
    setTimeout(() => {
      toast("Komentar berhasil dikirim!")
      setComment("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Komentar ({comments.length})</h2>

      {/* Comment Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Tinggalkan Komentar</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <Textarea
              placeholder="Tulis komentar Anda di sini..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-32"
            />
            <div className="flex justify-end">
              <Button type="submit" disabled={isSubmitting} className="gap-2">
                {isSubmitting ? "Mengirim..." : "Kirim Komentar"}
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-6">
            <div className="flex gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.author} />
                <AvatarFallback>{comment.author.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">{comment.author}</span>
                    <span className="ml-2 text-sm text-muted-foreground">{comment.date}</span>
                  </div>
                  <Button  size="sm">
                    Balas
                  </Button>
                </div>
                <p>{comment.content}</p>
              </div>
            </div>

            {/* Replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="ml-12 space-y-4 border-l-2 pl-6">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="flex gap-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={reply.avatar || "/placeholder.svg"} alt={reply.author} />
                      <AvatarFallback>{reply.author.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-medium">{reply.author}</span>
                          <span className="ml-2 text-sm text-muted-foreground">{reply.date}</span>
                        </div>
                        <Button  size="sm">
                          Balas
                        </Button>
                      </div>
                      <p>{reply.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Separator />
          </div>
        ))}
      </div>
    </section>
  )
}
