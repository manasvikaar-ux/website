"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Button
      variant="outline"
      className="font-mono text-purple-500 border-purple-300 hover:border-purple-500"
      onClick={() => setCount((c) => c + 1)}
    >
      Count is {count}
    </Button>
  )
}