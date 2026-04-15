import Image from "next/image"
import { Counter } from "@/components/counter"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center border-x max-w-5xl mx-auto">

      {/* CENTER SECTION */}
      <section className="flex flex-col items-center justify-center gap-6 flex-1 text-center px-6 py-10">

        {/* HERO */}
        <div className="relative">
          <Image src="/hero.png" alt="hero" width={170} height={179} />

          <Image
            src="/typescript.svg"
            alt="ts"
            width={40}
            height={40}
            className="absolute top-6 left-1/2 -translate-x-1/2 rotate-[300deg]"
          />

          <Image
            src="/vite.svg"
            alt="vite"
            width={30}
            height={30}
            className="absolute top-24 left-1/2 -translate-x-1/2 rotate-[300deg]"
          />
        </div>

        <div>
          <h1 className="text-5xl font-medium mb-4">Get started</h1>
          <p className="text-muted-foreground">
            Edit <code className="px-2 py-1 bg-muted rounded">src/main.ts</code> and save to test{" "}
            <code className="px-2 py-1 bg-muted rounded">HMR</code>
          </p>
        </div>

        <Counter />
      </section>

      {/* NEXT STEPS */}
      <section className="w-full border-t grid md:grid-cols-2">

        {/* DOCS */}
        <Card className="rounded-none border-0 border-r">
          <CardContent className="p-6">
            <h2 className="text-xl mb-2">Documentation</h2>
            <p className="text-muted-foreground mb-4">
              Your questions, answered
            </p>

            <div className="flex gap-2 flex-wrap">
              <a
                href="https://vite.dev/"
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 bg-muted rounded hover:shadow"
              >
                <Image src="/vite.svg" alt="" width={18} height={18} />
                Explore Vite
              </a>

              <a
                href="https://www.typescriptlang.org"
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 bg-muted rounded hover:shadow"
              >
                <Image src="/typescript.svg" alt="" width={18} height={18} />
                Learn more
              </a>
            </div>
          </CardContent>
        </Card>

        {/* SOCIAL */}
        <Card className="rounded-none border-0">
          <CardContent className="p-6">
            <h2 className="text-xl mb-2">Connect with us</h2>
            <p className="text-muted-foreground mb-4">
              Join the Vite community
            </p>

            <div className="flex gap-2 flex-wrap">
              <a href="https://github.com/vitejs/vite" target="_blank" className="px-3 py-2 bg-muted rounded hover:shadow">
                GitHub
              </a>
              <a href="https://chat.vite.dev/" target="_blank" className="px-3 py-2 bg-muted rounded hover:shadow">
                Discord
              </a>
              <a href="https://x.com/vite_js" target="_blank" className="px-3 py-2 bg-muted rounded hover:shadow">
                X
              </a>
              <a href="https://bsky.app/profile/vite.dev" target="_blank" className="px-3 py-2 bg-muted rounded hover:shadow">
                Bluesky
              </a>
            </div>
          </CardContent>
        </Card>

      </section>

      {/* SPACER */}
      <div className="h-20 border-t w-full" />
    </main>
  )
}