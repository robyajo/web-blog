"use client"

import { Facebook, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-4 w-4" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-4 w-4" />,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ]

  return (
    <div className="flex gap-2">
      {shareLinks.map((link) => (
        <Button
          key={link.name}
          size="icon"
          onClick={() => window.open(link.url, "_blank")}
          aria-label={`Bagikan ke ${link.name}`}
        >
          {link.icon}
        </Button>
      ))}
    </div>
  )
}
