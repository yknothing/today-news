import { describe, expect, it, vi } from "vitest"

import { rss2json } from "./rss2json"

vi.mock("./fetch", () => ({
  myFetch: vi.fn().mockResolvedValue(`<?xml version="1.0" encoding="UTF-8"?>
<rss>
  <channel>
    <title>Example</title>
    <description>Example feed</description>
    <link>https://example.com</link>
    <item>
      <title>Item title</title>
      <description>Item description</description>
      <link>https://example.com/item</link>
    </item>
  </channel>
</rss>`),
}))

describe("rss2json", () => {
  it("parses rss feed into object", async () => {
    const result = await rss2json("https://example.com/feed")
    expect(result?.title).toBe("Example")
    expect(result?.items.length).toBe(1)
    expect(result?.items[0].title).toBe("Item title")
  })
})
