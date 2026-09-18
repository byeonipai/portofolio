import { cn } from "@/lib/utils"

export function TagPill({
  children,
  className,
  tone = "muted",
}: {
  children: React.ReactNode
  className?: string
  tone?: "muted" | "primary"
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tone === "primary"
          ? "border-primary/40 bg-primary/10 text-primary"
          : "border-border bg-secondary/50 text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  )
}
