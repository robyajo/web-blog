import { Eye } from "lucide-react"
import { cn } from "@/lib/utils"

interface VisitorCounterProps {
  count: number
  className?: string
  size?: "default" | "sm" | "lg"
}

export function VisitorCounter({ count, className, size = "default" }: VisitorCounterProps) {
  // Format the count to be more readable
  const formatCount = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    } else {
      return count.toString()
    }
  }

  const sizeClasses = {
    sm: "text-xs gap-0.5",
    default: "text-sm gap-1",
    lg: "text-base gap-1.5",
  }

  const iconSizes = {
    sm: "h-3 w-3",
    default: "h-4 w-4",
    lg: "h-5 w-5",
  }

  return (
    <div className={cn("flex items-center text-muted-foreground", sizeClasses[size], className)}>
      <Eye className={iconSizes[size]} />
      <span>{formatCount(count)}</span>
    </div>
  )
}
