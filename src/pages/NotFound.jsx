import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center py-16">
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 items-center gap-16 px-8 md:grid-cols-[minmax(200px,300px)_1fr]">
        <div aria-hidden="true" className="mx-auto w-full max-w-[280px] md:max-w-[300px]">
          <svg viewBox="0 0 260 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
            <path
              d="M150 4c0 26-8 30-8 44 0 10 12 12 12 24"
              stroke="hsl(var(--sc-muted-foreground))"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M138 74c0-9 26-9 26 0s-26 9-26 18 26 9 26 18-26 9-26 0"
              stroke="hsl(var(--sc-muted-foreground))"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M151 112c-24 0-40 17-40 40 0 20 13 30 18 42 3 7 3 12 22 12s19-5 22-12c5-12 18-22 18-42 0-23-16-40-40-40Z"
              fill="hsl(var(--sc-primary) / 0.16)"
              stroke="hsl(var(--sc-foreground))"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="M139 156c6-10 8 6 12-2 3-8 6 8 10-2"
              stroke="hsl(var(--sc-primary))"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M136 208h30M139 216h24"
              stroke="hsl(var(--sc-muted-foreground))"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M92 150l-16-8M96 176l-18 4M210 150l16-8M206 176l18 4M151 96V78"
              stroke="hsl(var(--sc-primary))"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M18 286c-6-22 10-40 30-38 6-26 40-28 50-6 20-4 34 12 30 32 2 8-4 12-14 12H30c-8 0-11-4-12-2Z"
              fill="hsl(var(--sc-primary) / 0.12)"
              stroke="hsl(var(--sc-foreground))"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <circle cx="40" cy="264" r="2.4" fill="hsl(var(--sc-foreground))" />
            <circle cx="52" cy="264" r="2.4" fill="hsl(var(--sc-foreground))" />
            <path d="M40 274c4 4 10 4 14 0" stroke="hsl(var(--sc-foreground))" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="78" cy="252" r="2.4" fill="hsl(var(--sc-foreground))" />
            <circle cx="90" cy="252" r="2.4" fill="hsl(var(--sc-foreground))" />
            <path d="M78 260c4 3 10 3 14 0" stroke="hsl(var(--sc-foreground))" strokeWidth="2.2" strokeLinecap="round" />
            <circle
              cx="150"
              cy="272"
              r="14"
              fill="hsl(var(--sc-primary) / 0.18)"
              stroke="hsl(var(--sc-foreground))"
              strokeWidth="2.5"
            />
            <path d="M150 258l-6-10M150 258l7-9" stroke="hsl(var(--sc-foreground))" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="146" cy="272" r="2" fill="hsl(var(--sc-foreground))" />
            <circle cx="154" cy="272" r="2" fill="hsl(var(--sc-foreground))" />
          </svg>
        </div>

        <div className="min-w-0">
          <p className="mb-7 w-fit border-b border-border pb-3.5 text-sm text-muted-foreground">
            Error 404
          </p>
          <h1 className="mb-6 text-balance text-[clamp(2.6rem,6vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-foreground">
            there is
            <br />
            light in here too.
          </h1>
          <p className="mb-8 max-w-[44ch] text-base text-muted-foreground">
            But the page is missing, or the link was put together wrong.
          </p>
          <Button asChild size="lg" variant="ghost" className="px-0 hover:bg-transparent hover:text-primary">
            <Link to="/">
              Go home <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
